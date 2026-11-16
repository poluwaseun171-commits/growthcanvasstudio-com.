import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { getProject } from "@/content/projects";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** One testimonial: stars, quote, client name, role & company, service label. */
export function TestimonialCard({
  testimonial: t,
  className,
}: {
  testimonial: Testimonial;
  className?: string | undefined;
}) {
  const project = t.projectSlug ? getProject(t.projectSlug) : undefined;
  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border border-hairline bg-charcoal-soft p-8 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-700 ease-[var(--ease-luxe)] md:p-10 motion-safe:md:hover:-translate-y-1.5 md:hover:border-bronze/40",
        className,
      )}
    >
      {/* Subtle bronze highlight along the top edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-[0.18] bg-bronze transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-x-100"
      />
      {/* Decorative quotation mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-1 -top-6 select-none font-serif text-[9rem] leading-none text-bronze/10"
      >
        &rdquo;
      </span>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              aria-hidden
              className={cn("size-4", i < t.rating ? "fill-bronze text-bronze" : "text-champagne/20")}
            />
          ))}
        </div>
        {t.sample ? (
          <span className="eyebrow border border-dashed border-bronze/50 px-2 py-0.5 text-[0.6rem]! text-bronze">
            Sample
          </span>
        ) : null}
      </div>

      <blockquote className="relative mt-8 flex-1">
        <p className="font-serif text-[1.35rem] leading-relaxed text-champagne/90">“{t.quote}”</p>
      </blockquote>

      <figcaption className="mt-10 flex items-center gap-4 border-t border-hairline pt-6">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-bronze/50 font-serif text-lg italic text-bronze"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block font-display text-base font-bold text-champagne">{t.name}</span>
          <span className="mt-0.5 block text-sm text-champagne/60">
            {t.role}, {t.company}
          </span>
        </span>
      </figcaption>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow text-[0.65rem]! text-bronze/90">{t.service}</span>
        {project ? (
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="link-underline inline-flex items-center gap-1.5 pb-0.5 text-sm text-bronze"
          >
            View project <ArrowUpRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </figure>
  );
}

export function SampleTestimonialsNotice({ className }: { className?: string | undefined }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 border border-dashed border-bronze/50 px-3 py-1.5 text-xs text-champagne/70",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-bronze" aria-hidden />
      Sample testimonials for preview — to be replaced with approved client reviews.
    </p>
  );
}
