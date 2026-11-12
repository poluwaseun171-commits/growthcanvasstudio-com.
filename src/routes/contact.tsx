import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { ContactChannels } from "@/components/site/ContactChannels";
import { budgetOptions, serviceOptions } from "@/content/services";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { supabase } from "@/integrations/supabase/client";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () =>
    pageHead({
      title: "Contact Growth Canvas — Start a Project",
      description:
        "Tell Growth Canvas about your business and project. Enquire about website design, redesign, landing pages, e-commerce, SEO or CRM automation.",
      path: "/contact",
    }),
  component: ContactPage,
});

const fieldBase =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-champagne placeholder:text-champagne/35 transition-colors duration-500 focus:border-bronze focus:outline-none focus-visible:outline-none";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow flex items-center gap-2 text-champagne/60">
        {label}
        {optional ? <span className="normal-case tracking-normal text-champagne/40">(optional)</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactPage() {
  const { service } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const initialService = service && serviceOptions.includes(service) ? service : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company: "",
      service: initialService,
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    const { error } = await supabase.from("contact_submissions").insert({
      full_name: values.full_name,
      email: values.email,
      company: values.company || null,
      service: values.service,
      budget: values.budget || null,
      message: values.message,
    });
    if (error) {
      toast.error("Your enquiry couldn't be sent. Please try again in a moment.");
      return;
    }
    reset();
    setSent(true);
  };

  return (
    <>
      <PageIntro label="Contact" title="Let's Talk About Your Project." accent={["Project."]}>
        Share a few details below and we'll get back to you with thoughtful next steps. There's no
        obligation — just a conversation about what you'd like to build.
      </PageIntro>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {sent ? (
              <div className="border border-bronze/40 p-10 md:p-14" role="status">
                <CheckCircle2 className="size-10 text-bronze" aria-hidden />
                <h2 className="display-md mt-8 text-champagne">
                  Thank you — your enquiry <span className="serif-accent">has been received.</span>
                </h2>
                <p className="mt-5 text-champagne/70">
                  We'll review the details and be in touch by email.
                </p>
                <Button variant="line" size="lg" className="mt-10" onClick={() => setSent(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <Field id="full_name" label="Full name" error={errors.full_name?.message}>
                    <input id="full_name" autoComplete="name" className={fieldBase} placeholder="Your name" {...register("full_name")} />
                  </Field>
                  <Field id="email" label="Email address" error={errors.email?.message}>
                    <input id="email" type="email" autoComplete="email" className={fieldBase} placeholder="you@company.com" {...register("email")} />
                  </Field>
                </div>
                <div className="grid gap-10 md:grid-cols-2">
                  <Field id="company" label="Company name" optional error={errors.company?.message}>
                    <input id="company" autoComplete="organization" className={fieldBase} placeholder="Your business" {...register("company")} />
                  </Field>
                  <Field id="service" label="Service required" error={errors.service?.message}>
                    <div className="relative">
                      <select id="service" className={cn(fieldBase, "cursor-pointer appearance-none pr-8 [&>option]:bg-charcoal")} {...register("service")}>
                        <option value="" disabled>
                          Choose a service
                        </option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-bronze" aria-hidden />
                    </div>
                  </Field>
                </div>
                <Field id="budget" label="Project budget" optional error={errors.budget?.message}>
                  <div className="relative">
                    <select id="budget" className={cn(fieldBase, "cursor-pointer appearance-none pr-8 [&>option]:bg-charcoal")} {...register("budget")}>
                      <option value="">Select a range</option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-bronze" aria-hidden />
                  </div>
                </Field>
                <Field id="message" label="Project description" error={errors.message?.message}>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(fieldBase, "resize-y")}
                    placeholder="Tell us about your business, your goals and any timelines."
                    {...register("message")}
                  />
                </Field>
                <div>
                  <Button type="submit" variant="bronze" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry <ArrowUpRight />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-bronze">Other ways to connect</p>
            <p className="mt-4 text-champagne/65">
              Prefer a direct conversation? Reach out through any of the channels below.
            </p>
            <ContactChannels className="mt-8" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
