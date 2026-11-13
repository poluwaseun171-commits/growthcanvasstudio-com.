import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { testimonials } from "@/content/testimonials";
import { getProject } from "@/content/projects";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageHead({
      title: "Client Testimonials | Growth Canvas",
      description:
        "Read what clients say about working with Growth Canvas on websites, Shopify stores, sales funnels and automation.",
      path: "/testimonials",
    }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro label="Testimonials" title="Kind Words from Clients." accent={["Clients."]}>
        What it's like to work with Growth Canvas — in the words of the businesses we've built for.
      </PageIntro>

      <section className="py-16 md:py-24" aria-label="Client testimonials">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => {
              const project = t.projectSlug ? getProject(t.projectSlug) : undefined;
              return (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 0.08}
                  className={cn(
                    "relative flex h-full flex-col border bg-charcoal-soft p-8 md:p-10",
                    i % 3 === 1 && "lg:mt-16",
                    t.placeholder ? "border-dashed border-bronze/50" : "border-hairline",
                  )}
                >
                    {t.placeholder ? (
                      <span className="eyebrow absolute right-4 top-4 text-[0.6rem]! text-bronze">
                        Placeholder
                      </span>
                    ) : null}
                    <Quote className="size-8 text-bronze" aria-hidden />
                    <blockquote
                      className={cn(
                        "mt-6 flex-1 font-display text-xl leading-snug tracking-tight",
                        t.placeholder ? "italic text-champagne/50" : "text-champagne",
                      )}
                    >
                      “{t.quote}”
                    </blockquote>
                    <div className="mt-8 border-t border-hairline pt-6">
                      <p className="font-display text-lg font-semibold text-champagne">{t.name}</p>
                      <p className="mt-1 text-sm text-champagne/60">
                        {t.role}, {t.company}
                      </p>
                      {project ? (
                        <Link
                          to="/portfolio/$slug"
                          params={{ slug: project.slug }}
                          className="link-underline mt-4 inline-flex items-center gap-1.5 pb-0.5 text-sm text-bronze"
                        >
                          View project <ArrowUpRight className="size-3.5" />
                        </Link>
                      ) : null}
                    </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-hairline pt-10 md:flex-row md:items-center">
            <p className="max-w-xl text-champagne/70">
              Worked with Growth Canvas? We'd love to hear how your project went and share your
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
