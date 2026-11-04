import { useEffect, useState } from "react";
import { CONTACT, NAV } from "../lib/data";
import { cn } from "../utils/cn";
import { Logo } from "./Logo";
import { ArrowUp, ArrowUpRight, Check, Close, Facebook, Instagram, Mail, Menu, Phone, ShieldCheck, WhatsApp } from "./Icons";

export function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="wrap flex min-h-[36px] items-center justify-between gap-4 py-2 text-[10.5px] leading-tight sm:text-[12px]">
        <p className="flex min-w-0 items-center gap-2">
          <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#5fd486] text-[#5fd486]">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          <span className="truncate">
            Free doorstep measurement &amp; same-day installation across Hyderabad
          </span>
        </p>
        <a
          href={CONTACT.phoneHref}
          className="hidden shrink-0 items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-[#7fe39c] sm:flex"
        >
          <Phone className="h-3.5 w-3.5" />
          {CONTACT.phone}
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-ink/8 bg-white shadow-[0_1px_0_rgba(10,34,64,0.02)]">
        <div className="wrap flex h-[70px] items-center justify-between gap-4 sm:h-[78px]">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-4 xl:flex 2xl:gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12.5px] font-medium text-[#31465c] transition-colors hover:text-brand 2xl:text-[13px]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={CONTACT.phoneHref} className="btn btn-green hidden !rounded-full !px-5 !py-3 !text-[13px] sm:inline-flex">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-md border border-ink/12 text-ink xl:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-ink/8 bg-white transition-[max-height] duration-300 xl:hidden",
            open ? "max-h-[560px] border-t" : "max-h-0"
          )}
        >
          <nav aria-label="Mobile" className="wrap flex flex-col py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink/6 py-3 text-[14px] font-medium text-[#31465c]"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-brand" />
              </a>
            ))}
            <a
              href={CONTACT.phoneHref}
              onClick={() => setOpen(false)}
              className="btn btn-green mt-4 !py-3"
            >
              <Phone className="h-4 w-4" /> Call Now · {CONTACT.phone}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

const footerCols = [
  {
    title: "Safety Grills & Nets",
    items: [
      "Balcony Invisible Grills",
      "Window Invisible Grills",
      "Invisible Grills for Pets",
      "Invisible Grills for Kids",
      "Invisible Grills for Birds",
      "Balcony Safety Nets",
      "Building Safety Nets",
      "Car Parking Safety Nets",
      "Children Safety Nets",
    ],
  },
  {
    title: "Sports & Utility Solutions",
    items: [
      "All Sports Practice Nets",
      "Cricket Practice Nets",
      "Terrace Cricket Nets",
      "Football Stop Nets",
      "Ceiling Cloth Hangers",
      "Manual Ceiling Cloth Hangers",
      "SS Ceiling Cloth Hangers",
    ],
  },
  {
    title: "Anti Bird Nets",
    items: [
      "Anti Bird Nets",
      "Bird Control Spikes",
      "Bird Protection Nets",
      "Pigeon Safety Nets",
      "Cricket Practice Nets",
      "Terrace Cricket Nets",
      "Football Stop Nets",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="wrap py-11">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-[30ch] text-[12px] leading-[1.75] text-white/55">
              Safer homes, brighter views — premium invisible grills, safety nets and bird-control
              solutions installed across Hyderabad &amp; Telangana.
            </p>
            <div className="mt-5 space-y-2">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-[12.5px] font-semibold text-white/85 transition-colors hover:text-[#7fe39c]"
              >
                <Phone className="h-3.5 w-3.5 text-[#7fe39c]" /> {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 break-all text-[12px] text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#7fe39c]" /> {CONTACT.email}
              </a>
              <p className="flex items-center gap-2 text-[12px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {CONTACT.coverage}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: WhatsApp, href: CONTACT.whatsapp, label: "WhatsApp" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-8 w-8 place-items-center rounded-md border border-white/15 text-white/60 transition-colors hover:border-[#5fd486] hover:text-[#5fd486]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-[11.5px] font-bold tracking-[0.05em] text-white uppercase">{col.title}</p>
              <ul className="mt-3.5 space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-[11.5px] leading-snug text-white/50 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="text-[10.5px] text-white/40">
            © {new Date().getFullYear()} Aravindh Invisible Grills. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {["Home", "Our Services", "Work Gallery", "Service Areas", "FAQ", "Free Measurement"].map(
              (link) => (
                <a
                  key={link}
                  href={
                    link === "Home"
                      ? "#home"
                      : link === "Our Services"
                        ? "#services"
                        : link === "Work Gallery"
                          ? "#gallery"
                          : link === "Service Areas"
                            ? "#areas"
                            : link === "FAQ"
                              ? "#faq"
                              : "#contact"
                  }
                  className="text-[10.5px] text-white/45 transition-colors hover:text-white"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col items-center gap-2.5 sm:right-6 sm:gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid h-10 w-10 place-items-center rounded-full bg-[#111e2e] text-white shadow-[0_6px_16px_rgba(6,23,47,0.3)] transition-all hover:bg-[#1c3049] sm:h-11 sm:w-11",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call Aravindh Invisible Grills"
        className="grid h-[50px] w-[50px] place-items-center rounded-full border-[3px] border-white bg-[#1877f2] text-white shadow-[0_6px_18px_rgba(6,23,47,0.3)] transition-transform hover:scale-105 sm:h-[54px] sm:w-[54px]"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-[54px] w-[54px] place-items-center rounded-full border-[3px] border-white bg-[#25d366] text-white shadow-[0_0_0_8px_rgba(37,211,102,0.18),0_6px_18px_rgba(6,23,47,0.28)] transition-transform hover:scale-105 sm:h-[60px] sm:w-[60px]"
      >
        <WhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}

