import { createFileRoute } from '@tanstack/react-router';
import { cities } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { CityPage } from '@/components/site/pages';
export const Route = createFileRoute('/esquadrias-de-aluminio-mairipora')({
  head: () => { const c = cities.find(c => c.slug === 'mairipora'); return pageHead('/esquadrias-de-aluminio-mairipora', `Esquadrias de alumínio em ${c?.name}`, c?.intro || 'Atendimento regional Modal Esquadrias.'); },
  component: Page,
});
function Page() { return <CityPage slug="mairipora" />; }
