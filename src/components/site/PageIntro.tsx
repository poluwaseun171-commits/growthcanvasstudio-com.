import type { ReactNode } from "react";
import { Reveal, StaggerWords } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

/** Editorial opening block for inner pages. */
export function PageIntro({
  label,
  title,
  accent,
  children,
}: {
  label: string;
  title: string;
  accent?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="hero-glow relative overflow-hidden border-b border-hairline pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionLabel label={label} />
        </Reveal>
        <h1 className="display-xl mt-8 max-w-5xl text-champagne">
          <StaggerWords text={title} accent={accent} delay={0.1} />
        </h1>
        {children ? (
          <Reveal delay={0.4} className="mt-10 max-w-2xl text-lg leading-relaxed text-champagne/70">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
