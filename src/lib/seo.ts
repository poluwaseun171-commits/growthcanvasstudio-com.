import { brand } from "@/content/brand";

/** Per-page head metadata: title, description, Open Graph, Twitter and canonical path. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.company,
  slogan: brand.tagline,
  description: brand.description,
  founder: { "@type": "Person", name: brand.founder },
  knowsAbout: [
    "Website design",
    "Web development",
    "Website redesign",
    "Landing pages",
    "E-commerce",
    "Search engine optimization",
    "CRM setup",
    "Business process automation",
  ],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: brand.founder,
  jobTitle: brand.title,
  worksFor: { "@type": "Organization", name: brand.company },
};

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
