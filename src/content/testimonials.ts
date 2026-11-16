/**
 * Client testimonials.
 *
 * EDIT HERE: the five entries below are SAMPLE testimonials supplied for preview
 * only — they are not real client reviews. While any entry has `sample: true`,
 * the site shows a visible "Sample testimonials" notice and a "Sample" tag on
 * each card. Replace each entry with an approved, authentic client quote and
 * set `sample: false`.
 */
export type Testimonial = {
  sample: boolean;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Whole stars, 1–5. */
  rating: 1 | 2 | 3 | 4 | 5;
  service: string;
  /** Optional link to a portfolio project slug. */
  projectSlug: string | null;
};

export const testimonials: Testimonial[] = [
  {
    sample: true,
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "Bloom & Co. Studio",
    rating: 5,
    service: "Website Design",
    quote:
      "Working with Precious was such a smooth experience. She really listened to what I wanted and turned my ideas into a website that feels professional and represents my business perfectly. I especially appreciated her attention to the little details.",
    projectSlug: null,
  },
  {
    sample: true,
    name: "Michael Anderson",
    role: "Managing Director",
    company: "Anderson Creative Solutions",
    rating: 5,
    service: "Website Redesign",
    quote:
      "Our website was outdated, and honestly, I didn't know where to start. Precious made the entire redesign process easy. She understood what wasn't working and gave our website a fresh, modern look. It finally feels like a proper reflection of our brand.",
    projectSlug: null,
  },
  {
    sample: true,
    name: "Emily Carter",
    role: "Marketing Director",
    company: "Elevate Wellness Group",
    rating: 5,
    service: "SEO & Website Optimization",
    quote:
      "What stood out to me about Precious was how clearly she explained everything. She helped us understand the issues affecting our website's visibility and made improvements without overwhelming us with technical terms. She's patient, knowledgeable, and easy to work with.",
    projectSlug: null,
  },
  {
    sample: true,
    name: "Daniel Brooks",
    role: "Operations Manager",
    company: "PrimePath Consulting",
    rating: 5,
    service: "CRM & Business Automation",
    quote:
      "Before working with Precious, keeping track of customer enquiries was a headache. She helped us organize our process and set up a system that makes following up much easier. I love that she focused on what our business actually needed rather than making things complicated.",
    projectSlug: null,
  },
  {
    sample: true,
    name: "Jessica Thompson",
    role: "Business Owner",
    company: "Thrive Beauty & Aesthetics",
    rating: 5,
    service: "Landing Page & Lead Generation",
    quote:
      "Precious was great to work with from beginning to end. I needed a landing page that looked good but also made it easy for potential customers to contact us. She delivered exactly that and was always open to feedback. I'd happily recommend her.",
    projectSlug: null,
  },
];

export const hasSampleTestimonials = testimonials.some((t) => t.sample);
