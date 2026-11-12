import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { FinalCta } from "@/components/site/FinalCta";
import { brand } from "@/content/brand";
import { processSteps } from "@/content/process";
import { jsonLd, pageHead, personSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({
      title: "About Precious Akinola & Growth Canvas",
      description:
        "Meet Precious Akinola, web designer, developer and founder of Growth Canvas — and the philosophy behind building digital experiences that help businesses grow.",
      path: "/about",
      type: "profile",
    }),
    scripts: [jsonLd(personSchema)],
  }),
  component: AboutPage,
});

const expertise = [
  "Website design",
  "Front-end development",
  "Website redesign",
  "Landing pages & funnels",
  "E-commerce",
  "SEO & visibility",
  "CRM setup",
  "Process automation",
];

const principles = [
  {
    title: "Business first",
    text: "Every design decision starts with what your business needs to achieve, not with trends.",
  },
  {
    title: "Clarity over noise",
    text: "Clean structure, clear messaging and purposeful detail make a site easier to trust and use.",
  },
  {
    title: "Built to last",
    text: "Fast, accessible and maintainable builds that continue to serve you long after launch.",
  },
];

function AboutPage() {
  return (
    <>
      <PageIntro label="About" title="The Person and Purpose Behind Growth Canvas." accent={["Purpose"]}>
        Growth Canvas brings together design quality and technical skill to help businesses present
        themselves well online and run more smoothly behind the scenes.
      </PageIntro>

      {/* Founder story */}
      <section className="py-24 md:py-32" aria-labelledby="founder-heading">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div aria-hidden className="absolute -right-4 -top-4 bottom-12 left-12 border border-bronze/50" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <FounderPortrait photo={brand.assets.founderPhotoAbout} />
            </div>
            <p className="mt-5 eyebrow text-champagne/50">Precious Akinola — Founder</p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <SectionLabel number="01" label="The Founder" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="founder-heading" className="display-lg mt-8 text-champagne">
                Precious <span className="serif-accent">Akinola.</span>
              </h2>
              <p className="mt-4 eyebrow text-champagne/60">
                Web Designer, Developer & Digital Solutions Specialist
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 space-y-6 text-lg leading-relaxed text-champagne/75">
              <p>
                Precious Akinola is the founder of Growth Canvas and the designer and developer behind
                its work. Precious combines visual design with hands-on development, so ideas move
                from concept to a working website without losing their intent along the way.
              </p>
              <p>
                Beyond the website itself, Precious helps businesses connect the tools they rely on —
                search visibility, customer relationship management and automated workflows — so a
                digital presence supports day-to-day operations, not just appearances.
              </p>
              {/* EDIT: add your real professional background here */}
              <p className="border-l border-bronze pl-5 text-base text-champagne/55 italic">
                Placeholder — add a short, factual summary of your professional background here.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-12">
              <p className="eyebrow text-bronze">Areas of expertise</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <li key={e} className="border border-hairline px-4 py-2 text-sm text-champagne/80">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-hairline bg-charcoal-soft py-24 md:py-32" aria-labelledby="philosophy">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionLabel number="02" label="Philosophy" />
              </Reveal>
              <Reveal delay={0.1}>
                <h2 id="philosophy" className="display-lg mt-8 text-champagne">
                  Designed to Grow. <span className="serif-accent">Built to Perform.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <p className="text-lg leading-relaxed text-champagne/70">
                A canvas is where something considered takes shape. Growth Canvas exists to create
                digital work that looks refined, works reliably, and gives businesses room to grow.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-hairline md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="bg-charcoal-soft p-8 md:p-10">
                <span className="font-serif text-5xl italic text-bronze">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl font-semibold text-champagne">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32" aria-labelledby="approach">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <SectionLabel number="03" label="Approach" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="approach" className="display-lg mt-8 max-w-3xl text-champagne">
              How every project <span className="serif-accent">comes together.</span>
            </h2>
          </Reveal>
          <ol className="mt-14 border-t border-hairline">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.05} className="grid gap-4 border-b border-hairline py-8 md:grid-cols-12">
                <span className="font-serif text-3xl italic text-bronze md:col-span-1">{s.n}</span>
                <h3 className="font-display text-2xl font-semibold text-champagne md:col-span-4">{s.title}</h3>
                <p className="text-champagne/65 md:col-span-6 md:col-start-7">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12">
            <Button asChild variant="line" size="xl">
              <Link to="/services">
                Explore services <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <FinalCta number="04" />
    </>
  );
}
