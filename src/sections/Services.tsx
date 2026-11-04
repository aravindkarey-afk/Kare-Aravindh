import { useEffect, useState } from "react";
import { CONTACT, SERVICES, type Service } from "../lib/data";
import { ArrowUpRight, Check, Close, Phone, ShieldCheck, WhatsApp } from "../components/Icons";
import { SectionHead } from "../components/SectionHead";

export function Services({ onRequest }: { onRequest: (title: string) => void }) {
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);


  return (
    <section id="services" className="border-y border-ink/6 bg-[#f7faf8] py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Our Services & Applications"
          subtitle="Explore our specialised safety, bird-control and home-utility solutions"
        />

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-ink/8 bg-white transition-shadow hover:shadow-[0_12px_32px_rgba(10,34,64,0.09)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-2.5 left-2.5 rounded bg-[#e8f7ec] px-2 py-1 text-[9px] font-bold tracking-[0.03em] text-brand-dark shadow-sm">
                  {service.badge ?? service.short}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[14px] leading-snug font-bold text-ink">{service.title}</h3>
                <p className="mt-1.5 line-clamp-3 text-[11.5px] leading-[1.7] text-[#5b6b7b]">
                  {service.desc}
                </p>

                <div className="mt-3.5 space-y-1.5 border-t border-ink/8 pt-3">
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    className="flex w-full items-center justify-center gap-1.5 rounded bg-[#152a44] px-3 py-2.5 text-[10.5px] font-bold text-white transition-colors hover:bg-ink"
                  >
                    View Service Details
                  </button>
                  <div className="grid grid-cols-2 gap-1.5">
                    <a
                      href={CONTACT.phoneHref}
                      className="flex items-center justify-center gap-1.5 rounded bg-[#e8f2fd] px-2 py-2 text-[10.5px] font-bold text-[#1877f2] transition-colors hover:bg-[#d8e9fc]"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call</span>
                    </a>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded bg-[#e6f8ee] px-2 py-2 text-[10.5px] font-bold text-[#1a9e50] transition-colors hover:bg-[#d5f2e1]"
                    >
                      <WhatsApp className="h-3 w-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06172f]/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close service details"
              className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow"
            >
              <Close className="h-4.5 w-4.5" />
            </button>
            <img src={selected.image} alt={selected.title} className="aspect-[16/9] w-full object-cover" />
            <div className="p-5 sm:p-6">
              <span className="rounded bg-leaf-soft px-2 py-1 text-[9px] font-bold tracking-[0.06em] text-brand-dark uppercase">
                {selected.badge ?? selected.category}
              </span>
              <h3 className="mt-3 font-display text-[1.5rem] leading-tight font-extrabold text-ink">
                {selected.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.8] text-[#5b6b7b]">{selected.desc}</p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "Free doorstep measurement",
                  "Written quote, no hidden charges",
                  "Own trained installation team",
                  "Warranty-backed materials",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[11.5px] font-medium text-[#33485d]">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-leaf-soft text-brand">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    onRequest(selected.title);
                    setSelected(null);
                  }}
                  className="btn btn-green !py-3 !text-[12px]"
                >
                  Request Free Measurement <ArrowUpRight className="h-4 w-4" />
                </button>
                <a href={CONTACT.phoneHref} className="btn btn-ink !py-3 !text-[12px]">
                  <Phone className="h-4 w-4" /> {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline !py-3 !text-[12px]"
                >
                  <WhatsApp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[10px] text-[#7a8a97]">
                <ShieldCheck className="h-3 w-3 text-brand" /> Serving all of Hyderabad &amp; Telangana
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
