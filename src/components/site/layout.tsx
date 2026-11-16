import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { Phone, MessageCircle, Menu, ChevronDown, ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-modal-esquadrias.webp.asset.json';
import { business, cities, services, whatsappUrl } from '@/lib/site/data';
import { initializeAnalytics, track } from '@/lib/site/analytics';

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false); const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const selected = services.find(s => pathname === `/${s.slug}`);
  const wa = whatsappUrl(selected?.title.toLowerCase());
  useEffect(() => { initializeAnalytics(); }, []);
  useEffect(() => {
    setMenu(false); track('page_view', { page_path: pathname });
    const scroll = () => setScrolled(window.scrollY > 300); scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    const clicks = (e: MouseEvent) => { const a = e.target instanceof Element ? e.target.closest('a') : null; if (a?.href.startsWith('tel:')) track('phone_click', { page_path: pathname }); else if (a?.href.includes('wa.me')) track('whatsapp_click', { page_path: pathname }); };
    document.addEventListener('click', clicks);
    return () => { window.removeEventListener('scroll', scroll); document.removeEventListener('click', clicks); };
  }, [pathname]);
  return <>
    <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
    <div className="hidden bg-primary text-primary-foreground md:block"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs"><span className="flex items-center gap-2"><Clock aria-hidden className="size-4" /> {business.hours}</span><span className="flex items-center gap-2"><Star aria-hidden className="size-4" /> 5,0 · {business.reviews} avaliações no Google</span></div></div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2"><img src={logo.url} width={44} height={44} alt="Modal Esquadrias" className="size-11 shrink-0 rounded-lg" /><div className="min-w-0"><div className="text-base font-extrabold text-foreground sm:text-lg">Modal Esquadrias</div><div className="text-[10px] font-semibold text-muted-foreground">ALUMÍNIO SOB MEDIDA</div></div></Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-semibold lg:flex"><details className="relative"><summary className="flex cursor-pointer items-center gap-1">Serviços <ChevronDown aria-hidden className="size-4" /></summary><div className="absolute left-0 top-full mt-4 w-64 rounded-lg border border-border bg-card p-2 shadow-lg">{services.map(s => <Link key={s.slug} to={`/${s.slug}`} className="block rounded-md px-3 py-2 hover:bg-accent" onClick={e => e.currentTarget.closest('details')?.removeAttribute('open')}>{s.title}</Link>)}</div></details><Link to="/sobre">Sobre a Modal</Link><Link to="/" hash="galeria">Projetos</Link><Link to="/" hash="avaliacoes">Avaliações</Link></nav>
        <div className="flex shrink-0 items-center gap-2"><Button asChild variant="outline" className="hidden xl:inline-flex"><a href={`tel:${business.tel}`}><Phone aria-hidden /> {business.phone}</a></Button><Button asChild className="hidden bg-cta text-cta-foreground hover:bg-brand sm:inline-flex"><Link to="/orcamento">Orçamento <ArrowRight aria-hidden /></Link></Button><Button variant="ghost" size="icon" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)} className="lg:hidden"><Menu aria-hidden /></Button></div>
      </div>
      {menu && <nav id="mobile-menu" aria-label="Menu móvel" className="max-h-[70vh] overflow-y-auto border-t border-border bg-background px-4 py-4 lg:hidden"><div className="grid gap-3">{services.map(s => <Link key={s.slug} to={`/${s.slug}`}>{s.title}</Link>)}<Link to="/sobre">Sobre a Modal</Link><Link to="/orcamento">Solicitar orçamento</Link><Link to="/" hash="galeria">Projetos</Link></div></nav>}
    </header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="bg-primary pb-24 text-primary-foreground md:pb-0"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"><div><Link to="/" className="flex items-center gap-2"><img src={logo.url} width={44} height={44} alt="Logo Modal Esquadrias" className="size-11 rounded-lg" /><span className="font-bold">Modal Esquadrias</span></Link><p className="mt-4 text-sm">ALUMÍNIO SOB MEDIDA</p><p className="mt-4 text-sm text-primary-foreground/80">Fabricação própria e instalação com equipe própria. Garantia de 3 anos por escrito.</p></div><div><h2 className="text-sm font-bold">Serviços</h2><ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">{services.map(s => <li key={s.slug}><Link to={`/${s.slug}`}>{s.title}</Link></li>)}</ul></div><div><h2 className="text-sm font-bold">Onde atendemos</h2><ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">{cities.map(c => <li key={c.slug}><Link to={`/esquadrias-de-aluminio-${c.slug}`}>{c.name}</Link></li>)}<li>Várzea Paulista e região metropolitana</li></ul></div><div><h2 className="text-sm font-bold">Fale com a Modal</h2><div className="mt-4 space-y-3 text-sm"><a href={`tel:${business.tel}`} className="flex gap-2"><Phone aria-hidden className="size-4" /> {business.phone}</a><a href={wa} target="_blank" rel="noopener noreferrer" className="block">WhatsApp</a><p className="flex gap-2"><MapPin aria-hidden className="size-4 shrink-0" />{business.address}</p><p>{business.hours}</p><a href={business.instagram} target="_blank" rel="noopener noreferrer">@modal.esquadrias</a><div className="flex gap-4"><Link to="/sobre">Sobre</Link><Link to="/orcamento">Orçamento</Link></div></div></div></div><div className="border-t border-primary-foreground/15 px-4 py-5 text-center text-xs text-primary-foreground/80">© 2026 Modal Esquadrias Ltda. · CNPJ {business.cnpj}</div></footer>
    <Button asChild size="icon" className="fixed bottom-6 right-6 z-40 hidden size-12 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:bg-whatsapp/90 md:inline-flex"><a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Pedir orçamento pelo WhatsApp"><MessageCircle aria-hidden /></a></Button>
    {scrolled && <div className="mobile-contact fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 md:hidden"><Button asChild className="h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp</a></Button><Button asChild className="h-12"><a href={`tel:${business.tel}`}><Phone aria-hidden /> Ligar agora</a></Button></div>}
  </>;
}