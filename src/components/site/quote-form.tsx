import { useId, useState, type FormEvent } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { ArrowRight, MessageCircle, LoaderCircle, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quoteSchema, maskPhone, quoteMessage, validatePhoto } from '@/lib/site/quote';
import { submitQuote } from '@/lib/site/quote.functions';
import { track } from '@/lib/site/analytics';

export function QuoteForm({ compact = false, service }: { compact?: boolean; service?: string }) {
  const id = useId(); const navigate = useNavigate(); const send = useServerFn(submitQuote);
  const [phone, setPhone] = useState(''); const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false); const [error, setError] = useState('');
  function validate(form: HTMLFormElement) {
    const fd = new FormData(form); const parsed = quoteSchema.safeParse(Object.fromEntries(fd.entries()));
    const next: Record<string, string> = {};
    if (!parsed.success) for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
    const photo = fd.get('photo'); if (photo instanceof File && photo.size) { const e = validatePhoto(photo); if (e) next['photo'] = e; }
    setErrors(next); return { fd, parsed, valid: Object.keys(next).length === 0 };
  }
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const result = validate(form); if (!result.valid) return;
    setLoading(true); setError('');
    try {
      const response = await send({ data: result.fd });
      if (!response.ok) { setError(response.error || 'Tente novamente.'); return; }
      track('quote_submit', { service: String(result.fd.get('service')) });
      sessionStorage.setItem('modal-quote-confirmed', '1');
      sessionStorage.removeItem('modal-quote-view-tracked');
      await navigate({ to: '/obrigado' });
    } catch { setError('Não foi possível enviar. Tente novamente ou use o WhatsApp.'); }
    finally { setLoading(false); }
  }
  const fieldClass = 'mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-ring';
  return <form onSubmit={onSubmit} noValidate onBlur={e => { if (e.target.name) validate(e.currentTarget); }} className="rounded-lg border border-border bg-card p-5 text-card-foreground shadow-xl sm:p-6">
    <h2 className="text-xl font-bold">{compact ? 'Seu projeto começa aqui' : 'Solicitar orçamento'}</h2>
    <p className="mb-5 mt-1 text-sm text-muted-foreground">Medição gratuita · Resposta em até 24h</p>
    <div className="grid gap-3">
      <div><label htmlFor={`${id}-name`} className="text-sm font-semibold">Nome *</label><input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} placeholder="Seu nome completo" className={fieldClass} aria-invalid={!!errors['name']} aria-describedby={`${id}-name-error`} /><p id={`${id}-name-error`} className="text-xs text-destructive" aria-live="polite">{errors['name']}</p></div>
      <div><label htmlFor={`${id}-phone`} className="text-sm font-semibold">Telefone / WhatsApp *</label><input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel-national" required value={phone} onChange={e => setPhone(maskPhone(e.target.value))} placeholder="(11) 90000-0000" className={fieldClass} aria-invalid={!!errors['phone']} aria-describedby={`${id}-phone-error`} /><p id={`${id}-phone-error`} className="text-xs text-destructive" aria-live="polite">{errors['phone']}</p></div>
      <div><label htmlFor={`${id}-address`} className="text-sm font-semibold">Endereço da obra</label><input id={`${id}-address`} name="address" autoComplete="street-address" maxLength={500} placeholder="Rua, número, bairro e cidade" className={fieldClass} /></div>
      <div><label htmlFor={`${id}-service`} className="text-sm font-semibold">Tipo de serviço</label><select id={`${id}-service`} name="service" defaultValue={service || 'Janelas'} className={fieldClass}>{['Janelas','Portas','Box para banheiro','Guarda-corpo','Portões e gradis','Outros'].map(s => <option key={s}>{s}</option>)}</select></div>
      <div><label htmlFor={`${id}-details`} className="text-sm font-semibold">Detalhes (opcional)</label><textarea id={`${id}-details`} name="details" maxLength={3000} rows={compact ? 2 : 3} placeholder="Medidas aproximadas e o que você precisa" className={fieldClass} /></div>
      <div><label htmlFor={`${id}-photo`} className="flex items-center gap-2 text-sm font-semibold"><Paperclip aria-hidden className="size-4" /> Foto do local (opcional)</label><input id={`${id}-photo`} name="photo" type="file" accept="image/jpeg,image/png,image/webp" className="mt-2 w-full min-w-0 text-xs file:mr-2 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-secondary-foreground" aria-describedby={`${id}-photo-error`} /><p className="mt-1 text-xs text-muted-foreground">JPG, PNG ou WebP · até 5 MB</p><p id={`${id}-photo-error`} className="text-xs text-destructive" aria-live="polite">{errors['photo']}</p></div>
      <div className="hidden" aria-hidden><label htmlFor={`${id}-website`}>Website</label><input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>
      <input type="hidden" name="source" value="quote" />
      <p role="alert" className="text-sm text-destructive">{error}</p>
      <Button disabled={loading} type="submit" size="lg" className="h-auto min-h-12 whitespace-normal bg-cta py-3 text-cta-foreground hover:bg-brand">{loading ? <LoaderCircle aria-hidden className="animate-spin" /> : <ArrowRight aria-hidden />} {loading ? 'Enviando…' : 'Enviar pedido de orçamento'}</Button>
      <Button type="button" variant="outline" className="h-auto min-h-11 whitespace-normal text-whatsapp" onClick={e => {
        const form = e.currentTarget.form; if (!form) return; const result = validate(form);
        if (!result.valid || !result.parsed.success) return;
        track('whatsapp_click', { service: result.parsed.data.service });
        window.open(`https://wa.me/5511937053816?text=${encodeURIComponent(quoteMessage(result.parsed.data))}`, '_blank', 'noopener,noreferrer');
      }}><MessageCircle aria-hidden /> Enviar pelo WhatsApp</Button>
      <p className="text-center text-xs text-muted-foreground">Ao enviar, você autoriza nosso contato sobre este pedido. A foto fica privada. Pelo WhatsApp, anexe a foto na conversa.</p>
    </div>
  </form>;
}