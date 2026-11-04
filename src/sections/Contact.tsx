import { useEffect, useState, type FormEvent } from "react";
import { CONTACT, FIELD_OPTIONS } from "../lib/data";
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  WhatsApp,
} from "../components/Icons";
import { cn } from "../utils/cn";
import { SectionHead } from "../components/SectionHead";

const input =
  "w-full rounded-md border border-ink/15 bg-white px-3 py-2.5 text-[12.5px] text-ink placeholder:text-[#9aa7b2] transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

type Fields = { name: string; phone: string; location: string; service: string };
const EMPTY: Fields = { name: "", phone: "", location: "", service: "" };

export function Contact({ initialService }: { initialService: string }) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFields((f) => ({ ...f, service: initialService }));
      setSubmitted(false);
    }
  }, [initialService]);

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Fields> = {};
    if (fields.name.trim().length < 2) next.name = "Please enter your name.";
    let digits = fields.phone.replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
    if (!/^[6-9]\d{9}$/.test(digits)) next.phone = "Enter a valid 10-digit mobile number.";
    if (fields.location.trim().length < 2) next.location = "Please enter your area in Hyderabad.";
    if (!fields.service) next.service = "Please select a requirement.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = ["name", "phone", "location", "service"].find((k) => next[k as keyof Fields]);
      if (first) document.getElementById(first)?.focus();
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-ink/6 bg-white py-14 sm:py-16">
      <div className="wrap">
        <SectionHead
          title="Contact Us"
          subtitle="Book a free doorstep measurement and quotation anywhere in Hyderabad"
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-lg bg-navy p-5 text-white sm:p-6">
            <h3 className="font-display text-[1.3rem] font-extrabold">Get in Touch</h3>
            <p className="mt-2 text-[12px] leading-[1.75] text-white/60">
              Connect with us directly for a free site inspection, an honest price estimate and
              same-day installation in most areas.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.04] p-3 transition-colors hover:border-[#5fd486]/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.1em] text-white/45 uppercase">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="mt-0.5 block text-[13.5px] font-bold text-white">{CONTACT.phone}</span>
                </span>
              </a>

              <a
                href={CONTACT.emailHref}
                className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.04] p-3 transition-colors hover:border-[#5fd486]/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-[#7fe39c]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[9px] font-bold tracking-[0.1em] text-white/45 uppercase">
                    Email
                  </span>
                  <span className="mt-0.5 block break-all text-[12px] font-semibold text-white/90">
                    {CONTACT.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.04] p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-[#7fe39c]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.1em] text-white/45 uppercase">
                    Service Coverage
                  </span>
                  <span className="mt-0.5 block text-[12px] font-semibold text-white/90">
                    Doorstep measurement all over Hyderabad &amp; Secunderabad
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.04] p-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10 text-[#7fe39c]">
                  <Clock className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.1em] text-white/45 uppercase">
                    Working Hours
                  </span>
                  <span className="mt-0.5 block text-[12px] font-semibold text-white/90">
                    {CONTACT.hours}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-brand p-4">
              <p className="text-[12.5px] font-bold">Need it done today?</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-white/80">
                Call before noon and our team can usually measure and install on the same day.
              </p>
              <a
                href={CONTACT.phoneHref}
                className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] font-bold text-white underline underline-offset-4"
              >
                {CONTACT.phone} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/45">
              <ShieldCheck className="h-3.5 w-3.5 text-[#7fe39c]" />
              No spam, ever. We only call to schedule your measurement.
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_10px_40px_rgba(10,34,64,0.07)] sm:p-6">
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf-soft text-brand">
                  <Check className="h-7 w-7" strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 font-display text-[1.5rem] font-extrabold text-ink">
                  Request received, {fields.name.split(" ")[0]}!
                </h3>
                <p className="mt-2 max-w-sm text-[12.5px] leading-[1.8] text-[#5b6b7b]">
                  Thank you for choosing Aravindh Invisible Grills. Our team will call{" "}
                  <span className="font-bold text-ink">{fields.phone}</span> shortly to confirm your
                  free doorstep measurement.
                </p>
                <div className="mt-5 w-full max-w-sm rounded-md border border-ink/10 bg-[#f7faf8] p-3.5 text-left">
                  {[
                    ["Location", fields.location],
                    ["Requirement", fields.service],
                    ["Coverage", "Hyderabad & Secunderabad"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-3 border-b border-ink/8 py-1.5 last:border-0">
                      <span className="text-[10px] text-[#7a8a97]">{label}</span>
                      <span className="text-right text-[10.5px] font-semibold text-ink">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-green !py-2.5 !text-[11.5px]"
                  >
                    <WhatsApp className="h-3.5 w-3.5" />
                    <span>WhatsApp us</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFields(EMPTY);
                    }}
                    className="btn btn-outline !py-2.5 !text-[11.5px]"
                  >
                    New request
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-display text-[1.3rem] font-extrabold text-ink">
                  Request Free Measurement
                </h3>
                <p className="mt-1 text-[11.5px] text-[#7a8a97]">
                  Fill in your details and we&apos;ll call to schedule a convenient time.
                </p>

                <form onSubmit={submit} noValidate className="mt-4 space-y-3.5">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-[10.5px] font-bold text-[#33485d]">
                      Your Name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Full name"
                      value={fields.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      className={cn(input, errors.name && "border-red-400")}
                    />
                    {errors.name && <p className="mt-1 text-[10px] font-medium text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-[10.5px] font-bold text-[#33485d]">
                      Phone Number <span className="text-brand">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[11px] font-semibold text-[#7a8a97]">
                        +91
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="98765 43210"
                        value={fields.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        className={cn(input, "pl-10", errors.phone && "border-red-400")}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-[10px] font-medium text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="location" className="mb-1 block text-[10.5px] font-bold text-[#33485d]">
                      Location / Area in Hyderabad <span className="text-brand">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="e.g. Gachibowli, Kondapur, Miyapur"
                      value={fields.location}
                      onChange={(e) => update("location", e.target.value)}
                      aria-invalid={Boolean(errors.location)}
                      className={cn(input, errors.location && "border-red-400")}
                    />
                    {errors.location && (
                      <p className="mt-1 text-[10px] font-medium text-red-600">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1 block text-[10.5px] font-bold text-[#33485d]">
                      Requirement <span className="text-brand">*</span>
                    </label>
                    <select
                      id="service"
                      value={fields.service}
                      onChange={(e) => update("service", e.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      className={cn(input, !fields.service && "text-[#9aa7b2]", errors.service && "border-red-400")}
                    >
                      <option value="">Select service needed</option>
                      {FIELD_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-[10px] font-medium text-red-600">{errors.service}</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-green w-full !py-3 !text-[12.5px]">
                    Submit Free Request <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <p className="flex items-start justify-center gap-1.5 text-center text-[9.5px] leading-relaxed text-[#8b98a3]">
                    <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-brand" />
                    No spam, ever. We only call to schedule your measurement.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
