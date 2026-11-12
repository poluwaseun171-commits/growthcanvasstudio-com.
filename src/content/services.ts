export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "website-design-development",
    number: "01",
    title: "Website Design & Development",
    short: "Custom websites designed around your brand and built to perform.",
    description:
      "A considered, custom-built website that presents your business with clarity and confidence. Every page is designed around your audience, written structure and goals, then developed to be fast, accessible and easy to maintain.",
    deliverables: [
      "Discovery and site structure",
      "Custom visual design",
      "Responsive front-end development",
      "Content management setup",
      "Performance and accessibility checks",
      "Launch support",
    ],
    cta: "Plan a new website",
  },
  {
    slug: "website-redesign-optimization",
    number: "02",
    title: "Website Redesign & Optimization",
    short: "Refresh an existing site so it looks current and works harder.",
    description:
      "For businesses whose website no longer reflects the quality of their work. We review what exists, keep what works, and rebuild the experience so it is clearer to navigate, quicker to load and easier to act on.",
    deliverables: [
      "Website audit and review",
      "Information architecture refresh",
      "Visual redesign",
      "Speed and technical improvements",
      "Content migration",
      "Redirects to protect existing search rankings",
    ],
    cta: "Discuss a redesign",
  },
  {
    slug: "landing-pages-sales-funnels",
    number: "03",
    title: "Landing Pages & Sales Funnels",
    short: "Focused pages that guide visitors toward one clear action.",
    description:
      "Purpose-built pages for campaigns, launches and offers. Each one is structured around a single goal, with clear messaging, considered hierarchy and a simple path from interest to enquiry or purchase.",
    deliverables: [
      "Offer and message structure",
      "Landing page design and build",
      "Multi-step funnel flows",
      "Form and checkout integration",
      "Analytics and conversion tracking",
    ],
    cta: "Build a landing page",
  },
  {
    slug: "e-commerce-solutions",
    number: "04",
    title: "E-Commerce Solutions",
    short: "Online stores that make browsing and buying feel effortless.",
    description:
      "Well-organised online stores with clear product presentation, smooth checkout and the back-office setup you need to manage orders with ease.",
    deliverables: [
      "Store design and setup",
      "Product catalogue structure",
      "Payment and shipping configuration",
      "Checkout experience",
      "Order and inventory workflows",
    ],
    cta: "Start an online store",
  },
  {
    slug: "seo-digital-visibility",
    number: "05",
    title: "SEO & Digital Visibility",
    short: "Help the right people find you on search and AI assistants.",
    description:
      "Search visibility built on solid foundations: clean technical structure, clear content and the signals search engines and AI-assisted tools rely on to understand your business.",
    deliverables: [
      "Technical SEO review",
      "Keyword and content planning",
      "On-page optimisation",
      "Structured data setup",
      "Search Console and analytics setup",
    ],
    cta: "Improve your visibility",
  },
  {
    slug: "crm-automation",
    number: "06",
    title: "CRM Setup & Business Process Automation",
    short: "Organise leads and remove repetitive work from your week.",
    description:
      "Connect your website to the tools you run your business on. We set up a CRM that fits how you work and automate routine tasks — from lead capture to follow-ups — so less falls through the cracks.",
    deliverables: [
      "CRM selection and setup",
      "Lead capture integration",
      "Pipeline and stage design",
      "Automated follow-ups and notifications",
      "Team handover and documentation",
    ],
    cta: "Streamline your operations",
  },
];

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];

export const budgetOptions = [
  "Prefer not to say",
  "Under ₦500,000",
  "₦500,000 – ₦1,500,000",
  "₦1,500,000 – ₦3,000,000",
  "Above ₦3,000,000",
  "Let's discuss",
];
