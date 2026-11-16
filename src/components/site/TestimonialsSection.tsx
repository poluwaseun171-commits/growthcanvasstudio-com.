import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { hasSampleTestimonials, testimonials as allTestimonials, type Testimonial } from "@/content/testimonials";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SampleTestimonialsNotice, TestimonialCard } from "./TestimonialCard";
import { cn } from "@/lib/utils";

/**
 * Homepage testimonial carousel: 1 card on mobile, 2 on tablet, 3 on desktop.
 * Swipe, arrow buttons, dot pagination and Left/Right keys all navigate.
 */
export function TestimonialsSection({
  number,
  testimonials = allTestimonials,
}: {
  number?: string | undefined;
  testimonials?: Testimonial[] | undefined;
}) {
  const reduce = useReducedMotion();
  const [viewportRef, api] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    duration: reduce ? 1 : 32,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    setSelected(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api, sync]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      api?.scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      api?.scrollNext();
    }
  };

  const arrowClass =
    "inline-flex size-12 items-center justify-center rounded-full border border-hairline text-champagne transition-all duration-500 hover:border-bronze hover:bg-bronze hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30";

  return (
    <section className="overflow-hidden py-24 md:py-36" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel number={number} label="Client Experiences" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="testimonials-title" className="display-lg mt-8 text-champagne">
                Kind Words From <span className="serif-accent">People I've Worked With</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="text-champagne/65">
              Meaningful collaborations, thoughtful solutions, and experiences worth sharing.
            </p>
          </Reveal>
        </div>

        {hasSampleTestimonials ? (
          <Reveal delay={0.25} className="mt-8">
            <SampleTestimonialsNotice />
          </Reveal>
        ) : null}

        <Reveal delay={0.3} className="mt-14">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials — use the left and right arrow keys to browse"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <div ref={viewportRef} className="-my-4 overflow-hidden py-4">
              <ul className="-ml-6 flex touch-pan-y">
                {testimonials.map((t, i) => (
                  <li
                    key={`${t.name}-${i}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${testimonials.length}`}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
                  >
                    <TestimonialCard testimonial={t} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2" role="group" aria-label="Choose testimonials">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial group ${i + 1} of ${snaps.length}`}
                  aria-current={i === selected ? "true" : undefined}
                  onClick={() => api?.scrollTo(i)}
                  className="flex h-6 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    className={cn(
                      "block h-px transition-all duration-700 ease-[var(--ease-luxe)]",
                      i === selected ? "w-10 bg-bronze" : "w-5 bg-champagne/30 hover:bg-champagne/60",
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className={arrowClass}
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                className={arrowClass}
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
