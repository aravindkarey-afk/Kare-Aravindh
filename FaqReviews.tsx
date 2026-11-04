import { useState } from "react";
import { REVIEWS } from "../lib/data";
import { Stars } from "../components/Logo";
import { ArrowUpRight, Check, ChevronDown, Quote } from "../components/Icons";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/SectionHead";

const faqs = [
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills are high-tensile SS 316 marine-grade stainless steel cables tensioned on heavy aluminium tracks across balconies, windows and open spaces. From a few metres away they are virtually invisible, preserving your outside view and ventilation while providing up to 400 kg load-bearing protection.",
  },
  {
    q: "Do invisible grills come with a warranty?",
    a: "Yes! Our SS 316 invisible grills come with a 15-year product warranty on the stainless steel cables, ensuring complete peace of mind and lifelong safety.",
  },
  {
    q: "How can I get a quotation for invisible grills or safety nets?",
    a: "We offer completely free doorstep measurements anywhere in Hyderabad and Telangana. Our technician will visit your site, measure your space, and provide an exact written quote with zero hidden charges.",
  },
  {
    q: "Are invisible grills safe for children and pets?",
    a: "Absolutely. We provide customized cable spacing (2-inch, 3-inch, or 4-inch) so children cannot climb or slip through, and pets cannot squeeze through. The cables have high tensile strength and smooth nylon coatings.",
  },
  {
    q: "Will invisible grills rust over time in Hyderabad's weather?",
    a: "No. We use genuine marine-grade SS 316 stainless steel with a protective transparent nylon sheath that prevents rust, sun discoloration, and weathering for decades.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential balcony and window installations are completed within 2 to 4 hours on the same day as measurement. Our technicians work neatly and leave zero mess.",
  },
  {
    q: "Do you install safety nets and bird spikes across all of Hyderabad?",
    a: "Yes, we provide doorstep measurement and same-day installation across all areas of Greater Hyderabad and Secunderabad, including Gachibowli, Kondapur, Kukatpally, Miyapur, Hitec City, Uppal, and all surrounding localities.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-y border-ink/6 bg-[#f7faf8] py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services"
        />

        <div className="mx-auto mt-7 max-w-[840px] space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-[10px] border transition-colors",
                  isOpen ? "border-brand/25 bg-[#f1f9f3]" : "border-ink/12 bg-white"
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="text-[13px] font-semibold text-ink sm:text-[14px]">{faq.q}</span>
                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all",
                        isOpen
                          ? "rotate-180 bg-brand text-white"
                          : "bg-[#f1f5f8] text-[#5b6b7b]"
                      )}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-[12px] leading-[1.8] text-[#5b6b7b] sm:px-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-[11.5px] text-[#7a8a97]">
          Still have a question?{" "}
          <a href="#contact" className="font-bold text-brand">
            Send us a free measurement request
          </a>{" "}
          and our team will get back to you.
        </p>
      </div>
    </section>
  );
}

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? REVIEWS : REVIEWS.slice(0, 3);

  return (
    <section id="reviews" className="bg-white py-14 sm:py-16">
      <div className="wrap">
        <SectionHead title="What Our Customers Say" subtitle="Trusted by 5,000+ families across Hyderabad" />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {visible.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-lg border border-ink/8 bg-[#f7faf8] p-5"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <Quote className="h-5 w-5 text-brand/25" />
              </div>
              <blockquote className="mt-3 flex-1 text-[12.5px] leading-[1.75] text-[#3f5266]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-2.5 border-t border-ink/8 pt-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-ink">{review.name}</p>
                  <p className="text-[10px] text-[#7a8a97]">{review.location}</p>
                </div>
                <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded bg-leaf-soft px-2 py-1 text-[8.5px] font-bold text-brand-dark">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} /> Verified
                </span>
              </div>
              <p className="mt-2.5 text-[10px] font-semibold text-brand">{review.service}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          {!showAll ? (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn btn-outline !border-ink/20 !px-5 !py-3 !text-[12px]"
            >
              Read 3 More Reviews <ArrowUpRight className="h-4 w-4" />
            </button>
          ) : (
            <a href="#contact" className="btn btn-green !px-5 !py-3 !text-[12px]">
              Join 5,000+ Happy Families <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
