import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { SampleTestimonialsNotice, TestimonialCard } from "@/components/site/TestimonialCard";
import { hasSampleTestimonials, testimonials } from "@/content/testimonials";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testimonials")({
  head: () => {
    const head = pageHead({
      title: "Client Experiences — Testimonials | Growth Canvas",
      description:
        "Kind words from people Precious Akinola has worked with on websites, redesigns, SEO, landing pages and CRM automation.",
      path: "/testimonials",
    });
    // Keep sample testimonials out of search results until real reviews replace them.
    return hasSampleTestimonials
      ? { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] }
      : head;
  },
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro
        label="Client Experiences"
        title="Kind Words From People I've Worked With."
        accent={["Worked", "With."]}
      >
        Meaningful collaborations, thoughtful solutions, and experiences worth sharing.
      </PageIntro>

      <section className="py-16 md:py-24" aria-label="Client testimonials">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {hasSampleTestimonials ? (
            <Reveal className="mb-12">
              <SampleTestimonialsNotice />
            </Reveal>
          ) : null}
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                as="li"
                key={`${t.name}-${i}`}
                delay={(i % 3) * 0.08}
                className={cn(i % 3 === 1 && "lg:mt-16")}
              >
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-hairline pt-10 md:flex-row md:items-center">
            <p className="max-w-xl text-champagne/70">
              Worked with Growth Canvas? I'd love to hear how your project went and share your
              experience here.
            </p>
            <Button asChild variant="line" size="lg">
              <Link to="/portfolio">
                See the work <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <FinalCta number="—" />
    </>
  );
}
