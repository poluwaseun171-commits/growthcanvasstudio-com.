import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { Logo } from "@/components/site/Logo";
import { Reveal, StaggerWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { brand } from "@/content/brand";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { FinalCta } from "@/components/site/FinalCta";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { processSteps } from "@/content/process";
import { jsonLd, organizationSchema, pageHead, personSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "Growth Canvas — Websites & Digital Solutions by Precious Akinola",
      description:
        "Growth Canvas designs, develops and optimises websites, landing pages, e-commerce, SEO and automation that help businesses grow. Founded by Precious Akinola.",
      path: "/",
    }),
    scripts: [jsonLd(organizationSchema), jsonLd(personSchema)],
  }),
  component: HomePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesPreview />
      <FeaturedWork />
      <FounderSpotlight />
      <Process />
      <FinalCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "8%"]);

  return (
    <section
      ref={ref}
      className="hero-glow relative overflow-hidden pt-28 pb-16 md:pt-32 lg:min-h-[100svh] lg:pb-20"
      aria-labelledby="hero-title"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-8">
        {/* Editorial copy */}
        <div className="flex flex-col justify-center lg:col-span-7 lg:pt-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-bronze"
          >
            <span aria-hidden className="h-px w-10 bg-current" />
            Precious Akinola — Founder of Growth Canvas
          </motion.p>

          <h1 id="hero-title" className="display-xl mt-8 text-champagne">
            <StaggerWords
              text="We Build Digital Experiences That Move Businesses Forward."
              accent={["Move", "Businesses"]}
              delay={0.15}
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-champagne/70 md:text-lg"
          >
            At Growth Canvas, we design, develop, and optimize digital experiences that help
            businesses build a stronger online presence, attract customers, and operate smarter.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="bronze" size="xl">
              <Link to="/portfolio">
                Explore Our Work <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/contact">
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-14 hidden items-center gap-4 lg:flex"
          >
            <a href="#introduction" className="group flex items-center gap-4" aria-label="Scroll to introduction">
              <span className="relative block h-14 w-px overflow-hidden bg-champagne/15">
                <span className="animate-scroll-line absolute inset-0 bg-bronze" />
              </span>
              <span className="eyebrow text-champagne/50 transition-colors group-hover:text-champagne">
                Scroll to discover
              </span>
            </a>
          </motion.div>
        </div>

        {/* Founder portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          {/* offset bronze frame */}
          <div aria-hidden className="absolute -right-3 -top-3 bottom-10 left-10 border border-bronze/50 md:-right-5 md:-top-5" />
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft">
            <motion.div style={{ y: imgY }} className="h-[108%] w-full">
              <FounderPortrait priority />
            </motion.div>
            <div aria-hidden className="portrait-fade pointer-events-none absolute inset-0" />
          </div>

          {/* Logo plate + caption */}
          <div className="relative -mt-10 ml-5 flex items-end justify-between gap-4 md:ml-8">
            <div className="border border-hairline bg-charcoal px-5 py-4">
              <Logo size="sm" />
            </div>
            <div className="pb-1 text-right">
              <p className="font-display text-sm font-semibold text-champagne">Precious Akinola</p>
              <p className="text-xs text-champagne/55">Founder, Growth Canvas</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tagline strip */}
      <div className="relative mt-16 overflow-hidden border-y border-hairline py-5 lg:mt-20">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12" aria-hidden={k === 1}>
              {services.map((s) => (
                <span key={s.slug} className="flex items-center gap-12 font-display text-lg text-champagne/60">
                  {s.title}
                  <span className="text-bronze">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20 py-24 md:py-36" aria-labelledby="intro-title">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel number="01" label="Introduction" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="intro-title" className="display-lg mt-8 text-champagne">
              Creative Thinking. Technical Excellence.{" "}
              <span className="serif-accent">Measurable Purpose.</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-5">
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-champagne/75">
              Growth Canvas is a digital solutions company founded by Precious Akinola. We help
              businesses establish a professional online presence, improve their digital customer
              experience, and simplify operations through thoughtfully developed technology.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <dl className="grid grid-cols-3 border-t border-hairline">
              {[
                ["Design", "Considered visuals"],
                ["Develop", "Reliable builds"],
                ["Grow", "Ongoing results"],
              ].map(([t, d]) => (
                <div key={t} className="border-r border-hairline pt-5 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                  <dt className="font-display text-lg font-semibold text-champagne">{t}</dt>
                  <dd className="mt-1 text-xs text-champagne/55">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.35}>
            <Link to="/about" className="link-underline inline-flex items-center gap-2 pb-1 text-sm text-bronze">
              More about Growth Canvas <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-t border-hairline bg-charcoal-soft py-24 md:py-36" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel number="02" label="Services" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="services-title" className="display-lg mt-8 text-champagne">
                Everything Your Business Needs to <span className="serif-accent">Thrive Digitally.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button asChild variant="line" size="lg">
              <Link to="/services">
                All services <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-hairline">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 0.05}>
              <Link
                to="/services"
                hash={s.slug}
                className="group relative grid grid-cols-12 items-center gap-4 border-b border-hairline py-7 transition-colors duration-500 md:py-9"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0 bg-bronze/[0.07] transition-all duration-700 ease-[var(--ease-luxe)] group-hover:w-full"
                />
                <span className="eyebrow relative col-span-2 text-bronze md:col-span-1">{s.number}</span>
                <span className="relative col-span-10 font-display text-xl font-semibold tracking-tight text-champagne transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 md:col-span-5 md:text-3xl">
                  {s.title}
                </span>
                <span className="relative col-span-10 col-start-3 text-sm text-champagne/60 md:col-span-5 md:col-start-auto">
                  {s.short}
                </span>
                <span className="relative col-span-12 hidden justify-end md:col-span-1 md:flex">
                  <span className="flex size-11 items-center justify-center border border-hairline text-champagne transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-charcoal">
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-24 md:py-36" aria-labelledby="work-title">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel number="03" label="Featured Work" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="work-title" className="display-lg mt-8 text-champagne">
                Ideas Brought <span className="serif-accent">to Life.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="text-champagne/65">
              A selection of completed client work — each project shaped around a real business
              goal.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className={i === 1 ? "md:mt-20" : undefined}>
              <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-square overflow-hidden border border-hairline">
                  <ProjectVisual project={p} />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-bronze">
                      {p.category} · {p.platform}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-champagne">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-champagne/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button asChild variant="line" size="xl">
            <Link to="/portfolio">
              Explore Our Work <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function FounderSpotlight() {
  return (
    <section className="px-3 md:px-5" aria-labelledby="founder-title">
      <div className="section-light relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="relative lg:col-span-5">
            <div aria-hidden className="absolute -bottom-4 -left-4 right-8 top-8 border border-bronze" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <FounderPortrait tone="light" photo={brand.assets.founderPhotoAbout} />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-bronze">
                <span>04</span>
                <span aria-hidden className="h-px w-10 bg-current" />
                <span>Founder</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="founder-title" className="display-lg mt-8 text-charcoal">
                Meet <span className="serif-accent">Precious Akinola.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 eyebrow text-charcoal/60">
                Web Designer, Developer & Digital Solutions Specialist
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/75">
              <p>
                Precious Akinola founded Growth Canvas to give businesses digital experiences that are
                as well considered as the work they do. Precious leads every project personally — from
                the first conversation to launch and beyond.
              </p>
              <p>
                The approach is simple: understand the business first, then design and build
                technology that serves it — clear, dependable and made to grow.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <Button asChild variant="ink" size="xl">
                <Link to="/about">
                  Read the full story <ArrowUpRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


function Process() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="process-title">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel number="05" label="Process" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="process-title" className="display-lg mt-8 text-champagne">
              A Thoughtful Process. <span className="serif-accent">A Better Digital Experience.</span>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 0.1}
              className="group relative bg-charcoal p-8 transition-colors duration-700 hover:bg-charcoal-soft md:p-10"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-bronze transition-all duration-700 ease-[var(--ease-luxe)] group-hover:w-full"
              />
              <span className="font-serif text-6xl italic text-bronze">{s.n}</span>
              <h3 className="mt-10 font-display text-2xl font-semibold text-champagne">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-champagne/60">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
