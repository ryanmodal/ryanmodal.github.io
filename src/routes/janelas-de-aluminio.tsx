import { createFileRoute } from '@tanstack/react-router';
import { services } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { ServicePage } from '@/components/site/pages';
export const Route = createFileRoute('/janelas-de-aluminio')({
  head: () => { const s = services.find(s => s.slug === 'janelas-de-aluminio'); return pageHead('/janelas-de-aluminio', s?.title || 'Serviço', s?.intro || 'Soluções sob medida da Modal Esquadrias.', { service: true, faq: s?.faq }); },
  component: Page,
});
function Page() { return <ServicePage slug="janelas-de-aluminio" />; }
