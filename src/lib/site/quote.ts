import { z } from 'zod';
export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.').max(120),
  phone: z.string().transform(s => s.replace(/\D/g, '')).pipe(z.string().regex(/^\d{10,11}$/, 'Informe um telefone com DDD.')),
  address: z.string().trim().max(500).default(''), service: z.string().min(1).max(100),
  details: z.string().trim().max(3000).default(''), website: z.string().max(0, 'Não foi possível enviar.'),
  source: z.enum(['quote', 'catalogue']).default('quote'),
});
export function maskPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length < 3) return d ? `(${d}` : '';
  const rest = d.slice(2); const cut = d.length > 10 ? 5 : 4;
  return `(${d.slice(0, 2)}) ${rest.slice(0, cut)}${rest.length > cut ? '-' + rest.slice(cut) : ''}`;
}
export function quoteMessage(data: { name: string; phone: string; address: string; service: string; details: string }) {
  return ['Olá! Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?', '', `Nome: ${data.name}`, `Telefone: ${data.phone}`, data.address && `Endereço: ${data.address}`, `Serviço: ${data.service}`, data.details && `Detalhes: ${data.details}`].filter(Boolean).join('\n');
}
export function validatePhoto(file: File) {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return 'Envie uma foto JPG, PNG ou WebP.';
  if (file.size > 5 * 1024 * 1024) return 'A foto deve ter no máximo 5 MB.';
  return null;
}