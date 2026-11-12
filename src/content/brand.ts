/**
 * Central brand configuration for Growth Canvas.
 *
 * EDIT HERE: once the official founder photo and logo are uploaded, set
 * `assets.founderPhoto` and `assets.logo` to their URLs. Every placeholder
 * across the site switches to the real files automatically.
 *
 * Contact channels are intentionally empty — fill them in with real details.
 * Empty values are hidden on the site rather than shown as fake data.
 */
export const brand = {
  company: "Growth Canvas",
  founder: "Precious Akinola",
  title: "Web Designer, Developer & Digital Solutions Specialist",
  tagline: "Designed to Grow. Built to Perform.",
  statement: "Digital Experiences. Business Growth.",
  description:
    "Growth Canvas is a premium digital solutions company specializing in website design, development, redesign, landing pages, e-commerce, SEO, CRM setup and business process automation.",
  assets: {
    /** URL of the official founder photograph. null = show labelled placeholder. */
    founderPhoto: null as string | null,
    /** URL of the official Growth Canvas logo. null = show labelled placeholder. */
    logo: null as string | null,
  },
  contact: {
    email: "", // e.g. hello@yourdomain.com
    whatsapp: "", // full international number, digits only, e.g. 2348000000000
    linkedin: "", // full profile URL
    instagram: "", // full profile URL
  },
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;
