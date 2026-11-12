import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = {
  full_name: "Ada",
  email: "ada@example.com",
  company: "",
  service: "Not sure yet",
  budget: "",
  message: "We need a new website.",
};

describe("contact form rules", () => {
  it("accepts an enquiry without company or budget (both optional)", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("requires a service to be chosen", () => {
    expect(contactSchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });
  it("rejects a project description shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hi there" }).success).toBe(false);
  });
});
