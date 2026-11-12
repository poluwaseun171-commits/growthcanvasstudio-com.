/**
 * Portfolio projects.
 *
 * EDIT HERE: these are clearly labelled PLACEHOLDERS. Replace each entry with a
 * real completed project — client, summary, services, technologies, live URL
 * and an image URL — and set `placeholder: false`.
 */
export type ProjectCategory = "Website" | "E-Commerce" | "Landing Page" | "Automation";

export type Project = {
  slug: string;
  placeholder: boolean;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  approach: string;
  services: string[];
  technologies: string[];
  liveUrl: string | null;
  image: string | null;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    placeholder: true,
    title: "Project One",
    client: "Client name",
    year: "Year",
    category: "Website",
    summary: "Short description of the project and what it set out to achieve.",
    challenge: "Describe the client's situation and what needed to change.",
    approach: "Describe how Growth Canvas approached the design and build.",
    services: ["Website Design & Development"],
    technologies: ["Add technologies"],
    liveUrl: null,
    image: null,
  },
  {
    slug: "project-two",
    placeholder: true,
    title: "Project Two",
    client: "Client name",
    year: "Year",
    category: "E-Commerce",
    summary: "Short description of the project and what it set out to achieve.",
    challenge: "Describe the client's situation and what needed to change.",
    approach: "Describe how Growth Canvas approached the design and build.",
    services: ["E-Commerce Solutions"],
    technologies: ["Add technologies"],
    liveUrl: null,
    image: null,
  },
  {
    slug: "project-three",
    placeholder: true,
    title: "Project Three",
    client: "Client name",
    year: "Year",
    category: "Landing Page",
    summary: "Short description of the project and what it set out to achieve.",
    challenge: "Describe the client's situation and what needed to change.",
    approach: "Describe how Growth Canvas approached the design and build.",
    services: ["Landing Pages & Sales Funnels"],
    technologies: ["Add technologies"],
    liveUrl: null,
    image: null,
  },
  {
    slug: "project-four",
    placeholder: true,
    title: "Project Four",
    client: "Client name",
    year: "Year",
    category: "Automation",
    summary: "Short description of the project and what it set out to achieve.",
    challenge: "Describe the client's situation and what needed to change.",
    approach: "Describe how Growth Canvas approached the design and build.",
    services: ["CRM Setup & Business Process Automation"],
    technologies: ["Add technologies"],
    liveUrl: null,
    image: null,
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Website",
  "E-Commerce",
  "Landing Page",
  "Automation",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
