/**
 * Central brand configuration for Growth Canvas.
 *
 * Real assets live in src/assets/ as CDN pointers. The official logo and the
 * two founder photographs are uploaded untouched — display them as-is.
 *
 * Contact channels are intentionally empty — fill them in with real details.
 * Empty values are hidden on the site rather than shown as fake data.
 */
import logoAsset from "@/assets/growth-canvas-logo.png.asset.json";
import headerPhotoAsset from "@/assets/founder-photo-header.png.asset.json";
import aboutPhotoAsset from "@/assets/founder-photo-about.png.asset.json";

export const brand = {
  company: "Growth Canvas",
  founder: "Precious Akinola",
  title: "Web Designer, Developer & Digital Solutions Specialist",
  tagline: "Designed to Grow. Built to Perform.",
  statement: "Digital Experiences. Business Growth.",
  description:
    "Growth Canvas is a premium digital solutions company specializing in website design, development, redesign, landing pages, e-commerce, SEO, CRM setup and business process automation.",
  assets: {
    /** Official founder photograph — used in the header / home hero area. */
    founderPhoto: headerPhotoAsset.url,
    /** Official founder photograph — used on the About page. */
    founderPhotoAbout: aboutPhotoAsset.url,
    /** Official Growth Canvas logo: bronze monogram with wordmark. */
    logo: logoAsset.url,
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
