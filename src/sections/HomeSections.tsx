import { useEffect, useState } from "react";
import { CONTACT, HERO_SLIDES, LOCALITY_GROUPS, WHY_US } from "../lib/data";
import { IMG } from "../assets/refimg";
import { Stars } from "../components/Logo";
import { SectionHead } from "../components/SectionHead";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Clipboard,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkle,
  Sun,
  WhatsApp,
} from "../components/Icons";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ HERO */

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (dir: number) =>
    setActive((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length);
  const slide = HERO_SLIDES[active];

  return (
    <section id="home" className="relative bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[75%] w-[46%] lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(35,160,75,0.13) 0 1px, transparent 1px 26px)",
          maskImage: "linear-gradient(to top right, black, transparent 72%)",
          WebkitMaskImage: "linear-gradient(to top right, black, transparent 72%)",
        }}
      />
      <div className="wrap relative grid items-start gap-9 pt-8 pb-8 lg:grid-cols-[0.47fr_0.53fr] lg:gap-10 lg:pt-10 lg:pb-10">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-leaf-soft px-3 py-2 text-[10px] font-bold tracking-[0.08em] text-[#1d6b3a] uppercase sm:text-[11px]">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Hyderabad&apos;s Trusted Safety Experts
          </span>

          <h1 className="mt-5 max-w-[560px] font-display text-[clamp(2.1rem,3.9vw,3.3rem)] leading-[1.13] font-extrabold tracking-[-0.045em] text-ink">
            Invisible Grills &amp; Safety Nets for{" "}
            <span className="text-brand">Safer Homes, Brighter Views</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[13.5px] leading-[1.75] font-normal text-[#56697b] sm:text-[15px]">
            Replace heavy iron bars with high-tensile SS 316 invisible grills and premium safety
            nets. Full protection for children and pets, zero obstruction to your view — measured
            and installed at your doorstep anywhere in Hyderabad.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#233a52] sm:text-[12.5px]">
                <Stars /> 4.9 rated by customers
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#233a52] sm:text-[12.5px]">
                <ShieldCheck className="h-4 w-4 text-brand" /> 5-year warranty
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#233a52] sm:text-[12.5px]">
              <Clipboard className="h-4 w-4 text-brand" /> Free site measurement
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#contact" className="btn btn-ink !px-4 !py-3 !text-[12.5px]">
              <Clipboard className="h-4 w-4" />
              <span>Get Free Quote</span>
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green !px-4 !py-3 !text-[12.5px]"
            >
              <WhatsApp className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
            <a href={CONTACT.phoneHref} className="btn btn-call !px-4 !py-3 !text-[12.5px]">
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="mt-4 text-[11px] font-medium text-[#7a8a97]">
            ★ Rated 4.9/5 by 5,000+ Hyderabad families · Free doorstep measurement
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[1.5/1] overflow-hidden rounded-xl bg-sand sm:aspect-[1.45/1] lg:aspect-[1.36/1]">
            {HERO_SLIDES.map((item, i) => (
              <img
                key={item.image}
                src={item.image}
                alt={item.alt}
                fetchPriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              />
            ))}

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-sm transition-colors hover:bg-leaf-soft"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-sm transition-colors hover:bg-leaf-soft"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-[#06172f]/85 px-3 py-2 text-white backdrop-blur-sm">
              <span className="text-[11px] font-semibold sm:text-[12px]">{slide.title}</span>
              <span className="h-1 w-1 rounded-full bg-[#5fd486]" />
              <span className="text-[10.5px] font-semibold text-[#5fd486] sm:text-[11.5px]">
                {slide.meta}
              </span>
            </div>

            <div className="absolute right-3 bottom-4 flex items-center gap-1.5">
              {HERO_SLIDES.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={i === active}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    i === active ? "bg-[#5fd486]" : "bg-white/80 hover:bg-white"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- ABOUT */

const aboutBullets = [
  "High-grade SS 316 nylon-coated cables & UV-stabilised HDPE nets",
  "Rust-proof, weather-resistant materials built for Hyderabad's climate",
  "Professional doorstep installation across Hyderabad & Secunderabad",
  "Written quotation before work begins — no hidden charges, ever",
];

export function About() {
  return (
    <section id="about" className="border-y border-ink/6 bg-[#f7faf8] py-14 sm:py-16">
      <div className="wrap grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <img
              src={IMG.s26}
              alt="Aravindh invisible grills installed on a modern Hyderabad balcony"
              loading="lazy"
              className="aspect-[1.35/1] w-full object-cover"
            />
          </div>
          <div className="absolute top-3 left-3 rounded-lg bg-white px-3.5 py-2.5 shadow-[0_6px_20px_rgba(10,34,64,0.14)]">
            <p className="font-display text-[1.5rem] leading-none font-extrabold text-brand">5,000+</p>
            <p className="mt-1 text-[8.5px] font-bold tracking-[0.08em] text-[#586a79] uppercase">
              Happy Families Secured
            </p>
          </div>
          <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-2 text-[10px] font-bold text-white shadow-md">
            <ShieldCheck className="h-3.5 w-3.5" /> 5-Year Warranty
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold tracking-[0.1em] text-brand uppercase sm:text-[11px]">
            Welcome to Aravindh Invisible Grills
          </span>
          <h2 className="section-title mt-3 max-w-[18ch]">Safety That Doesn&apos;t Steal Your View</h2>
          <p className="mt-4 max-w-[560px] text-[13px] leading-[1.8] text-[#56697b] sm:text-[14px]">
            Traditional iron grills cage your home, block sunlight and spoil the look of your
            building. Our high-tensile stainless steel invisible grills and engineered safety nets
            give your family complete fall protection while your balconies and windows stay bright,
            airy and wide open to the view.
          </p>

          <ul className="mt-5 space-y-2.5">
            {aboutBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[12.5px] font-medium text-[#33485d]">
                <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-leaf-soft text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={CONTACT.phoneHref} className="btn btn-ink !py-3 !text-[12.5px]">
              <Phone className="h-4 w-4" /> Talk to Our Team — {CONTACT.phone}
            </a>
            <a href="#services" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand">
              Explore our services <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- WHY US */

const whyIcons = { shield: ShieldCheck, sun: Sun, eye: Sparkle, bolt: Layers, award: Award, tag: Layers };

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Why Choose Aravindh Invisible Grills"
          subtitle="Quality and reliability you can trust for your family's safety"
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => {
            const Icon = whyIcons[item.icon as keyof typeof whyIcons] ?? ShieldCheck;
            return (
              <article
                key={item.title}
                className="rounded-lg border border-ink/8 bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(10,34,64,0.07)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-leaf-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3.5 text-[13.5px] font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.7] text-[#5b6b7b]">{item.copy}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-navy px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <p className="font-display text-[1.2rem] leading-tight font-extrabold">
              Not sure what your balcony needs?
            </p>
            <p className="mt-1 text-[12px] text-white/60">
              Our team measures, recommends and quotes — free, with no obligation.
            </p>
          </div>
          <a href="#contact" className="btn btn-green !py-3 !text-[12px]">
            Book a Free Measurement <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- AREAS */

export function Areas() {
  return (
    <section id="areas" className="border-y border-ink/6 bg-[#f7faf8] py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Service Areas in Hyderabad"
          subtitle="Doorstep measurement & same-day installation in all areas"
        />

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {LOCALITY_GROUPS.map((group) => (
            <div key={group.title} className="rounded-lg border border-ink/8 bg-white p-5">
              <div className="flex items-center gap-2 border-b border-ink/8 pb-3">
                <MapPin className="h-4 w-4 text-brand" />
                <h3 className="text-[13px] font-bold text-ink">{group.title}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.areas.map((area) => (
                  <a
                    key={area}
                    href="#contact"
                    className="rounded border border-ink/10 bg-[#f7faf8] px-2.5 py-1.5 text-[11px] font-medium text-[#43586c] transition-colors hover:border-brand/40 hover:bg-leaf-soft hover:text-brand-dark"
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-lg border border-brand/20 bg-leaf-soft px-5 py-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12.5px] text-[#2d4a3a]">
              <span className="font-bold text-ink">Don&apos;t see your area listed?</span> We cover
              all locations within Greater Hyderabad! Call{" "}
              <a href={CONTACT.phoneHref} className="font-bold text-brand-dark underline underline-offset-2">
                {CONTACT.phone}
              </a>{" "}
              to book your free measurement.
            </p>
            <a href="#contact" className="btn btn-green shrink-0 !py-2.5 !text-[12px]">
              Book Free Visit <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <div className="bg-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-3 py-4">
        <p className="text-[12px] font-medium text-[#56697b]">
          Need help choosing? Message us a photo of your balcony or window.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-green !py-2.5 !text-[11.5px]">
            <WhatsApp className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
          <a href={CONTACT.emailHref} className="btn btn-outline !py-2.5 !text-[11.5px]">
            <Mail className="h-3.5 w-3.5" /> Email us
          </a>
        </div>
      </div>
    </div>
  );
}
