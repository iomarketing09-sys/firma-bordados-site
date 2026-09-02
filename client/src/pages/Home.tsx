/**
 * Design: Color que Trabaja — a bright, friendly B2B layout using the official brand palette.
 * Motion: a one-time stitch draw, short scroll reveals, and tactile catalog/CTA responses; never animate critical navigation.
 * Preserve clear corporate navigation and contact while making uniforms, embroidery, and color the main evidence.
 */
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Shirt,
  X,
} from "lucide-react";

const heroImage = "/media/hero-industrial.webp";
const processImage = "/media/proceso-detalle.webp";
const officialLogo = "/media/logo-firma-bordados.jpeg";
const authorizedProcessImage = "/media/proceso-autorizado.jpeg";
const uniformsImage = "/media/prendas-color-web.webp";
const storefrontImage = "/media/fachada-firma-bordados.webp";
const digitalizationImage = "/media/digitalizacion-proceso.png";
const guidedWhatsAppUrl = "https://wa.me/528787880735?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20a%20Firma%20Bordados.%0A%0ATipo%20de%20prenda%3A%0AT%C3%A9cnica%20que%20me%20interesa%20%28bordado%20o%20serigraf%C3%ADa%29%3A%0ACantidad%20aproximada%3A%0AUso%20o%20requerimiento%3A";
const officialEmail = "firmabordados@yahoo.com";
const guidedEmailUrl = `mailto:${officialEmail}?subject=Solicitud%20de%20informaci%C3%B3n%20%E2%80%94%20Firma%20Bordados&body=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n.%0A%0ATipo%20de%20prenda%3A%0AT%C3%A9cnica%20que%20me%20interesa%20%28bordado%20o%20serigraf%C3%ADa%29%3A%0ACantidad%20aproximada%3A%0AUso%20o%20requerimiento%3A`;
const formspreeEndpoint = "https://formspree.io/f/meajblbz";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Emilio%20Carranza%201021%20Int.%20113%2C%20Col.%20Bur%C3%B3cratas%2C%20Piedras%20Negras%2C%20Coahuila%2C%20Mexico";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/firmabordadospiedras" },
  { label: "Instagram", href: "https://www.instagram.com/firmabordados/" },
  { label: "X", href: "https://x.com/firmabordados" },
];

const catalogues = [
  {
    number: "01",
    label: "BigBang",
    detail: "Catálogo corporativo · PDF",
    url: "/catalogos/CATALOGO_BIGBANG_2019.pdf",
    size: "13.6 MB",
    accent: "bg-[#0d4c9e]",
  },
  {
    number: "02",
    label: "Soul & Blues 2025",
    detail: "Uniformes · PDF",
    url: "/catalogos/SOUL_BLUES_2025.pdf",
    size: "8.0 MB",
    accent: "bg-[#f3bd25]",
  },
  {
    number: "03",
    label: "M&O",
    detail: "Catálogo de prendas · PDF",
    url: "/catalogos/Catalogo_MyO_3.pdf",
    size: "3.8 MB",
    accent: "bg-[#df2b2c]",
  },
  {
    number: "04",
    label: "Dickies 2026",
    detail: "Ropa de trabajo · PDF",
    url: "/catalogos/Dickies_2026.pdf",
    size: "35.3 MB",
    accent: "bg-[#183d79]",
  },
];

const navItems = [
  ["Capacidades", "#capacidades"],
  ["Cómo solicitar", "#solicitar"],
  ["Catálogos", "#catalogos"],
  ["Preguntas", "#preguntas"],
  ["Nuestro trabajo", "#acerca"],
  ["Contacto", "#contacto"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNotice, setFormNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    main.classList.add("motion-ready");
    const elements = Array.from(main.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -34px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      main.classList.remove("motion-ready");
    };
  }, []);

  async function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    if (form.get("synthetic-test-consent") !== "yes") {
      setFormNotice("Para este piloto, confirme que enviará únicamente datos sintéticos de prueba.");
      return;
    }

    setIsSubmitting(true);
    setFormNotice("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree no aceptó la prueba.");

      formElement.reset();
      setFormNotice("Prueba enviada. Revise el buzón configurado en Formspree para confirmar la recepción.");
    } catch {
      setFormNotice("No fue posible enviar la prueba. Use el correo guiado como alternativa o inténtelo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffdf7] text-[#183d79]">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8e0ec] bg-white/95 shadow-[0_5px_20px_rgba(17,57,117,0.1)] backdrop-blur-md">
        <div className="h-2 bg-[#0d4c9e]" />
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio de Firma Bordados">
            <span className="flex h-12 w-14 items-center justify-center rounded-md bg-white p-0.5 shadow-[0_4px_14px_rgba(19,58,121,0.14)] transition-transform duration-200 group-hover:scale-105">
              <img src={officialLogo} alt="Logo oficial de Firma Bordados" className="h-full w-full object-contain" />
            </span>
            <span className="leading-none">
              <strong className="block font-display text-[0.96rem] font-bold tracking-[0.12em] text-[#163c79]">FIRMA</strong>
              <span className="mt-0.5 block text-[0.64rem] font-bold tracking-[0.29em] text-[#df2b2c]">BORDADOS</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#31517e] transition-colors hover:text-[#df2b2c]">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="hidden items-center gap-2 rounded-md bg-[#df2b2c] px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_7px_16px_rgba(223,43,44,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c82021] lg:flex">
            Solicitar información <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#cbd8eb] text-[#183d79] lg:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#d8e0ec] bg-white px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold uppercase tracking-[0.12em] text-[#183d79]">{label}</a>)}
              <a href="#contacto" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#df2b2c] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">Solicitar información <ArrowUpRight size={15} /></a>
            </nav>
          </div>
        )}
      </header>

      <main id="contenido-principal" ref={mainRef} tabIndex={-1}>
        <section id="inicio" className="relative overflow-hidden bg-[#fffdf7] pt-[84px]">
          <svg className="hero-thread absolute left-0 top-24 h-32 w-[70%] opacity-75" viewBox="0 0 720 130" preserveAspectRatio="none" aria-hidden="true">
            <path className="hero-thread-path" d="M-12 77C62 35 121 113 194 77S325 40 403 72s137 39 214-1 82-28 117-9" />
            <circle className="hero-thread-dot hero-thread-dot-one" cx="194" cy="77" r="5" />
            <circle className="hero-thread-dot hero-thread-dot-two" cx="403" cy="72" r="5" />
          </svg>
          <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[0.87fr_1.13fr] lg:items-stretch lg:px-10 lg:py-16">
            <div data-reveal className="relative z-10 flex flex-col justify-center py-5 lg:py-12">
              <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#0d4c9e]"><span className="h-2.5 w-2.5 rounded-full bg-[#f3bd25]" /> Bordado corporativo · Piedras Negras, Coahuila</p>
              <h1 className="max-w-2xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.055em] text-[#123d80] sm:text-6xl lg:text-[5.5rem]">
                Uniformes que <span className="text-[#df2b2c]">trabajan</span> con su equipo.
              </h1>
              <div className="mt-6 h-1.5 w-20 rounded-full bg-[#f3bd25]" />
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4e6282] lg:text-xl">Prendas, bordado y catálogos para equipos que buscan una imagen clara, profesional y lista para acompañar su operación.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={guidedWhatsAppUrl} target="_blank" rel="noreferrer" className="motion-cta inline-flex items-center justify-center gap-3 rounded-md bg-[#df2b2c] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-[0_10px_22px_rgba(223,43,44,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#c82021]">Solicitar por WhatsApp <MessageCircle size={17} /></a>
                <a href="#catalogos" className="motion-cta inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#0d4c9e] bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#0d4c9e] transition-all hover:-translate-y-0.5 hover:bg-[#edf4ff]">Ver catálogos <ArrowDownRight size={17} /></a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#31517e]"><span className="rounded-full bg-[#f8e6a3] px-3 py-2">20+ años</span><span className="rounded-full bg-[#dcebff] px-3 py-2">04 catálogos</span><span className="rounded-full bg-[#f9d1d1] px-3 py-2">Atención personalizada</span></div>
            </div>
            <div data-reveal data-reveal-delay="1" className="relative min-h-[410px] overflow-hidden rounded-[1.5rem] bg-[#0d4c9e] shadow-[0_24px_48px_rgba(18,61,128,0.18)] lg:min-h-[570px]">
              <img src={heroImage} alt="Proceso de bordado industrial y prendas de trabajo" fetchPriority="high" decoding="sync" className="h-full w-full object-cover object-[67%_center] brightness-110 saturate-[1.08]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(13,76,158,0.14))]" />
              <div className="absolute left-5 top-5 rounded-md bg-white/95 p-2 shadow-[0_6px_18px_rgba(8,47,112,0.18)]"><img src={officialLogo} alt="" className="h-12 w-14 object-contain" /></div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="max-w-[16rem] rounded-xl bg-[#0d4c9e]/94 p-5 text-white shadow-lg"><p className="text-[0.64rem] font-bold uppercase tracking-[0.15em] text-[#ffe584]">Detalle que se nota</p><p className="mt-2 font-display text-xl font-bold leading-tight">Cada prenda representa a su equipo.</p></div>
                <div className="hidden h-20 w-20 rounded-full border-[10px] border-[#f3bd25] bg-[#df2b2c] lg:block" />
              </div>
            </div>
          </div>
        </section>

        <section id="capacidades" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="max-w-2xl"><SectionLabel number="01" label="Lo que hacemos" /><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-[#123d80] sm:text-5xl">Personalización y prendas para equipos que trabajan en serio.</h2><p className="mt-5 text-base leading-7 text-[#5d6c82]">Digitalización, bordado, serigrafía y opciones de prenda para resolver necesidades de identificación y presentación.</p><div className="mt-6 flex items-center gap-3"><StitchRule /><span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#6d7c92]">Bordado · prenda · presentación</span></div></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <Capability number="01" revealDelay="1" icon={<Scissors />} title="Digitalización" text="Preparamos su diseño para llevarlo a prenda con claridad de detalle." color="border-t-[#0d4c9e]" badge="bg-[#dcebff] text-[#0d4c9e]" />
              <Capability number="02" revealDelay="2" icon={<ShieldCheck />} title="Bordado" text="Personalización bordada para prendas de trabajo y presentación." color="border-t-[#f3bd25]" badge="bg-[#fff2bd] text-[#a66a00]" />
              <Capability number="03" revealDelay="3" icon={<Layers3 />} title="Serigrafía" text="Una alternativa de impresión para identificar y personalizar prendas, a partir de 12 piezas." color="border-t-[#df2b2c]" badge="bg-[#f9d1d1] text-[#bd2021]" />
              <Capability number="04" revealDelay="4" icon={<Shirt />} title="Prendas y uniformes" text="Playeras, camisas, uniformes industriales y línea médica para consultar." color="border-t-[#0d4c9e]" badge="bg-[#dcebff] text-[#0d4c9e]" />
            </div>
            <div data-reveal data-reveal-delay="4" className="mt-7 grid max-w-5xl gap-3 sm:grid-cols-3">
              <p className="border-l-2 border-[#df2b2c] pl-4 text-sm leading-6 text-[#65728a]">Para mantener una atención clara desde el inicio: no trabajamos parches ni gorras.</p>
              <p className="border-l-2 border-[#f3bd25] pl-4 text-sm leading-6 text-[#65728a]">Los tiempos de entrega se confirman al revisar la cantidad, el requerimiento y la carga de trabajo actual.</p>
              <p className="border-l-2 border-[#0d4c9e] pl-4 text-sm leading-6 text-[#65728a]">Le ayudamos a explorar opciones de prenda de acuerdo con las necesidades de presentación de su equipo.</p>
            </div>
          </div>
        </section>

        <section id="solicitar" className="relative overflow-hidden bg-[#fff7da] py-20 lg:py-28">
          <div aria-hidden="true" className="absolute -left-10 top-16 h-32 w-32 rounded-full border-[18px] border-[#0d4c9e] opacity-10" />
          <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
            <div data-reveal className="max-w-3xl"><p className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-[#df2b2c]">Consulta clara</p><h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-[#123d80] sm:text-5xl">Así puede comenzar su solicitud.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#5d6c82]">Comparta una idea inicial y el equipo de Firma Bordados le orientará sobre la prenda, la técnica y los detalles a confirmar.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article data-reveal data-reveal-delay="1" className="rounded-2xl border-t-[6px] border-t-[#0d4c9e] bg-white p-7 shadow-[0_12px_24px_rgba(18,61,128,0.09)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcebff] text-sm font-bold text-[#0d4c9e]">01</span><h3 className="mt-6 font-display text-2xl font-bold text-[#123d80]">Cuéntenos su idea</h3><p className="mt-3 text-sm leading-6 text-[#65728a]">Indique el tipo de prenda, el uso de su equipo y la técnica que desea explorar.</p></article>
              <article data-reveal data-reveal-delay="2" className="rounded-2xl border-t-[6px] border-t-[#f3bd25] bg-white p-7 shadow-[0_12px_24px_rgba(18,61,128,0.09)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff2bd] text-sm font-bold text-[#a66a00]">02</span><h3 className="mt-6 font-display text-2xl font-bold text-[#123d80]">Explore opciones</h3><p className="mt-3 text-sm leading-6 text-[#65728a]">Revise los catálogos disponibles para conversar sobre una opción de prenda adecuada.</p></article>
              <article data-reveal data-reveal-delay="3" className="rounded-2xl border-t-[6px] border-t-[#df2b2c] bg-white p-7 shadow-[0_12px_24px_rgba(18,61,128,0.09)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9d1d1] text-sm font-bold text-[#bd2021]">03</span><h3 className="mt-6 font-display text-2xl font-bold text-[#123d80]">Confirme los detalles</h3><p className="mt-3 text-sm leading-6 text-[#65728a]">La cantidad, requerimiento y carga de trabajo se revisan directamente con el equipo.</p></article>
            </div>
            <div data-reveal data-reveal-delay="2" className="mt-8 grid gap-5 rounded-2xl bg-[#0d4c9e] p-6 text-white shadow-[0_18px_34px_rgba(18,61,128,0.2)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8"><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#ffe584]">Correo guiado</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/84">El correo prepara campos opcionales para prenda, técnica, cantidad aproximada y uso. El sitio no guarda esa información.</p></div><a href={guidedEmailUrl} className="motion-cta inline-flex items-center justify-center gap-3 rounded-md bg-[#df2b2c] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#c82021]">Preparar correo <Mail size={17} /></a></div>
            <div data-reveal data-reveal-delay="3" className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-[#d8e0ec] bg-white/85 p-5 shadow-[0_8px_18px_rgba(18,61,128,0.06)] lg:flex-row lg:items-center"><div><p className="text-[0.63rem] font-bold uppercase tracking-[0.16em] text-[#df2b2c]">Marcas por catálogo</p><p className="mt-1 text-sm leading-6 text-[#65728a]">Explore BigBang, Soul & Blues, M&O y Dickies 2026 en los catálogos vigentes para iniciar la conversación.</p></div><div className="flex flex-wrap gap-2">{catalogues.map((catalogue) => <a key={catalogue.label} href={catalogue.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#cbd8eb] bg-white px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#123d80] transition-colors hover:border-[#0d4c9e] hover:bg-[#edf4ff]"><Check size={14} className="text-[#df2b2c]" /> {catalogue.label}</a>)}</div></div>
          </div>
        </section>

        <section id="acerca" className="bg-[#f2f7ff] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div data-reveal className="relative order-2 grid grid-cols-[1.05fr_0.95fr] gap-3 sm:gap-5 lg:order-1"><div className="overflow-hidden rounded-2xl bg-[#0d4c9e] shadow-[0_16px_34px_rgba(13,76,158,0.14)]"><img src={authorizedProcessImage} alt="Prenda con bordado en proceso" loading="lazy" decoding="async" className="h-full min-h-[280px] w-full object-cover object-[50%_18%]" /></div><div className="flex flex-col gap-3 sm:gap-5"><div className="min-h-[140px] rounded-2xl bg-[#f3bd25] p-5 text-[#123d80]"><p className="font-display text-3xl font-bold">20+</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em]">años de experiencia</p><StitchRule className="mt-4 text-[#123d80]" /></div><div className="relative h-[205px] overflow-hidden rounded-2xl bg-[#dcebff]"><img src={uniformsImage} alt="Playeras y camisas en distintos colores" loading="lazy" decoding="async" className="h-full w-full object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#123d80] shadow-sm">Variedad para consultar</span></div></div><div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-[#df2b2c] sm:h-20 sm:w-20" /></div>
              <div data-reveal data-reveal-delay="1" className="order-1 lg:order-2"><SectionLabel number="02" label="Nuestro trabajo" /><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-[#123d80] sm:text-5xl">Prendas que hacen visible una buena organización.</h2><p className="mt-6 text-lg leading-8 text-[#5d6c82]">La selección adecuada de prenda, nombre y bordado puede ayudar a que cada equipo se vea cuidado, consistente y listo para representar a su organización.</p><p className="mt-4 max-w-xl text-sm leading-6 text-[#65728a]">Consulte playeras, camisas, uniformes industriales y línea médica para explorar una opción de prenda alineada a su necesidad.</p><div className="mt-6 flex items-center gap-3"><StitchRule /><span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#6d7c92]">Ficha de proceso · 02</span></div><a href="#contacto" className="motion-cta mt-8 inline-flex items-center gap-2 border-b-2 border-[#df2b2c] pb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#123d80] transition-colors hover:text-[#df2b2c]">Hablemos de su requerimiento <ArrowUpRight size={16} /></a></div>
            </div>
            <div data-reveal data-reveal-delay="2" className="mt-14 border-t border-[#cbd8eb] pt-9"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#df2b2c]">Galería de proceso</p><h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#123d80]">Detalles que acompañan a cada prenda.</h3></div><p className="max-w-sm text-sm leading-6 text-[#65728a]">Una muestra visual de bordado, digitalización, detalle de proceso y variedad de prendas para conversar sobre su requerimiento.</p></div><div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><figure className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(18,61,128,0.1)]"><img src={authorizedProcessImage} alt="Detalle de un bordado en una prenda" loading="lazy" decoding="async" className="h-[300px] w-full object-cover object-[50%_25%] transition-transform duration-500 group-hover:scale-[1.03]" /><figcaption className="border-t-4 border-[#0d4c9e] px-5 py-4 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-[#31517e]">Bordado en prenda</figcaption></figure><figure className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(18,61,128,0.1)]"><img src={processImage} alt="Detalle de bordado y maquinaria" loading="lazy" decoding="async" className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><figcaption className="border-t-4 border-[#f3bd25] px-5 py-4 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-[#31517e]">Detalle de bordado</figcaption></figure><figure className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(18,61,128,0.1)]"><img src={digitalizationImage} alt="Proceso de digitalización para bordado" loading="lazy" decoding="async" className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><figcaption className="border-t-4 border-[#0d4c9e] px-5 py-4 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-[#31517e]">Digitalización en proceso</figcaption></figure><figure className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(18,61,128,0.1)]"><img src={uniformsImage} alt="Playeras y camisas en distintos colores" loading="lazy" decoding="async" className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /><figcaption className="border-t-4 border-[#df2b2c] px-5 py-4 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-[#31517e]">Variedad de prendas</figcaption></figure></div></div>
          </div>
        </section>

        <section id="catalogos" className="bg-[#fff7da] py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div data-reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="max-w-2xl"><SectionLabel number="03" label="Catálogos" /><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-[#123d80] sm:text-5xl">Opciones para encontrar la prenda adecuada.</h2><div className="mt-6 flex items-center gap-3"><StitchRule /><span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#6d7c92]">Selección de prenda</span></div></div><p className="max-w-md text-sm leading-6 text-[#65728a]">Catálogos vigentes confirmados por Firma Bordados. Cada archivo se abre en una nueva pestaña.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3 xl:grid-cols-4">{catalogues.map((catalogue, index) => <a data-reveal data-reveal-delay={index + 1} key={catalogue.number} href={catalogue.url} target="_blank" rel="noreferrer" className="catalogue-card group relative overflow-hidden rounded-2xl border border-white bg-white p-7 shadow-[0_10px_22px_rgba(18,61,128,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(18,61,128,0.15)]"><div className={`absolute inset-x-0 top-0 h-2 ${catalogue.accent}`} /><div className="catalogue-meta"><span>Ficha de prenda</span><span>PDF · {catalogue.number}</span></div><div className="mt-5 flex items-start justify-between"><span className="font-display text-5xl font-bold tracking-[-0.06em] text-[#0d4c9e]">{catalogue.number}</span><span className="catalogue-arrow flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f7ff] text-[#0d4c9e] transition-colors group-hover:bg-[#0d4c9e] group-hover:text-white"><ArrowUpRight size={18} /></span></div><div className="mt-12"><h3 className="font-display text-2xl font-bold text-[#123d80]">{catalogue.label}</h3><p className="mt-2 text-sm text-[#65728a]">{catalogue.detail}</p><div className="mt-6 flex items-center justify-between border-t border-[#e4ebf5] pt-4 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#31517e]"><span>Abrir PDF</span><span>{catalogue.size}</span></div></div></a>)}</div></div>
        </section>

        <section id="preguntas" className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-10"><div data-reveal><SectionLabel number="04" label="Preguntas frecuentes" /><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-[#123d80] sm:text-5xl">Información útil antes de consultar.</h2><p className="mt-5 max-w-md text-base leading-7 text-[#5d6c82]">Si necesita orientación más específica, puede abrir WhatsApp y compartir los datos básicos de su requerimiento.</p><a href={guidedWhatsAppUrl} target="_blank" rel="noreferrer" className="motion-cta mt-8 inline-flex items-center gap-2 border-b-2 border-[#df2b2c] pb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#123d80] transition-colors hover:text-[#df2b2c]">Iniciar consulta por WhatsApp <ArrowUpRight size={16} /></a></div><div data-reveal data-reveal-delay="1" className="space-y-3"><FaqItem question="¿Cuál es el mínimo para serigrafía?" answer="Los trabajos de serigrafía se realizan a partir de 12 piezas. Para otras necesidades, consulte directamente con el equipo." /><FaqItem question="¿Cómo se confirman los tiempos de entrega?" answer="Se revisan según la cantidad, el requerimiento y la carga de trabajo actual antes de confirmar detalles." /><FaqItem question="¿Qué tipos de prenda puedo consultar?" answer="Puede consultar playeras, camisas, uniformes industriales y línea médica, así como las opciones visibles en los catálogos vigentes." /><FaqItem question="¿Trabajan parches o gorras?" answer="No. Firma Bordados no trabaja parches ni gorras." /></div></div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-[#0d4c9e] py-20 text-white lg:py-28">
          <svg className="contact-thread absolute bottom-0 right-0 h-full w-[64%] opacity-70" viewBox="0 0 680 520" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 110C116 58 160 188 284 134s170-52 276 6 91 30 142 2" /><path d="M118 458c86-89 150 15 250-38s162-92 324-43" /></svg><div className="absolute -right-10 top-14 h-32 w-32 rounded-full border-[18px] border-[#f3bd25] bg-[#df2b2c] opacity-95" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10"><div data-reveal><SectionLabel number="04" label="Contacto" dark /><h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Conversemos sobre lo que necesita su equipo.</h2><p className="mt-6 max-w-md text-base leading-7 text-white/82">Comparta brevemente su necesidad o comuníquese directamente con Firma Bordados.</p><div className="mt-6 flex items-center gap-3"><StitchRule className="text-[#ffe584]" /><span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/65">Respuesta clara · trato cercano</span></div><div className="mt-9 space-y-5 text-sm"><a href="https://wa.me/528787880735?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20prendas%2C%20bordado%20o%20serigraf%C3%ADa." target="_blank" rel="noreferrer" className="flex items-start gap-3 text-white/90 transition-colors hover:text-[#ffe584]"><MessageCircle className="mt-0.5 text-[#ffe584]" size={18} /><span>WhatsApp · (878) 788-0735</span></a><a href="mailto:firmabordados@yahoo.com" className="flex items-start gap-3 text-white/90 transition-colors hover:text-[#ffe584]"><Mail className="mt-0.5 text-[#ffe584]" size={18} /><span>firmabordados@yahoo.com</span></a><a href="tel:+528787822024" className="flex items-start gap-3 text-white/90 transition-colors hover:text-[#ffe584]"><Phone className="mt-0.5 text-[#ffe584]" size={18} /><span>(878) 782-2024</span></a><a href="tel:+528787834378" className="flex items-start gap-3 text-white/90 transition-colors hover:text-[#ffe584]"><Phone className="mt-0.5 text-[#ffe584]" size={18} /><span>(878) 783-4378</span></a><div className="flex items-start gap-3 text-white/90"><MapPin className="mt-0.5 text-[#ffe584]" size={18} /><span>Emilio Carranza #1021 Int. 113<br />Col. Burócratas, Piedras Negras, Coahuila.</span></div><div className="flex items-start gap-3 text-white/90"><Clock3 className="mt-0.5 text-[#ffe584]" size={18} /><span>Lunes a viernes · 8:00 am a 6:30 pm</span></div></div><figure className="mt-9 max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-[0_16px_35px_rgba(0,0,0,0.18)]"><img src={storefrontImage} alt="Fachada de Firma Bordados en Piedras Negras" loading="lazy" decoding="async" className="aspect-square w-full object-cover" /><figcaption className="flex items-center gap-2 px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/85"><MapPin size={14} className="text-[#ffe584]" /> Atención local en Piedras Negras</figcaption></figure></div><form data-reveal data-reveal-delay="1" onSubmit={handleContact} className="rounded-2xl bg-white p-6 text-[#183d79] shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-9"><input type="hidden" name="_subject" value="Prueba sintética — Formulario Firma Bordados" /><input type="text" name="_gotcha" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="flex items-center justify-between border-b border-[#d8e0ec] pb-5"><div><span className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#0d4c9e]">Piloto de formulario</span><p className="mt-1 text-xs text-[#687b98]">Solo pruebas sintéticas mientras se verifica el buzón oficial.</p></div><img src={officialLogo} alt="" loading="lazy" decoding="async" className="h-9 w-11 object-contain" /></div><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Nombre de prueba" name="name" placeholder="Ejemplo de prueba" required /><Field label="Correo de prueba" name="email" placeholder="prueba@ejemplo.com" type="email" required /><Field label="Empresa (opcional)" name="company" placeholder="Empresa de prueba" /><Field label="Teléfono (opcional)" name="phone" placeholder="Solo si desea probarlo" type="tel" /></div><div className="mt-5"><label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.12em] text-[#4d6183]">Requerimiento sintético</label><textarea id="message" name="message" required rows={5} placeholder="Escriba únicamente una prueba, sin datos reales." className="mt-2 w-full resize-none rounded-md border border-[#cbd8eb] bg-[#f8fbff] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#8495ae] focus:border-[#0d4c9e] focus:ring-2 focus:ring-[#0d4c9e]/20" /></div><label className="mt-5 flex items-start gap-3 rounded-md bg-[#fff7da] p-4 text-xs leading-5 text-[#765400]"><input className="mt-0.5 h-4 w-4 accent-[#0d4c9e]" type="checkbox" name="synthetic-test-consent" value="yes" required /><span>Confirmo que esta es una prueba sintética y que no incluiré datos personales reales, archivos ni información de clientes.</span></label><button type="submit" disabled={isSubmitting} className="motion-cta mt-6 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#df2b2c] px-5 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-[#c82021] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Enviando prueba…" : "Enviar prueba sintética"} <Send size={16} /></button><p className="mt-4 text-xs leading-5 text-[#687b98]">Este piloto envía pruebas sintéticas a Formspree para validar el flujo. Para una consulta real, use el correo guiado o WhatsApp.</p><a href={guidedEmailUrl} className="mt-3 inline-flex text-xs font-bold text-[#0d4c9e] underline decoration-[#f3bd25] decoration-2 underline-offset-4 hover:text-[#df2b2c]">Preparar correo oficial</a>{formNotice && <p className="mt-3 rounded-md border-l-4 border-[#f3bd25] bg-[#fff7da] px-3 py-2 text-xs font-medium text-[#765400]">{formNotice}</p>}</form></div>
        </section>
      </main>

      <footer className="bg-[#123d80] py-8 text-white/75"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 text-xs sm:flex-row sm:items-center lg:px-10"><p>© {new Date().getFullYear()} Firma Bordados. Todos los derechos reservados.</p><div className="flex flex-wrap items-center gap-x-4 gap-y-2"><nav className="flex items-center gap-3" aria-label="Redes sociales">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="font-bold uppercase tracking-[0.11em] text-white/75 transition-colors hover:text-[#ffe584]" aria-label={`Abrir ${social.label} de Firma Bordados en una nueva pestaña`}>{social.label}</a>)}</nav><a href="/privacidad/" className="font-bold uppercase tracking-[0.11em] text-white/75 transition-colors hover:text-[#ffe584]">Aviso de privacidad</a><a href={directionsUrl} target="_blank" rel="noreferrer" className="font-bold uppercase tracking-[0.11em] text-white/75 transition-colors hover:text-[#ffe584]">Cómo llegar</a><span className="font-semibold uppercase tracking-[0.12em] text-white/45">Staging de modernización · sin cambio DNS</span></div></div></footer>
    </div>
  );
}

function Capability({ icon, title, text, color, badge, revealDelay, number }: { icon: React.ReactNode; title: string; text: string; color: string; badge: string; revealDelay: string; number: string }) {
  return <article data-reveal data-reveal-delay={revealDelay} className={`catalogue-sheet rounded-2xl border border-[#e2e9f2] border-t-[6px] bg-white p-7 shadow-[0_8px_18px_rgba(18,61,128,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(18,61,128,0.12)] ${color}`}><div className="catalogue-meta"><span>Ficha de servicio</span><span>FB · {number}</span></div><span className={`mt-5 flex h-11 w-11 items-center justify-center rounded-xl ${badge}`}>{icon}</span><h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.025em] text-[#123d80]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#65728a]">{text}</p><StitchRule className="mt-6" /></article>;
}

function SectionLabel({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) {
  return <div className={`flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.17em] ${dark ? "text-[#ffe584]" : "text-[#0d4c9e]"}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full text-[0.62rem] ${dark ? "bg-white/15" : "bg-[#dcebff]"}`}>{number}</span><span className="h-px w-8 bg-current" />{label}</div>;
}

function StitchRule({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`stitch-rule ${className}`}><i /><i /><i /><i /><i /></span>;
}

function Field({ label, name, placeholder, required = false, type = "text" }: { label: string; name: string; placeholder: string; required?: boolean; type?: "email" | "tel" | "text" }) {
  return <div><label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.12em] text-[#4d6183]">{label}</label><input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 h-11 w-full rounded-md border border-[#cbd8eb] bg-[#f8fbff] px-3 text-sm outline-none transition-colors placeholder:text-[#8495ae] focus:border-[#0d4c9e] focus:ring-2 focus:ring-[#0d4c9e]/20" /></div>;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return <details className="group rounded-xl border border-[#d8e0ec] bg-[#f8fbff] px-5 py-4 open:bg-white open:shadow-[0_8px_18px_rgba(18,61,128,0.07)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-[#123d80]"><span>{question}</span><ChevronRight className="shrink-0 text-[#df2b2c] transition-transform duration-200 group-open:rotate-90" size={20} /></summary><p className="pt-4 text-sm leading-6 text-[#65728a]">{answer}</p></details>;
}
