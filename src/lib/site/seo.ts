import { business, type FAQItem } from './data';

export const businessSchema = {
  '@context': 'https://schema.org', '@type': 'GeneralContractor', '@id': `${business.domain}/#business`,
  name: business.name, legalName: business.legalName, url: business.domain,
  image: business.domain + business.image, telephone: business.tel,
  address: { '@type': 'PostalAddress', streetAddress: 'Av. Alfredo de Paula, 456 — Jardim Luíza', addressLocality: 'Franco da Rocha', addressRegion: 'SP', postalCode: '07865-210', addressCountry: 'BR' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:30', closes: '17:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '12:00' },
  ],
  areaServed: business.areas.map(name => ({ '@type': 'Place', name })),
  sameAs: [business.instagram, business.google],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: business.rating, reviewCount: business.reviews },
};
export function pageHead(path: string, title: string, description: string, options: { faq?: readonly FAQItem[]; service?: boolean; noindex?: boolean } = {}) {
  const fullTitle = `${title} | Modal Esquadrias`;
  const schemas: object[] = [businessSchema];
  if (path !== '/') schemas.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: business.domain },
    { '@type': 'ListItem', position: 2, name: title, item: business.domain + path },
  ] });
  if (options.service) schemas.push({ '@context': 'https://schema.org', '@type': 'Service', name: title, provider: { '@id': `${business.domain}/#business` }, areaServed: businessSchema.areaServed, url: business.domain + path });
  if (options.faq) schemas.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: options.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  return {
    meta: [ { title: fullTitle }, { name: 'description', content: description },
      { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }, { property: 'og:url', content: business.domain + path },
      { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: fullTitle }, { name: 'twitter:description', content: description },
      ...(options.noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
    ],
    links: [{ rel: 'canonical', href: business.domain + path }],
    scripts: schemas.map(schema => ({ type: 'application/ld+json', children: JSON.stringify(schema) })),
  };
}