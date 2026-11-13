/**
 * Client testimonials.
 *
 * EDIT HERE: these are clearly labelled PLACEHOLDERS. Replace each entry with a
 * real client quote (with their permission) and set `placeholder: false`.
 * `projectSlug` optionally links the testimonial to a portfolio project.
 */
export type Testimonial = {
  placeholder: boolean;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectSlug: string | null;
};

export const testimonials: Testimonial[] = [
  {
    placeholder: true,
    quote: "Client testimonial to be added — a few sentences about working with Growth Canvas and the result.",
    name: "Client name",
    role: "Role",
    company: "Company",
    projectSlug: null,
  },
  {
    placeholder: true,
    quote: "Client testimonial to be added — a few sentences about working with Growth Canvas and the result.",
    name: "Client name",
    role: "Role",
    company: "Company",
    projectSlug: null,
  },
  {
    placeholder: true,
    quote: "Client testimonial to be added — a few sentences about working with Growth Canvas and the result.",
    name: "Client name",
    role: "Role",
    company: "Company",
    projectSlug: null,
  },
];
