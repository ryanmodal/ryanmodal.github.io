import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
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

import heroImg from "@/assets/hero-esquadrias.jpg";
import janelaImg from "@/assets/product-janela.jpg";
import boxImg from "@/assets/product-box.jpg";
import portaImg from "@/assets/product-porta.jpg";
import logoAsset from "@/assets/logo-modal-esquadrias.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE_DISPLAY = "(11) 93705-3816";
const PHONE_TEL = "+5511937053816";
const WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Olá! Gostaria de um orçamento de esquadrias de alumínio.",
)}`;
const ADDRESS = "Av. Alfredo de Paula, 456 — Jardim Luíza, Franco da Rocha - SP, 07865-210";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Modal+Esquadrias+Franco+da+Rocha";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <QuoteSection />
        <Gallery />
        <Reviews />
        <FAQ />
        <LocationCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------------- Top bar ---------------- */
function TopBar() {
  return (
    <div className="hidden bg-primary text-primary-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 whitespace-pre-line text-left">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>
              Seg a Sex · 09:00 – 17:30{"\n"}
              Sábado · 09:00 – 12:00
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Franco da Rocha & Região Metropolitana de SP
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-cta text-cta" /> 5,0 · 72 avaliações no Google
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 md:flex md:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Modal Esquadrias"
            className="h-10 w-10 shrink-0 rounded-lg object-contain"
            width={40}
            height={40}
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-extrabold text-foreground">
              Modal Esquadrias
            </div>
            <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">
              Alumínio · Vidros · Sob medida
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicos" className="hover:text-foreground">Serviços</a>
          <a href="#processo" className="hover:text-foreground">Como funciona</a>
          <a href="#galeria" className="hover:text-foreground">Galeria</a>
          <a href="#avaliacoes" className="hover:text-foreground">Avaliações</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand md:inline-flex"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href="#orcamento"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-3 py-2 text-sm font-semibold text-cta-foreground shadow-sm transition hover:brightness-95"
          >
            Orçamento grátis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Esquadrias de alumínio pretas com vidros grandes em residência moderna"
          className="h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:py-28">
        <div className="md:col-span-7 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-cta text-cta" /> Nota 5,0 · 72 avaliações no Google
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Esquadrias de alumínio sob medida em{" "}
            <span className="text-cta">Franco da Rocha</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Janelas, portas, box, fachadas e coberturas com fabricação própria, instalação
            profissional e prazo cumprido. Orçamento sem compromisso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-6 py-4 text-base font-bold text-cta-foreground shadow-lg shadow-black/20 transition hover:brightness-95"
            >
              <Phone className="h-5 w-5" /> Ligar {PHONE_DISPLAY}
            </a>
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Pedir orçamento online <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-3">
            {[
              "Medição sem custo",
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
    { icon: ShieldCheck, label: "Garantia por escrito" },
    { icon: Hammer, label: "Fabricação própria" },
    { icon: Ruler, label: "Medição gratuita" },
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
  const services = [
    {
      title: "Janelas de alumínio",
      desc: "Maxim-ar, correr, camarão e basculantes. Linhas Suprema, Gold e Reforçada.",
      img: janelaImg,
    },
    {
      title: "Portas e vidros",
      desc: "Portas de correr, pivotantes e sociais. Vidros temperados e laminados.",
      img: portaImg,
    },
    {
      title: "Box para banheiro",
      desc: "Box de correr e articulado, vidro incolor, fumê ou temperado 8mm.",
      img: boxImg,
    },
  ];
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
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
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
              <a
                href="#orcamento"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                Pedir orçamento <ArrowRight className="h-4 w-4" />
              </a>
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
    { n: "01", t: "Contato", d: "Você liga ou envia o pedido pelo formulário. Respondemos no mesmo dia." },
    { n: "02", t: "Medição", d: "Agendamos visita técnica gratuita no local da obra." },
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
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
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
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            Orçamento em até 24h
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Peça seu orçamento gratuito
          </h2>
          <p className="mt-3 max-w-md text-white/80">
            Conte o que você precisa. Retornamos rapidamente com uma proposta clara e sem
            compromisso.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-cta text-cta-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Ligue agora</div>
                <div className="font-display text-lg font-bold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.75_0.17_150)] text-[oklch(0.15_0.05_150)]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">WhatsApp</div>
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

function QuoteCard({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<"idle" | "sent">("idle");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold">Pedido recebido!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Entraremos em contato em até 24h úteis. Precisa de urgência? Ligue{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand hover:underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl"
    >
      {!compact && (
        <h3 className="font-display text-xl font-bold text-foreground">Solicitar orçamento</h3>
      )}
      {compact && (
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
          <span className="inline-block h-2 w-2 rounded-full bg-cta" /> Resposta em até 24h
        </div>
      )}

      <div className={`grid gap-3 ${compact ? "" : "mt-4"}`}>
        <Field label="Nome" name="name" required placeholder="Seu nome completo" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Telefone" name="phone" type="tel" required placeholder="(11) 90000-0000" />
          <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tipo de serviço
          </label>
          <select
            name="service"
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-brand/30 focus:ring-2"
          >
            <option>Janelas</option>
            <option>Portas</option>
            <option>Box para banheiro</option>
            <option>Fachada / cobertura</option>
            <option>Outros</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Detalhes (opcional)
          </label>
          <textarea
            name="details"
            rows={3}
            placeholder="Medidas aproximadas, endereço da obra, prazo..."
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-brand/30 focus:ring-2"
          />
        </div>
        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3.5 text-sm font-bold text-cta-foreground shadow-sm transition hover:brightness-95"
        >
          Enviar pedido de orçamento <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-center text-[11px] text-muted-foreground">
          Ao enviar, você concorda em receber nosso contato. Não enviamos spam.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-cta"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-brand/30 focus:ring-2"
      />
    </div>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const imgs = [heroImg, janelaImg, portaImg, boxImg, heroImg, portaImg];
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="Projetos entregues"
        title="Trabalhos que falam por si"
        desc="Uma amostra dos serviços recentes da Modal Esquadrias em residências e comércios."
      />
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl bg-muted ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt={`Projeto Modal Esquadrias ${i + 1}`}
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
function Reviews() {
  const reviews = [
    {
      name: "Rosangela Silva",
      when: "7 meses atrás",
      text: "Serviço excelente da Modal Esquadrias! A instalação dos 2 box ficou ótima, com ótimo acabamento e tudo entregue no prazo. Profissionais cuidadosos e caprichosos. Recomendo!",
    },
    {
      name: "Fabiano Gonzales",
      when: "1 ano atrás",
      text: "Excelente atendimento combinado com qualidade, atenção, criatividade, comprometimento e sobretudo confiabilidade. Leandro e seu time são muito atenciosos. Recomendo fortemente!",
    },
    {
      name: "Firmino Junior",
      when: "1 mês atrás",
      text: "Excelente serviço. Recomendo para quem quiser um serviço de qualidade.",
    },
  ];
  return (
    <section id="avaliacoes" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Avaliações
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              5,0 estrelas de <span className="text-brand">72 clientes</span>
            </h2>
            <div className="mt-4 flex items-center gap-1 text-cta">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              A confiança dos clientes é o nosso maior orgulho. Veja o que dizem sobre os serviços
              da Modal Esquadrias no Google.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <Quote className="h-6 w-6 text-brand/40" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</p>
                <footer className="mt-4 border-t border-border pt-3">
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.when}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Vocês fazem medição gratuita?",
      a: "Sim. Agendamos uma visita técnica sem custo para medir e entender o projeto antes do orçamento.",
    },
    {
      q: "Qual o prazo de fabricação e instalação?",
      a: "Depende do volume, mas a maioria dos projetos residenciais fica pronta entre 10 e 20 dias úteis após aprovação.",
    },
    {
      q: "Quais regiões vocês atendem?",
      a: "Franco da Rocha, Francisco Morato, Caieiras, Mairiporã e toda a região metropolitana de São Paulo.",
    },
    {
      q: "Existe garantia dos produtos?",
      a: "Sim. Todas as esquadrias possuem garantia por escrito contra defeitos de fabricação e instalação.",
    },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="Dúvidas frequentes"
        title="Perguntas mais comuns"
        desc="Não encontrou o que procura? Fale conosco pelo telefone ou WhatsApp."
        center
      />
      <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left font-semibold text-foreground">
              {f.q}
              <span className="ml-4 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

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
              <span className="text-foreground">Segunda a sábado · 08:00 às 18:30</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Traçar rota <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-4 w-4" /> Ligar agora
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Modal Esquadrias no mapa"
            src="https://www.google.com/maps?q=Av.+Alfredo+de+Paula,+456,+Franco+da+Rocha+SP&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-cta text-cta-foreground">
              <span className="font-display text-lg font-extrabold">M</span>
            </div>
            <div>
              <div className="font-display text-lg font-extrabold">Modal Esquadrias</div>
              <div className="text-xs text-white/60">Esquadrias de alumínio · Vidros</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Fabricação, entrega e instalação de esquadrias de alumínio sob medida. Atendendo
            Franco da Rocha e toda a região metropolitana de São Paulo com nota 5,0 no Google.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-cta">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-cta">
                WhatsApp
              </a>
            </li>
            <li className="text-white/60">{ADDRESS}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="#servicos" className="hover:text-cta">Serviços</a></li>
            <li><a href="#processo" className="hover:text-cta">Como funciona</a></li>
            <li><a href="#galeria" className="hover:text-cta">Galeria</a></li>
            <li><a href="#avaliacoes" className="hover:text-cta">Avaliações</a></li>
            <li><a href="#orcamento" className="hover:text-cta">Orçamento</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6">
          <div>© {new Date().getFullYear()} Modal Esquadrias. Todos os direitos reservados.</div>
          <div>CNPJ / Franco da Rocha - SP</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Sticky mobile CTA ---------------- */
function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="h-4 w-4" /> Ligar agora
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-3 py-3 text-sm font-bold text-cta-foreground"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
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
