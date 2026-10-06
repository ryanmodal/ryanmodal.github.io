import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Clock,
  Coffee,
  FileText,
  Gift,
  Lightbulb,
  MapPin,
  Megaphone,
  Menu,
  Palette,
  PenTool,
  Rocket,
  Ruler,
  ScanLine,
  Shirt,
  Sparkles,
  Store,
  Truck,
  X,
  Zap,
  Car,
  Layers,
  Signpost,
  type LucideIcon,
} from "lucide-react";

import logo from "@/assets/logo-scorpions.png";
import { Parallax, Reveal } from "@/components/scorpions/motion";
import {
  BrandScene,
  CustomScene,
  PaintAccent,
  PaintBurst,
  SignageScene,
  StorefrontScene,
  VehicleScene,
} from "@/components/scorpions/scenes";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ------------------------------------------------------------------ */
/* Dados da empresa — PLACEHOLDERS a confirmar com o cliente           */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "5511995505140";
const PHONE_DISPLAY = "(11) 99550-5140";
const INSTAGRAM_HANDLE = "scorpionsartesjundiai";
const ADDRESS = "Rua Rio de Janeiro, 624";
const CITY = "Jardim Tarumã, Jundiaí - SP";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Rio+de+Janeiro+624+Jardim+Taruma+Jundia%C3%AD+SP";
const HOURS = [
  { day: "Segunda a quinta", time: "9h às 11h30\n13h30 às 17h" },
  { day: "Sexta", time: "9h às 11h30\n13h30 às 16h" },
  { day: "Sábado e domingo", time: "Fechado" },
];

function whatsappLink(
  message = "Olá, Scorpions Artes! Vim pelo site e gostaria de pedir um orçamento.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.06L2 22l5.1-1.5A9.95 9.95 0 1 0 12.04 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.02.89.9-2.94-.2-.31a8.2 8.2 0 1 1 6.8 3.68Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */
type Category = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  scene: ReactNode;
  items: { icon: LucideIcon; name: string; text: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "comunicacao-visual",
    number: "01",
    name: "Comunicação Visual",
    tagline: "Sua loja vista de longe",
    description:
      "Projeto, fabricação e instalação de tudo que coloca o nome do seu negócio na rua: de dia com acabamento limpo, à noite com luz uniforme e sem pontos escuros.",
    scene: <SignageScene />,
    items: [
      {
        icon: Building2,
        name: "Fachadas em ACM",
        text: "Revestimento com recortes precisos e vedação para durar.",
      },
      {
        icon: PenTool,
        name: "Letras caixa",
        text: "Em PVC, acrílico ou aço, com ou sem iluminação em LED.",
      },
      {
        icon: Lightbulb,
        name: "Luminosos",
        text: "Caixas e placas iluminadas com face em lona ou acrílico.",
      },
      {
        icon: Signpost,
        name: "Totens",
        text: "Sinalização vertical para calçada, condomínio ou estacionamento.",
      },
    ],
  },
  {
    id: "adesivagem-envelopamento",
    number: "02",
    name: "Adesivagem e Envelopamento",
    tagline: "Troque de pele sem trocar de lugar",
    description:
      "Vinil de alta aderência aplicado em veículos, vidros e paredes. A arte é impressa em cores vivas e aplicada com acabamento sem bolhas e sem emendas aparentes.",
    scene: <VehicleScene />,
    items: [
      {
        icon: Car,
        name: "Envelopamento de veículos",
        text: "Total ou parcial, carros, vans e frotas com identidade única.",
      },
      {
        icon: Layers,
        name: "Adesivos personalizados",
        text: "Recorte eletrônico, impressão digital e laminação protetora.",
      },
      {
        icon: Store,
        name: "Aplicação em vitrines",
        text: "Jateado, perfurado e impresso: privacidade e promoções visíveis.",
      },
    ],
  },
  {
    id: "personalizados",
    number: "03",
    name: "Personalizados",
    tagline: "Sua marca nas mãos das pessoas",
    description:
      "Desde uma caneca de presente até o kit de uniformes da equipe. Pequenas tiragens com a mesma atenção das grandes: arte conferida antes de produzir.",
    scene: <CustomScene />,
    items: [
      {
        icon: Shirt,
        name: "Camisetas",
        text: "Uniformes, eventos e coleções com estampa durável.",
      },
      {
        icon: Gift,
        name: "Brindes",
        text: "Itens que o cliente guarda e usa, com sua marca à vista.",
      },
      {
        icon: Coffee,
        name: "Canecas",
        text: "Sublimação em alta resolução, de uma unidade ao lote.",
      },
      {
        icon: Megaphone,
        name: "Materiais promocionais",
        text: "Cartões, adesivos, banners e flyers para campanhas.",
      },
    ],
  },
  {
    id: "identidade-visual",
    number: "04",
    name: "Identidade Visual",
    tagline: "Antes da fachada, a marca",
    description:
      "Criamos o conjunto que faz seu comércio ser reconhecido em qualquer lugar: logotipo, cores, tipografia e aplicações prontas para a loja, a embalagem e as redes.",
    scene: <BrandScene />,
    items: [
      {
        icon: Sparkles,
        name: "Criação de logotipo",
        text: "Marca original, com versões para fundo claro, escuro e redes.",
      },
      {
        icon: FileText,
        name: "Papelaria",
        text: "Cartão, papel timbrado, etiquetas e embalagens alinhados à marca.",
      },
      {
        icon: Palette,
        name: "Projetos de marca",
        text: "Pacote completo para comércios que estão abrindo ou se renovando.",
      },
    ],
  },
];

const PACKAGES = [
  {
    icon: Store,
    name: "Pacote Fachada Completa",
    badge: "Mais procurado",
    text: "Projeto, fachada em ACM, letras caixa com LED e instalação. Seu ponto comercial pronto de uma vez.",
    includes: [
      "Projeto e simulação da fachada",
      "ACM + letras caixa iluminadas",
      "Instalação com equipe própria",
    ],
    message: "Olá! Tenho interesse no Pacote Fachada Completa. Podem me passar mais detalhes?",
  },
  {
    icon: Zap,
    name: "Envelopamento Expresso",
    badge: "Entrega rápida",
    text: "Envelopamento de veículo com prazo reduzido para quem não pode ficar muito tempo sem rodar.",
    includes: [
      "Arte aprovada pelo WhatsApp",
      "Vinil com laminação protetora",
      "Prazo prioritário de aplicação",
    ],
    message: "Olá! Quero saber sobre o Envelopamento Expresso. Podem me ajudar?",
  },
  {
    icon: Rocket,
    name: "Kit Lojista Personalizado",
    badge: "Para quem está abrindo",
    text: "Logotipo, papelaria e adesivagem de vitrine em um só pedido, com visual coerente do cartão à porta.",
    includes: ["Criação de logotipo", "Cartões e adesivos de marca", "Vitrine adesivada"],
    message: "Olá! Tenho interesse no Kit Lojista Personalizado. Podem me passar detalhes?",
  },
];

const DIFFERENTIALS = [
  {
    icon: MapPin,
    title: "Presença em Jundiaí e região",
    text: "Atendimento próximo: vamos até o seu ponto, medimos no local e instalamos sem terceirizar.",
  },
  {
    icon: ScanLine,
    title: "Acabamento que se vê de perto",
    text: "Cortes limpos, emendas escondidas, soldas lixadas e vedação revisada antes de entregar.",
  },
  {
    icon: Clock,
    title: "Agilidade com prazo combinado",
    text: "Cronograma passado logo no orçamento e atualizações a cada etapa, pelo WhatsApp.",
  },
  {
    icon: Ruler,
    title: "Do pequeno ao projeto completo",
    text: "Atendemos desde uma caneca até a identidade visual completa de um comércio, com o mesmo cuidado.",
  },
];

const STEPS = [
  { title: "Conversa", text: "Você conta a ideia e manda fotos ou medidas pelo WhatsApp." },
  { title: "Projeto", text: "Criamos a arte e mostramos aplicada antes de produzir." },
  { title: "Produção", text: "Impressão, corte e montagem na nossa oficina." },
  { title: "Instalação", text: "Entrega ou aplicação no local, com conferência final." },
];

const MARQUEE = [
  "Fachadas em ACM",
  "Letras caixa",
  "Luminosos",
  "Totens",
  "Envelopamento",
  "Adesivos",
  "Vitrines",
  "Camisetas",
  "Canecas",
  "Brindes",
  "Logotipos",
  "Papelaria",
];

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#destaques", label: "Destaques" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Localização" },
];

/* ------------------------------------------------------------------ */

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Highlights />
        <About />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- shared bits ---------------- */
function WhatsAppButton({
  children,
  message,
  className = "",
}: {
  children: ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-bold text-cta-foreground shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition hover:brightness-110 active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <PaintAccent className="h-7 w-10" />
        <span className="font-[family-name:var(--font-tech)] text-[10px] uppercase tracking-[0.3em] text-brand sm:text-xs">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h2>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

/* ---------------- header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-8 items-center justify-center gap-2 border-b border-white/10 bg-[#0b1430] px-3 text-center text-[11px] text-white/80 sm:text-xs">
        <span className="rounded bg-[#ffc61a] px-1.5 py-0.5 font-[family-name:var(--font-tech)] text-[8px] font-bold uppercase tracking-widest text-black sm:text-[9px]">
          Demonstração
        </span>
        <span>
          Site criado por <strong className="font-semibold text-white">Ryan Pereira</strong>
        </span>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-3" aria-label="Scorpions Artes — início">
          <img
            src={logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full ring-1 ring-white/15"
          />
          <span className="leading-none">
            <span className="block font-[family-name:var(--font-tech)] text-[13px] tracking-[0.14em] sm:text-sm">
              SCORPIONS
            </span>
            <span className="mt-1 block font-[family-name:var(--font-tech)] text-[8px] tracking-[0.5em] text-brand">
              ARTES
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="px-3.5 py-2.5 sm:px-5">
            <span>Orçamento</span>
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/15 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 pb-6 pt-2 md:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/5 py-4 text-lg font-semibold"
            >
              {n.label}
              <ArrowRight className="h-4 w-4 text-brand" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */
function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pt-32 sm:pt-36">
      <Parallax
        speed={0.18}
        className="pointer-events-none absolute -right-52 top-0 -z-10 w-[480px] opacity-20 sm:-right-24 sm:top-10 sm:w-[600px] sm:opacity-60"
      >
        <PaintBurst className="w-full" seed={7} />
      </Parallax>
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-[family-name:var(--font-tech)] text-[9px] uppercase tracking-[0.25em] text-white/80 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-cta shadow-[0_0_10px_#25d366]" />
              Jundiaí · SP e região
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              Comunicação visual que <span className="text-paint">transforma</span> sua marca
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Fachadas em ACM, envelopamento, personalizados e identidade visual: do projeto à
              instalação, com acabamento caprichado e prazo combinado.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicos"
              className="clip-tech inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_40px_-12px_rgba(47,107,255,0.9)] transition hover:brightness-110 active:scale-[0.98]"
            >
              Ver serviços <ArrowRight className="h-4 w-4" />
            </a>
            <WhatsAppButton className="py-4">Falar no WhatsApp</WhatsAppButton>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:text-sm">
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
                  ACM + LED
                </strong>
                fachadas
              </li>
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
                  Vinil
                </strong>
                carros e vitrines
              </li>
              <li>
                <strong className="block font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
                  Do zero
                </strong>
                logo e marca
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/40 via-transparent to-[#ff2db4]/30 blur-2xl" />
            <div className="card-edge clip-tech animate-float aspect-[4/3.1] overflow-hidden rounded-sm shadow-2xl">
              <StorefrontScene />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-md border border-white/10 bg-background/90 px-4 py-2.5 text-xs backdrop-blur sm:left-auto sm:right-4">
              <span className="font-[family-name:var(--font-tech)] text-[9px] uppercase tracking-[0.25em] text-brand">
                Ilustração
              </span>
              <p className="mt-1 text-white/70">Imagem de apoio, trocamos por fotos reais</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-[family-name:var(--font-tech)] text-[11px] uppercase tracking-[0.3em] text-white/55"
          >
            {w}
            <span className="h-1.5 w-1.5 rotate-45 bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- services ---------------- */
function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Catálogo de serviços"
            title={
              <>
                O que a <span className="text-paint">Scorpions</span> faz por você
              </>
            }
          >
            Quatro frentes de trabalho, uma só equipe. Escolha a categoria e peça o orçamento direto
            pelo WhatsApp.
          </SectionTitle>
        </Reveal>

        <nav
          aria-label="Categorias"
          className="sticky top-24 z-30 -mx-4 mt-8 flex gap-2 overflow-x-auto bg-background/80 px-4 py-3 backdrop-blur-xl [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:border-brand hover:text-white"
            >
              <span className="mr-2 font-[family-name:var(--font-tech)] text-[10px] text-brand">
                {c.number}
              </span>
              {c.name}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-20 sm:space-y-28">
          {CATEGORIES.map((c, i) => (
            <CategoryBlock key={c.id} category={c} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ category: c, flip }: { category: Category; flip: boolean }) {
  return (
    <article id={c.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="card-edge clip-tech relative aspect-[4/3] overflow-hidden rounded-sm">
          <Parallax speed={0.05} clamp={26} className="h-full w-full scale-[1.14]">
            {c.scene}
          </Parallax>
          <span className="absolute left-3 top-3 rounded bg-background/80 px-2.5 py-1 font-[family-name:var(--font-tech)] text-xs text-white backdrop-blur sm:text-sm">
            {c.number}
          </span>
        </div>
        <p className="mt-2 text-[11px] text-white/40">Imagem ilustrativa</p>
      </Reveal>

      <Reveal delay={100} className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3">
          <PaintAccent className="h-6 w-9" />
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            {c.tagline}
          </span>
        </div>
        <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{c.name}</h3>
        <p className="mt-4 leading-relaxed text-white/70">{c.description}</p>

        <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {c.items.map(({ icon: Icon, name, text }) => (
            <li key={name} className="flex gap-4 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold">{name}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-white/60">{text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50">Faixa de preço</span>
            <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
              a partir de <span className="text-paint">R$ XX</span>
            </p>
            <span className="text-[11px] text-white/40">Valor fictício, ilustrativo</span>
          </div>
          <WhatsAppButton message={`Olá! Gostaria de um orçamento de ${c.name}.`}>
            Pedir orçamento
          </WhatsAppButton>
        </div>
      </Reveal>
    </article>
  );
}

/* ---------------- highlights ---------------- */
function Highlights() {
  return (
    <section
      id="destaques"
      className="relative overflow-hidden border-y border-white/10 bg-surface py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Destaques"
            title={
              <>
                Os mais <span className="text-paint">procurados</span>
              </>
            }
            center
          >
            Pacotes pensados para resolver de uma vez o que o comércio de Jundiaí mais pede.
          </SectionTitle>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PACKAGES.map(({ icon: Icon, ...p }, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div className="card-edge group flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-brand text-white shadow-[0_10px_30px_-8px_rgba(47,107,255,0.8)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-[#ffc61a]/40 bg-[#ffc61a]/10 px-3 py-1 text-[11px] font-semibold text-[#ffc61a]">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#2fe07a]" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <p className="text-xs uppercase tracking-widest text-white/50">Investimento</p>
                  <p className="mb-4 font-[family-name:var(--font-display)] text-2xl font-extrabold">
                    a partir de R$ XX
                  </p>
                  <WhatsAppButton message={p.message} className="w-full">
                    Quero este pacote
                  </WhatsAppButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          Pacotes e valores são exemplos ilustrativos, as condições reais serão definidas pela
          Scorpions Artes.
        </p>
      </div>
    </section>
  );
}

/* ---------------- about ---------------- */
function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              eyebrow="A marca"
              title={
                <>
                  Do adesivo ao projeto <span className="text-paint">completo</span>
                </>
              }
            >
              A Scorpions Artes nasceu da combinação entre técnica e criatividade: gráfica digital,
              corte, serralheria leve e design sob o mesmo teto. É isso que nos permite atender o
              autônomo que precisa de 20 adesivos e o comerciante que quer a loja inteira com a
              mesma identidade.
            </SectionTitle>
            <div className="relative mt-8 flex items-center gap-5">
              <img
                src={logo}
                alt="Logo Scorpions Artes"
                width={112}
                height={112}
                className="h-24 w-24 rounded-full ring-1 ring-white/15 sm:h-28 sm:w-28"
              />
              <p className="max-w-[16rem] text-sm leading-relaxed text-white/60">
                Moderna, tecnológica e colorida no ponto certo: assim como a marca que carregamos.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {DIFFERENTIALS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="card-edge h-full rounded-lg p-6">
                  <Icon className="h-7 w-7 text-brand" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <h3 className="font-[family-name:var(--font-tech)] text-xs uppercase tracking-[0.3em] text-white/60">
              Como trabalhamos
            </h3>
            <ol className="mt-6 grid gap-6 sm:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative border-t border-brand/50 pt-4">
                  <span className="font-[family-name:var(--font-tech)] text-xs text-brand">
                    0{i + 1}
                  </span>
                  <p className="mt-1 font-bold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- location ---------------- */
function Location() {
  return (
    <section id="contato" className="relative border-t border-white/10 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Localização e horários"
            title={
              <>
                Venha conhecer a <span className="text-paint">oficina</span>
              </>
            }
          >
            Atendemos em Jundiaí e cidades vizinhas. Para orçamentos, o caminho mais rápido é o
            WhatsApp.
          </SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-edge flex h-full flex-col rounded-lg p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">Endereço</p>
                  <p className="mt-1 text-xl font-bold">{ADDRESS}</p>
                  <p className="text-white/65">{CITY}</p>
                </div>
              </div>
              <div className="my-6 divider-paint" />
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                  <Clock className="h-6 w-6" />
                </span>
                <dl className="w-full">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Horário de funcionamento
                  </p>
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="mt-2 flex justify-between gap-4 border-b border-white/5 pb-2 last:border-0"
                    >
                      <dt className="text-white/75">{h.day}</dt>
                      <dd className="whitespace-pre text-right font-semibold">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-6 rounded-md border border-[#ffc61a]/30 bg-[#ffc61a]/10 p-4 text-sm leading-relaxed text-[#ffd966]">
                <strong>Valores ilustrativos.</strong> Preços e pacotes exibidos são exemplos e
                serão substituídos pelos valores reais da Scorpions Artes.
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Ver no mapa <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#0b1430] to-[#05060a] p-6 sm:p-8">
              <Parallax
                speed={0.1}
                className="pointer-events-none absolute -bottom-16 -right-20 w-80 opacity-45"
              >
                <PaintBurst className="w-full" seed={21} />
              </Parallax>
              <div className="relative">
                <Truck className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-2xl font-extrabold">Atendemos Jundiaí e região</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65">
                  Medição, entrega e instalação no seu endereço. Envie fotos e medidas e receba uma
                  proposta sem precisar sair de casa.
                </p>
              </div>
              <div className="relative mt-8 space-y-3">
                <WhatsAppButton className="w-full py-4">Chamar no WhatsApp</WhatsAppButton>
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-black/30 px-5 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-white/50"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- final cta ---------------- */
function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <Parallax
        speed={0.12}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:opacity-50"
      >
        <PaintBurst className="w-full" seed={33} />
      </Parallax>
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-extrabold leading-[1.02] sm:text-6xl">
          Sua marca merece <span className="text-paint">aparecer</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70 sm:text-lg">
          Conte o que você precisa: fachada, veículo, vitrine ou uma tiragem de personalizados.
          Respondemos com um orçamento claro.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton className="px-8 py-4 text-base">Pedir orçamento agora</WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-28 pt-12 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="divider-paint mb-10" />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Scorpions Artes"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full"
            />
            <div>
              <p className="font-[family-name:var(--font-tech)] text-sm tracking-[0.14em]">
                SCORPIONS ARTES
              </p>
              <p className="mt-1 text-xs tracking-[0.3em] text-white/50">COMUNICAÇÃO VISUAL</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60" aria-label="Rodapé">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </nav>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-white/40">
          © {new Date().getFullYear()} Scorpions Artes · {CITY} · WhatsApp {PHONE_DISPLAY}. Preços e
          pacotes exibidos são ilustrativos e serão confirmados.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-white/50">
          Este é um site de demonstração desenvolvido por{" "}
          <strong className="text-white/80">Ryan Pereira</strong>.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- floating whatsapp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-cta pl-4 pr-5 font-bold text-cta-foreground shadow-[0_14px_40px_-8px_rgba(37,211,102,0.8)] transition hover:brightness-110 active:scale-95 sm:bottom-6 sm:right-6"
      style={{ animation: "pulse-ring 2.2s ease-out infinite" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="text-sm">Orçamento</span>
    </a>
  );
}
