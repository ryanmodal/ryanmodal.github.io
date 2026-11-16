import { useId, useState, type FormEvent } from 'react';
import { Download, LoaderCircle } from 'lucide-react';
import { useServerFn } from '@tanstack/react-start';
import { Button } from '@/components/ui/button';
import { maskPhone, quoteSchema } from '@/lib/site/quote';
import { submitQuote } from '@/lib/site/quote.functions';
import { track } from '@/lib/site/analytics';

export function Catalogue() {
  const id = useId(); const [phone, setPhone] = useState(''); const [state, setState] = useState<'idle'|'loading'|'success'>('idle'); const [error, setError] = useState(''); const send = useServerFn(submitQuote);
  const url = import.meta.env['VITE_CATALOGUE_URL']; const available = typeof url === 'string' && /^https:\/\//.test(url);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (!available) return;
    const fd = new FormData(e.currentTarget); fd.set('service','Catálogo'); fd.set('source','catalogue'); fd.set('website','');
    const result = quoteSchema.safeParse(Object.fromEntries(fd.entries())); if (!result.success) { setError(result.error.issues[0]?.message || 'Confira os dados.'); return; }
    setState('loading'); setError('');
    try { const r = await send({ data: fd }); if (!r.ok) { setError(r.error || 'Tente novamente.'); setState('idle'); return; } setState('success'); }
    catch { setError('Não foi possível enviar. Tente novamente.'); setState('idle'); }
  }
  return <section className="bg-surface"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2"><div><Download aria-hidden className="size-8 text-brand" /><h2 className="mt-4 text-3xl font-extrabold">Baixe o catálogo completo de produtos</h2><p className="mt-4 text-muted-foreground">Janelas, portas e soluções de alumínio sob medida.</p>{!available && <p className="mt-4 text-sm text-muted-foreground">Catálogo oficial em PDF: [PREENCHER].</p>}</div>{state === 'success' && available ? <div className="flex items-center"><Button asChild size="lg"><a href={url} target="_blank" rel="noopener noreferrer" download onClick={() => track('catalogue_download')}><Download aria-hidden /> Baixar catálogo PDF</a></Button></div> : <form onSubmit={submit} className="grid content-start gap-4"><div><label htmlFor={`${id}-name`} className="text-sm font-semibold">Nome</label><input id={`${id}-name`} name="name" required disabled={!available} autoComplete="name" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 disabled:opacity-60" /></div><div><label htmlFor={`${id}-phone`} className="text-sm font-semibold">Telefone / WhatsApp</label><input id={`${id}-phone`} name="phone" type="tel" required disabled={!available} value={phone} onChange={e => setPhone(maskPhone(e.target.value))} placeholder="(11) 90000-0000" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 disabled:opacity-60" /></div><p role="alert" className="text-sm text-destructive">{error}</p><Button type="submit" disabled={!available || state === 'loading'} size="lg">{state === 'loading' ? <LoaderCircle aria-hidden className="animate-spin" /> : <Download aria-hidden />} {available ? 'Receber catálogo' : 'Catálogo em breve'}</Button><p className="text-xs text-muted-foreground">Ao solicitar, você autoriza nosso contato sobre os produtos.</p></form>}</div></section>;
}