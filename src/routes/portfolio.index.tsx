import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { FinalCta } from "@/components/site/FinalCta";
import { projectCategories, projects } from "@/content/projects";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    pageHead({
      title: "Portfolio — Selected Client Work | Growth Canvas",
      description:
        "Explore websites, e-commerce stores, landing pages and automation projects designed and developed by Growth Canvas.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageIntro label="Portfolio" title="Ideas Brought to Life." accent={["Life."]}>
        Shopify stores, websites and sales funnels designed and built by Growth Canvas. Select a
        project to see the brief, the approach and everything that was built.
      </PageIntro>

      <section className="py-16 md:py-24" aria-label="Projects">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "border px-5 py-2.5 text-sm transition-all duration-500",
                  filter === c
                    ? "border-bronze bg-bronze text-charcoal"
                    : "border-hairline text-champagne/70 hover:border-bronze hover:text-champagne",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-14 grid gap-x-6 gap-y-16 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.article
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(i % 2 === 1 && "md:mt-28")}
                >
                  <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="aspect-square overflow-hidden border border-hairline">
                      <ProjectVisual project={p} />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-6 border-b border-hairline pb-6">
                      <div>
                        <p className="eyebrow text-bronze">
                          {p.type} · {p.platform}
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-champagne">
                          {p.title}
                        </h2>
                        <p className="mt-3 max-w-md text-sm text-champagne/60">{p.summary}</p>
                      </div>
                      <span className="flex size-11 shrink-0 items-center justify-center border border-hairline text-champagne transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-charcoal">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 ? (
            <p className="mt-10 text-champagne/60">No projects in this category yet.</p>
          ) : null}
        </div>
      </section>

      <FinalCta number="—" />
    </>
  );
}
