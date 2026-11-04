import type { ReactNode } from "react";

export function SectionHead({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <h2 className="mx-auto text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.25] font-extrabold tracking-[0.01em] text-ink uppercase">
        {title}
      </h2>
      <span className="mx-auto mt-3 block h-[3px] w-[68px] rounded-full bg-brand" aria-hidden />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-[560px] text-[12.5px] leading-[1.7] text-[#6b7c8c] sm:text-[13.5px]">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
