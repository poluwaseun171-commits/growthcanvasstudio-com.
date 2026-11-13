/**
 * Portfolio projects — real Growth Canvas work.
 *
 * Descriptions are written from the project screenshots supplied by the founder.
 * EDIT HERE to add a live URL, client name or year, or to add new projects.
 * Fields set to null are hidden on the site.
 */
import enzoImg from "@/assets/portfolio/enzo-fashion-shopify-store.png.asset.json";
import cornbreadImg from "@/assets/portfolio/cornbread-wellness-shopify-store.png.asset.json";
import yachtImg from "@/assets/portfolio/yacht-rental-website-gohighlevel.png.asset.json";
import kickStartImg from "@/assets/portfolio/digital-biz-kick-start-kit-funnel.png.asset.json";
import educationImg from "@/assets/portfolio/education-website-gohighlevel.png.asset.json";
import eventImg from "@/assets/portfolio/event-registration-funnel.png.asset.json";

export type ProjectCategory = "Website" | "E-Commerce" | "Sales Funnel" | "Automation";

export type Project = {
  slug: string;
  title: string;
  /** Short label for the kind of build, e.g. "Shopify Store Design". */
  type: string;
  client: string | null;
  year: string | null;
  category: ProjectCategory;
  platform: string;
  summary: string;
  challenge: string;
  approach: string;
  /** Key pages, sections and features delivered. */
  features: string[];
  services: string[];
  technologies: string[];
  liveUrl: string | null;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "enzo-fashion-shopify-store",
    title: "Enzo Fashion Store",
    type: "Shopify Store Design",
    client: "Enzo",
    year: null,
    category: "E-Commerce",
    platform: "Shopify",
    summary:
      "A bold, editorial Shopify storefront for a multi-designer fashion retailer — built to showcase premium labels, new arrivals and flagship stores in one seamless shopping experience.",
    challenge:
      "Enzo carries a wide range of designer labels across men, women, kids and fragrances, and also runs physical flagship stores. The store needed to feel as premium as the brands it sells, make a large catalogue easy to browse, and connect online shoppers with the in-store experience.",
    approach:
      "We designed a clean, gallery-style layout that lets the product photography lead. A mega-menu organises the catalogue by designer and department, designer collections get their own spotlight sections, and shopping is kept fast with sale pricing, size selection and express checkout. Flagship store cards bring opening hours, directions and a call button straight into the homepage.",
    features: [
      "Announcement bar for free-shipping and promotional messages",
      "Mega-menu navigation: New Arrivals, Designers, Men, Women, Kids, Fragrances and Sale",
      "Country and currency selector with prices shown in Naira (NGN)",
      "Full-width campaign hero — “Bold by design”",
      "Designer collection spotlight with sale badges and original vs. discounted pricing",
      "“Just arrived” product row and tabbed “What's new” carousel (Jackets, Hoodies, T-Shirts)",
      "Designer campaign banner linking to a featured brand collection",
      "Featured product block with size selector, quantity, add to cart and Shop Pay express checkout",
      "Flagship store locator cards with opening hours, directions and call buttons",
      "“For Her” and “For Him” shopping split and a social “Follow us” gallery",
    ],
    services: ["Shopify Store Design", "E-Commerce Solutions"],
    technologies: ["Shopify", "Shop Pay"],
    liveUrl: null,
    image: enzoImg.url,
  },
  {
    slug: "cornbread-wellness-shopify-store",
    title: "Cornbread Wellness Store",
    type: "Shopify Store Design",
    client: "Cornbread",
    year: null,
    category: "E-Commerce",
    platform: "Shopify",
    summary:
      "A warm, trust-led Shopify store for a natural wellness brand — designed to guide shoppers to the right product, highlight bestsellers and build confidence with expert and customer proof.",
    challenge:
      "Wellness shoppers need reassurance before they buy. The brand needed a store that helps visitors quickly find the right product for how they want to feel, while clearly communicating quality, lab testing and the experts behind every formula.",
    approach:
      "We built the homepage as a guided journey: an inviting hero with social proof, a “Find your feel-good” section that sorts products by need, a bestsellers grid with ratings and one-click add to cart, and dedicated trust sections — a medical advisory board, customer stories and quality badges. A warm cream-and-amber palette with characterful serif headings gives the brand a natural, approachable feel.",
    features: [
      "Promotional announcement bar for sitewide sales",
      "Hero — “Grown for the Good Life” — with Shop Now button and star-rating review count",
      "“Featured in” press logo strip",
      "“Find Your Feel-Good” shop-by-need categories (seltzers, gummies, drinks)",
      "“Bestsellers Worth Buzzing About” product grid with ratings, prices and add to cart",
      "“Meet the Experts” medical advisory board carousel",
      "Campaign section with a live countdown banner",
      "“What Folks Are Saying” customer review and video testimonial section",
      "“Where tradition meets science” quality badges: all-natural, third-party tested and more",
    ],
    services: ["Shopify Store Design", "E-Commerce Solutions"],
    technologies: ["Shopify"],
    liveUrl: null,
    image: cornbreadImg.url,
  },
  {
    slug: "yacht-rental-website",
    title: "Luxury Yacht Rental Website",
    type: "Website Design",
    client: null,
    year: null,
    category: "Website",
    platform: "GoHighLevel",
    summary:
      "An elegant, nautical-inspired website for a luxury yacht rental business — designed to sell the experience, present the fleet and services, and turn visitors into enquiries.",
    challenge:
      "Luxury yacht rental is an experience-led purchase. The business needed a website that feels exclusive from the first scroll, explains its fleet and services clearly, and makes contacting the team effortless.",
    approach:
      "We paired deep navy with soft cream and gold accents, refined serif headings and subtle rope and anchor motifs for a premium maritime feel. Immersive ocean imagery opens the site, followed by clear sections for what sets the company apart, the services on offer, the fleet and a gallery — with a “Contact Us Today” call to action repeated throughout. Built in GoHighLevel so enquiries flow straight into the client's CRM.",
    features: [
      "Hero — “Your Journey, Your Choice” — with aerial yacht imagery and Contact Us Today button",
      "“Discover Our Unique Qualities”: fleet choice, skilled crew and captains, customer service, attention to detail",
      "Services section: yacht rental, crewed yachting escapes, premier event hosting and concierge solutions",
      "“Yacht Rental Is A Journey Like No Other” story section",
      "Partner and brand logo strip",
      "Fleet showcase with featured yacht details",
      "“Captivating Moments” photo gallery",
      "Client testimonials section",
      "Enquiry calls to action connected to GoHighLevel",
    ],
    services: ["Website Design & Development"],
    technologies: ["GoHighLevel"],
    liveUrl: null,
    image: yachtImg.url,
  },
  {
    slug: "digital-biz-kick-start-kit-funnel",
    title: "Digital Biz Kick Start Kit Funnel",
    type: "Sales Funnel Design",
    client: null,
    year: null,
    category: "Sales Funnel",
    platform: "GoHighLevel",
    summary:
      "A high-converting sales funnel for a $17 digital product aimed at entrepreneurs, creators and experts — built to speak to the buyer's problem and lead them to checkout.",
    challenge:
      "Low-ticket digital products live or die on their sales page. The offer needed a funnel that instantly connects with experts who have the knowledge but don't know what to build first, explains the kit clearly and makes buying a simple, confident decision.",
    approach:
      "We structured the page around a classic direct-response flow: a sharp audience bar and problem-led headline, a product mockup across laptop, tablet and phone with a clear price badge, the problem, the solution, a simple 3-step process and a side-by-side “Without the kit vs. with the kit” comparison. A bold red, pink and white palette keeps every call to action unmissable.",
    features: [
      "Audience call-out bar and benefit strip",
      "Headline — “For the expert who has the knowledge but can't figure out what to build first”",
      "Product mockup on laptop, tablet and phone with a $17 price badge",
      "Primary “Get the Kit for $17” call to action, repeated through the page",
      "Problem section that mirrors the buyer's frustrations",
      "“The Solution — Introducing the Digital Biz Kick Start Kit” section",
      "Simple 3-step “how it works” section",
      "“Without the Kit vs. With the Kit” comparison",
      "Founder story section — why the kit was created",
    ],
    services: ["Landing Pages & Sales Funnels"],
    technologies: ["GoHighLevel"],
    liveUrl: null,
    image: kickStartImg.url,
  },
  {
    slug: "education-university-website",
    title: "Education & University Website",
    type: "Website Design",
    client: null,
    year: null,
    category: "Website",
    platform: "GoHighLevel",
    summary:
      "A modern website for an education provider, delivered as two homepage design directions — built to present programmes, showcase campus life and drive course enrolments.",
    challenge:
      "Prospective students compare institutions quickly. The site needed to build credibility at first glance, make courses easy to find, and guide visitors towards applying or enrolling.",
    approach:
      "We designed two homepage concepts so the client could choose a direction: a bright, image-led university layout and a bolder course-focused layout. Both lead with inspiring campus photography and a clear call to action, then move through key services, academic offerings, proof points and a popular-courses grid with ratings and pricing.",
    features: [
      "Top bar with contact details, login and social links",
      "Navigation with Home, About, Courses, Events, Blog, Contact and an Apply Now button",
      "Hero — “Together We'll Explore New Things” — with Find Courses call to action",
      "Service cards: graduation, university life and education services",
      "“Degrees in Various Academic Disciplines” section with key benefits checklist",
      "Statistics counters for experience, online courses, teachers and learners",
      "Popular online courses grid with ratings and pricing",
      "Alternate concept with feature icons: experienced faculty, popular courses, career security",
    ],
    services: ["Website Design & Development"],
    technologies: ["GoHighLevel"],
    liveUrl: null,
    image: educationImg.url,
  },
  {
    slug: "event-registration-funnel",
    title: "Event Registration Funnel",
    type: "Sales Funnel Design",
    client: null,
    year: null,
    category: "Sales Funnel",
    platform: "GoHighLevel",
    summary:
      "A reusable event and webinar registration funnel — designed to introduce the host, explain what attendees will learn and drive sign-ups before the countdown ends.",
    challenge:
      "Coaches, consultants and educators need a dependable way to fill live events. The goal was a funnel that can be adapted for any topic and still feels personal, credible and urgent.",
    approach:
      "We built a flexible funnel with a strong problem-and-promise headline, a host introduction, social proof and a live countdown to create urgency. A rich maroon palette with soft imagery keeps it professional, while repeated “Sign Up Today” calls to action and a GoHighLevel registration flow capture every lead.",
    features: [
      "Hero with problem-and-promise headline, Sign Up Today button and host photo",
      "Bonus and resource cards for attendees",
      "“About Me” host introduction with illustration",
      "Credibility stats bar: years of experience, people reached, books and articles",
      "Benefit icons: gain knowledge, increase income, work less, be happy",
      "Event date card with a live countdown timer",
      "“See exactly what you will learn” breakdown",
      "Attendee testimonials section",
      "Registration form connected to GoHighLevel",
    ],
    services: ["Landing Pages & Sales Funnels", "CRM Setup & Business Process Automation"],
    technologies: ["GoHighLevel"],
    liveUrl: null,
    image: eventImg.url,
  },
];

/** Filter tabs: "All" plus only the categories that currently have projects. */
export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
