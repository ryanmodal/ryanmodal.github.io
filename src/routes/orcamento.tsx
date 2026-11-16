import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/site/seo';
import { QuotePage } from '@/components/site/pages';
export const Route = createFileRoute('/orcamento')({
 head: () => pageHead('/orcamento', 'Orçamento sob medida', 'Solicite orçamento de janelas, portas e box. Medição gratuita e resposta em até 24h.', { noindex: false }),
 component: QuotePage,
});
