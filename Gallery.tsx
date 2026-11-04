import { useState } from "react";
import { CONTACT, GALLERY, GALLERY_FILTERS } from "../lib/data";
import { ArrowUpRight, MapPin, Phone, WhatsApp } from "../components/Icons";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/SectionHead";

type Filter = (typeof GALLERY_FILTERS)[number];

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = filter === "All" ? GALLERY : GALLERY.filter((item) => item.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const remaining = Math.max(filtered.length - 6, 0);

  return (
    <section id="gallery" className="bg-white py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Our Work Gallery"
          subtitle="Real installation photos from homes across Hyderabad"
        />

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {GALLERY_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => {
                setFilter(option);
                setExpanded(false);
              }}
              className={cn(
                "rounded-full border px-3.5 py-2 text-[11px] font-semibold transition-colors",
                filter === option
                  ? "border-brand bg-brand text-white"
                  : "border-ink/12 bg-white text-[#52667a] hover:border-brand/40 hover:text-brand"
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.src}
              className="group relative overflow-hidden rounded-lg border border-ink/8 bg-sand"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/85 via-[#06172f]/10 to-transparent" />
              <span className="absolute top-2.5 left-2.5 rounded bg-white/95 px-2 py-1 text-[8.5px] font-bold tracking-[0.08em] text-brand-dark uppercase">
                {item.category}
              </span>
              <figcaption className="absolute right-3 bottom-3 left-3">
                <p className="text-[11px] leading-snug font-semibold text-white">{item.title}</p>
                <p className="mt-1 flex items-center gap-1 text-[9px] font-medium text-white/65">
                  <MapPin className="h-2.5 w-2.5" /> Hyderabad
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-3 rounded-lg border border-ink/8 bg-[#f7faf8] px-4 py-4 sm:flex-row">
          <p className="text-[12px] text-[#52667a]">
            Like what you see? Get the same finish and protection for your home.
          </p>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            {remaining > 0 && (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="btn btn-outline flex-1 !border-ink/20 !py-2.5 !text-[11.5px] sm:flex-none"
              >
                View More Images ({remaining} More)
              </button>
            )}
            <a href="#contact" className="btn btn-green flex-1 !py-2.5 !text-[11.5px] sm:flex-none">
              Book Free Measurement <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-ink">
            <Phone className="h-3.5 w-3.5 text-brand" />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#1f8f57]"
          >
            <WhatsApp className="h-3.5 w-3.5" />
            <span>WhatsApp us a photo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
