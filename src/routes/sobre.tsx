import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/site/seo';
import { AboutPage } from '@/components/site/pages';
export const Route = createFileRoute('/sobre')({
 head: () => pageHead('/sobre', 'Sobre a Modal', 'Conheça a Modal Esquadrias de Franco da Rocha. Fabricação e instalação próprias de alumínio sob medida.', { noindex: false }),
 component: AboutPage,
});
