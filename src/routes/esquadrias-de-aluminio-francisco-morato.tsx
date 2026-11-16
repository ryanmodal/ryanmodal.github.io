import { createFileRoute } from '@tanstack/react-router';
import { cities } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { CityPage } from '@/components/site/pages';
export const Route = createFileRoute('/esquadrias-de-aluminio-francisco-morato')({
  head: () => { const c = cities.find(c => c.slug === 'francisco-morato'); return pageHead('/esquadrias-de-aluminio-francisco-morato', `Esquadrias de alumínio em ${c?.name}`, c?.intro || 'Atendimento regional Modal Esquadrias.'); },
  component: Page,
});
function Page() { return <CityPage slug="francisco-morato" />; }
