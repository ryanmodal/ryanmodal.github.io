import { createFileRoute } from '@tanstack/react-router';
import { cities } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { CityPage } from '@/components/site/pages';
export const Route = createFileRoute('/esquadrias-de-aluminio-cajamar')({
  head: () => { const c = cities.find(c => c.slug === 'cajamar'); return pageHead('/esquadrias-de-aluminio-cajamar', `Esquadrias de alumínio em ${c?.name}`, c?.intro || 'Atendimento regional Modal Esquadrias.'); },
  component: Page,
});
function Page() { return <CityPage slug="cajamar" />; }
