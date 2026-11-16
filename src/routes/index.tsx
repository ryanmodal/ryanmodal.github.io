import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/site/quote-form";
import { ProjectGallery } from "@/components/site/gallery";
import { ProjectVideos } from "@/components/site/videos";
import { Catalogue } from "@/components/site/catalogue";
import { FaqList, LineComparison, Warranty, AboutSummary, BeforeAfter, MapOnDemand } from "@/components/site/content";
import { business, homeFaq, services as serviceData, gallery as projectPhotos } from "@/lib/site/data";
import { pageHead } from "@/lib/site/seo";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  ShieldCheck,
  Hammer,
  Truck,
  Ruler,
  MessageCircle,
  ArrowRight,
  Quote,
} from "lucide-react";

import heroAsset from "@/assets/modal-site.webp.asset.json";
import janelaImg from "@/assets/janela-modal.webp.asset.json";
import fotoModal5 from "@/assets/foto-modal-5.webp.asset.json";
import boxImg from "@/assets/box-modal.webp.asset.json";
import portaImg from "@/assets/porta-modal.webp.asset.json";
import logoAsset from "@/assets/logo-modal-esquadrias.webp.asset.json";
import fotoModal1 from "@/assets/modal-header.webp.asset.json";
import fotoModal2 from "@/assets/modal-header-2.webp.asset.json";
import fotoModal3 from "@/assets/modal-header-3.webp.asset.json";
import fotoModal4 from "@/assets/modal-header-4.webp.asset.json";
import modalVideo1 from "@/assets/modal-video-1.mp4.asset.json";
import modalVideo2 from "@/assets/modal-video-2.mp4.asset.json";
import modalVideo3 from "@/assets/modal-video-3.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => pageHead("/", "Esquadrias de alumínio sob medida em Franco da Rocha", "Janelas, portas e box com fabricação própria, medição gratuita e garantia de 3 anos. Solicite orçamento à Modal Esquadrias.", { faq: homeFaq }),
});

const PHONE_DISPLAY = "(11) 93705-3816";
const PHONE_TEL = "+5511937053816";
const WHATSAPP_MESSAGE =
  "Olá! Encontrei o site da Modal Esquadrias e gostaria de solicitar um orçamento. Poderiam me ajudar?";
const WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const ADDRESS = "Av. Alfredo de Paula, 456 — Jardim Luíza, Franco da Rocha - SP, 07865-210";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Modal+Esquadrias+Franco+da+Rocha";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div>
        <Hero />
        <TrustStrip />
        <Services />
        <LineComparison />
        <Process />
        <QuoteSection />
        <Gallery />
        <Reviews />
        <InstagramFeed />
        <BeforeAfter />
        <Warranty />
        <AboutSummary />
        <Catalogue />
        <FAQ />
        <LocationCTA />
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Esquadrias de alumínio pretas em área externa com piscina e acabamento moderno"
          className="h-full w-full object-cover"
          width={1600}
          height={1200}
          fetchPriority="high"
        />
        <div
          className="hero-overlay absolute inset-0"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:py-28">
        <div className="md:col-span-7 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-cta text-cta" /> Nota 5,0 · {business.reviews} avaliações no Google
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Esquadrias de alumínio sob medida em{" "}
            <span className="text-cta">Franco da Rocha</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Janelas, portas, box com fabricação própria, instalação profissional e prazo
            cumprido. Orçamento sem compromisso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-4 text-base font-bold text-cta-foreground shadow-lg shadow-primary/20 transition hover:brightness-95"
            >
              <Phone className="h-5 w-5" /> Ligar {PHONE_DISPLAY}
            </a>
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Pedir orçamento online <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-primary-foreground/90 sm:grid-cols-3">
            {[
              "Garantia de 3 anos",
              "Fabricação própria",
              "Instalação garantida",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <QuoteCard compact />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Garantia de 3 anos por escrito" },
    { icon: Hammer, label: "Fabricação própria" },
    { icon: Ruler, label: "Medimos em sua Residência\n" },
    { icon: Truck, label: "Entrega e instalação" },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = serviceData.map(s => ({ title: s.title, desc: s.intro, img: s.image, slug: s.slug }));
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="Nossos serviços"
        title="Soluções em alumínio e vidro para sua obra"
        desc="Fabricamos e instalamos esquadrias sob medida para residências, comércios e obras. Atendemos toda a região metropolitana de São Paulo."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to={`/${s.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                Conhecer opções <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Contato", d: "Você liga ou envia o pedido pelo formulário. Respondemos em até 24h." },
    { n: "02", t: "Medição", d: "Agendamos medição gratuita na residência conforme disponibilidade." },
    { n: "03", t: "Projeto & orçamento", d: "Enviamos proposta detalhada com prazo e valores fixos." },
    { n: "04", t: "Fabricação & instalação", d: "Produção própria, entrega e instalação com equipe treinada." },
  ];
  return (
    <section id="processo" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeader
          eyebrow="Como funciona"
          title="Do primeiro contato à instalação"
          desc="Um processo simples, transparente e sem surpresas."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="font-display text-3xl font-extrabold text-brand/30">{s.n}</div>
              <h3 className="mt-2 font-display text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Quote section ---------------- */
function QuoteSection() {
  return (
    <section id="orcamento" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium ring-1 ring-primary-foreground/20">
            Orçamento em até 24h
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Peça seu orçamento gratuito
          </h2>
          <p className="mt-3 max-w-md text-primary-foreground/80">
            Conte o que você precisa. Retornamos rapidamente com uma proposta clara e sem
            compromisso.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 p-4 ring-1 ring-primary-foreground/10 transition hover:bg-primary-foreground/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cta text-cta-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Ligue agora</div>
                <div className="font-display text-lg font-bold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 p-4 ring-1 ring-primary-foreground/10 transition hover:bg-primary-foreground/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">WhatsApp</div>
                <div className="font-display text-lg font-bold">Falar no WhatsApp</div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ compact = false }: { compact?: boolean }) { return <QuoteForm compact={compact} />; }

/* ---------------- Gallery ---------------- */
function Gallery() {
  return <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 sm:px-6"><SectionHeader eyebrow="Projetos entregues" title="Trabalhos que falam por si" desc="Fotos reais dos trabalhos da Modal Esquadrias." /><ProjectGallery /><ProjectVideos /></section>;
}

/* ---------------- Reviews (ElfSight Google Reviews) ---------------- */
function Reviews() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("elfsight-platform")) return;
    const script = document.createElement("script");
    script.id = "elfsight-platform";
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="avaliacoes" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Avaliações
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Avaliações reais do nossos clientes no Google, qualidade garantida!
          </p>
        </div>
        <div className="mt-10">
          <div
            className="elfsight-app-fdc56df8-ede1-4a1d-ac65-f1b27fa5159e"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Instagram Feed ---------------- */
function InstagramFeed() {
  return <section id="instagram" className="mx-auto max-w-7xl px-4 py-16 sm:px-6"><SectionHeader eyebrow="@modal.esquadrias" title="Acompanhe nossos projetos" /><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{projectPhotos.slice(0,4).map(p => <a key={p.src} href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil da Modal no Instagram" className="aspect-square overflow-hidden rounded-lg"><img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" className="h-full w-full object-cover" /></a>)}</div><a href={business.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-brand underline">Siga a Modal Esquadrias no Instagram</a></section>;
}

/* ---------------- FAQ ---------------- */
function FAQ() { return <div id="faq"><FaqList items={homeFaq} /></div>; }

/* ---------------- Location CTA ---------------- */
function LocationCTA() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Nossa localização
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground">
            Visite nossa loja em Franco da Rocha
          </h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="text-foreground">{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-foreground hover:text-brand">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="whitespace-pre-line text-foreground">
                {`Segunda a Sexta · 08:30 às 17:30\nSábado · 09:00 ás 12:00\u00a0`}
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Traçar rota <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-4 w-4" /> Ligar agora
            </a>
          </div>
        </div>
        <MapOnDemand address={business.address} />
      </div>
    </section>
  );
}

/* ---------------- Section header ---------------- */
function SectionHeader({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
