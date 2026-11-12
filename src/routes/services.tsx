import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { services } from "@/content/services";
import { brand } from "@/content/brand";
import { jsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageHead({
      title: "Services — Web Design, E-Commerce, SEO & Automation | Growth Canvas",
      description:
        "Website design and development, redesigns, landing pages, e-commerce, SEO and CRM automation from Growth Canvas. See what each service includes.",
      path: "/services",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            provider: { "@type": "Organization", name: brand.company },
          },
        })),
      }),
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro label="Services" title="Six Ways We Help Businesses Grow Online." accent={["Grow"]}>
        From a first website to the systems that run behind it, each service is designed to work on its
        own or alongside the others.
      </PageIntro>

      {/* Index */}
      <nav aria-label="Service list" className="border-b border-hairline">
        <ul className="mx-auto flex max-w-[1400px] gap-6 overflow-x-auto px-5 py-5 md:px-10">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="link-underline text-sm text-champagne/65 hover:text-champagne">
                <span className="text-bronze">{s.number}</span> {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className={`scroll-mt-20 border-b border-hairline py-20 md:py-28 ${i % 2 === 1 ? "bg-charcoal-soft" : ""}`}
          >
            <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="font-serif text-7xl italic leading-none text-bronze md:text-8xl">{s.number}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 id={`${s.slug}-title`} className="display-md mt-8 text-champagne">
                    {s.title}
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <Reveal delay={0.15}>
                  <p className="text-lg leading-relaxed text-champagne/75">{s.description}</p>
                </Reveal>
                <Reveal delay={0.2} className="mt-10">
                  <p className="eyebrow text-bronze">What's included</p>
                  <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 border-b border-hairline py-3 text-sm text-champagne/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.25} className="mt-10">
                  <Button asChild variant="bronze" size="lg">
                    <Link to="/contact" search={{ service: s.title }}>
                      {s.cta} <ArrowUpRight />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <FinalCta number="07" />
    </>
  );
}
