import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta({ number = "06" }: { number?: string }) {
  return (
    <section className="px-3 py-3 md:px-5 md:py-5" aria-labelledby="final-cta">
      <div className="section-light relative overflow-hidden px-6 py-24 md:px-14 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full border border-charcoal/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 size-[20rem] rounded-full border border-bronze/40"
        />
        <div className="relative mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-bronze">
                <span>{number}</span>
                <span aria-hidden className="h-px w-10 bg-current" />
                <span>Let's talk</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="final-cta" className="display-xl mt-8 text-charcoal">
                Have Something Great in Mind?{" "}
                <span className="serif-accent">Let's Build It.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="text-base leading-relaxed text-charcoal/70">
              Share a few details about your business and what you'd like to achieve. We'll
              reply with thoughtful next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="ink" size="xl">
                <Link to="/contact">
                  Start a Project <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="ink-line" size="xl">
                <Link to="/portfolio">
                  View Work <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
