import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { quoteSchema, validatePhoto } from './quote';
import type { Database } from '@/integrations/supabase/types';

export const submitQuote = createServerFn({ method: 'POST' })
  .inputValidator((input: FormData) => {
    if (!(input instanceof FormData)) throw new Error('Pedido inválido.');
    const data = quoteSchema.parse(Object.fromEntries(input.entries()));
    const photo = input.get('photo');
    if (photo instanceof File && photo.size) {
      const error = validatePhoto(photo); if (error) throw new Error(error);
    }
    return { ...data, photo: photo instanceof File && photo.size ? photo : null };
  })
  .handler(async ({ data }) => {
    const url = process.env['SUPABASE_URL']; const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) return { ok: false, error: 'O envio está indisponível. Tente pelo WhatsApp.' };
    const client = createClient<Database>(url, key, { auth: { persistSession: false }, global: { fetch: (input, init) => {
      const h = new Headers(init?.headers); if (key.startsWith('sb_') && h.get('Authorization') === `Bearer ${key}`) h.delete('Authorization'); h.set('apikey', key); return fetch(input, { ...init, headers: h });
    } } });
    let photoPath: string | null = null;
    if (data.photo) {
      const ext = data.photo.type === 'image/jpeg' ? 'jpg' : data.photo.type === 'image/png' ? 'png' : 'webp';
      photoPath = `${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('quote-photos').upload(photoPath, data.photo, { contentType: data.photo.type, upsert: false });
      if (error) return { ok: false, error: 'Não foi possível anexar a foto. Tente novamente ou envie pelo WhatsApp.' };
    }
    const { error } = await client.from('quote_requests').insert({ name: data.name, phone: data.phone, address: data.address, service: data.service, details: data.details, source: data.source, photo_path: photoPath });
    if (error) return { ok: false, error: 'Não foi possível enviar. Se já enviou, aguarde um minuto; ou fale pelo WhatsApp.' };
    return { ok: true, error: null };
  });