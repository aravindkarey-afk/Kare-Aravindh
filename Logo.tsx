import { cn } from "../utils/cn";
import { Star } from "./Icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Aravindh Invisible Grills — home">
      <svg viewBox="0 0 48 48" className="h-[42px] w-[42px] shrink-0 sm:h-12 sm:w-12" role="img" aria-label="Aravindh Invisible Grills">
        <rect width="48" height="48" rx="7" fill={light ? "#ffffff" : "#0a2240"} />
        <g stroke={light ? "#0a2240" : "#ffffff"} strokeWidth="2.5" strokeLinecap="round">
          <path d="M13 31V17" />
          <path d="M19 33V15" />
          <path d="M25 34V14" stroke="#23a04b" strokeWidth="3.4" />
          <path d="M31 33V15" />
          <path d="M37 31V17" opacity=".55" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.32rem] leading-none font-extrabold tracking-[-0.045em] sm:text-[1.5rem]",
            light ? "text-white" : "text-ink"
          )}
        >
          Aravindh
        </span>
        <span className="mt-1 font-display text-[1.32rem] leading-none font-extrabold tracking-[-0.045em] text-brand sm:text-[1.5rem]">
          Invisible Grills
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.44rem] font-semibold tracking-[0.22em] uppercase sm:text-[0.51rem]",
            light ? "text-white/50" : "text-[#86929c]"
          )}
        >
          Safer homes, brighter views
        </span>
      </span>
    </a>
  );
}

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-[#f5a623]", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-[15px] w-[15px]" />
      ))}
    </span>
  );
}
