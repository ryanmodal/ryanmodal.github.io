import { createFileRoute } from '@tanstack/react-router';
import { services } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { ServicePage } from '@/components/site/pages';
export const Route = createFileRoute('/portoes-e-gradis')({
  head: () => { const s = services.find(s => s.slug === 'portoes-e-gradis'); return pageHead('/portoes-e-gradis', s?.title || 'Serviço', s?.intro || 'Soluções sob medida da Modal Esquadrias.', { service: true, faq: s?.faq }); },
  component: Page,
});
function Page() { return <ServicePage slug="portoes-e-gradis" />; }
