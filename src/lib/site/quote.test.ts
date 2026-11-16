import { describe, expect, it } from 'bun:test';
import { quoteSchema, maskPhone, validatePhoto } from './quote';
import { business } from './data';
import { businessSchema } from './seo';
describe('Business rules', () => {
  it('keeps the written warranty and supplied opening hours', () => {
    expect(businessSchema.openingHoursSpecification[0]?.opens).toBe('08:30');
    expect(businessSchema.openingHoursSpecification[0]?.closes).toBe('17:30');
    expect(businessSchema.openingHoursSpecification[1]?.opens).toBe('09:00');
    expect(businessSchema.openingHoursSpecification[1]?.closes).toBe('12:00');
  });
  it('keeps the official phone', () => expect(business.tel).toBe('+5511937053816'));
  it('requires a Brazilian telephone with DDD', () => {
    const base = { name: 'Teste', service: 'Janelas', website: '' };
    expect(quoteSchema.safeParse({ ...base, phone: '123' }).success).toBe(false);
    expect(quoteSchema.parse({ ...base, phone: '(11) 90000-0000' }).phone).toBe('11900000000');
    expect(maskPhone('11900000000')).toBe('(11) 90000-0000');
  });
  it('rejects honeypot spam', () => expect(quoteSchema.safeParse({ name: 'Teste', phone: '11900000000', service: 'Janelas', website: 'spam' }).success).toBe(false));
  it('accepts photos only and enforces the 5 MB cap', () => {
    expect(validatePhoto(new File(['test'], 'photo.jpg', { type: 'image/jpeg' }))).toBe(null);
    expect(validatePhoto(new File(['test'], 'script.html', { type: 'text/html' }))).not.toBe(null);
    expect(validatePhoto(new File([new Uint8Array(5242881)], 'big.jpg', { type: 'image/jpeg' }))).not.toBe(null);
  });
});