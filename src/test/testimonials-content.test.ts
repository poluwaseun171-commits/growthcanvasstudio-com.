import { describe, expect, it } from "vitest";
import { hasSampleTestimonials, testimonials } from "@/content/testimonials";

describe("Testimonials content", () => {
  it("has the five supplied testimonials, each rated five stars", () => {
    expect(testimonials.map((t) => t.name)).toEqual([
      "Sarah Mitchell",
      "Michael Anderson",
      "Emily Carter",
      "Daniel Brooks",
      "Jessica Thompson",
    ]);
    for (const t of testimonials) expect(t.rating).toBe(5);
  });

  it("flags the sample testimonials so the site labels them as samples", () => {
    expect(testimonials.every((t) => t.sample)).toBe(true);
    expect(hasSampleTestimonials).toBe(true);
  });
});
