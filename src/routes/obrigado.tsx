import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/site/seo';
import { ThankYouPage } from '@/components/site/pages';
export const Route = createFileRoute('/obrigado')({
 head: () => pageHead('/obrigado', 'Obrigado pelo seu pedido', 'Confirmação do pedido de orçamento à Modal Esquadrias.', { noindex: true }),
 component: ThankYouPage,
});
