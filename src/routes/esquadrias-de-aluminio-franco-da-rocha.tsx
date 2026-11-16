import { createFileRoute } from '@tanstack/react-router';
import { cities } from '@/lib/site/data';
import { pageHead } from '@/lib/site/seo';
import { CityPage } from '@/components/site/pages';
export const Route = createFileRoute('/esquadrias-de-aluminio-franco-da-rocha')({
  head: () => { const c = cities.find(c => c.slug === 'franco-da-rocha'); return pageHead('/esquadrias-de-aluminio-franco-da-rocha', `Esquadrias de alumínio em ${c?.name}`, c?.intro || 'Atendimento regional Modal Esquadrias.'); },
  component: Page,
});
function Page() { return <CityPage slug="franco-da-rocha" />; }
