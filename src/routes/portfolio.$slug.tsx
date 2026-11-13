import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { Reveal, StaggerWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { FinalCta } from "@/components/site/FinalCta";
import { getProject, projects } from "@/content/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${p.type} | Growth Canvas` : "Project unavailable | Growth Canvas";
    const description = p ? p.summary : "This project could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(!p ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-5 pt-44 pb-32 md:px-10">
      <h1 className="display-lg text-champagne">Project not found.</h1>
      <Button asChild variant="line" size="lg" className="mt-10">
        <Link to="/portfolio">
          <ArrowLeft /> Back to portfolio
        </Link>
      </Button>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length] ?? p;

  const details: Array<[string, string]> = [
    ["Project", p.type],
    ["Platform", p.platform],
    ...(p.client ? ([["Client", p.client]] as Array<[string, string]>) : []),
    ...(p.year ? ([["Year", p.year]] as Array<[string, string]>) : []),
    ["Services", p.services.join(", ")],
    ["Tools", p.technologies.join(", ")],
  ];

  return (
    <>
      <section className="hero-glow pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <Link
              to="/portfolio"
              className="link-underline inline-flex items-center gap-2 pb-1 text-sm text-champagne/60 hover:text-champagne"
            >
              <ArrowLeft className="size-4" /> All projects
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-10">
            <SectionLabel label={`${p.category} · Case Study`} />
          </Reveal>
          <h1 className="display-xl mt-8 max-w-5xl text-champagne">
            <StaggerWords text={p.title} delay={0.1} />
          </h1>
          <Reveal delay={0.3} className="mt-8 max-w-2xl text-lg leading-relaxed text-champagne/70">
            {p.summary}
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="group aspect-square overflow-hidden border border-hairline">
              <ProjectVisual project={p} eager />
            </div>
          </Reveal>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <dl className="divide-y divide-border border-y border-border">
                {details.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 py-4">
                    <dt className="eyebrow pt-1 text-bronze">{k}</dt>
                    <dd className="col-span-2 text-sm text-champagne/80">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.liveUrl ? (
                  <Button asChild variant="bronze" size="lg">
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      Visit live site <ArrowUpRight />
                    </a>
                  </Button>
                ) : null}
                <Button asChild variant={p.liveUrl ? "line" : "bronze"} size="lg">
                  <Link to="/contact">
                    Start a similar project <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-bronze">01</p>
            <h2 className="display-md mt-4 text-champagne">
              The <span className="serif-accent">brief</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-champagne/70">{p.challenge}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-bronze">02</p>
            <h2 className="display-md mt-4 text-champagne">
              The <span className="serif-accent">approach</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-champagne/70">{p.approach}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline py-20 md:py-28" aria-labelledby="built-title">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-bronze">03</p>
            <h2 id="built-title" className="display-md mt-4 text-champagne">
              What we <span className="serif-accent">built</span>
            </h2>
            <p className="mt-5 text-champagne/60">
              The key pages, sections and features delivered for this {p.type.toLowerCase()}.
            </p>
          </Reveal>
          <ol className="divide-y divide-border border-y border-border lg:col-span-8">
            {p.features.map((f, i) => (
              <Reveal as="li" key={f} delay={Math.min(i * 0.04, 0.3)} className="flex gap-6 py-5">
                <span className="eyebrow w-8 shrink-0 pt-1 text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-champagne/80">{f}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-hairline">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-16 md:px-10 md:py-24"
        >
          <div>
            <p className="eyebrow text-bronze">Next project</p>
            <p className="display-lg mt-4 text-champagne transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3">
              {next.title}
            </p>
          </div>
          <ArrowUpRight className="size-10 shrink-0 text-champagne/50 transition-all duration-500 group-hover:text-bronze" />
        </Link>
      </section>

      <FinalCta number="—" />
    </>
  );
}
