import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { brand, navItems } from "@/content/brand";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { ContactChannels } from "./ContactChannels";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="mt-8 max-w-sm font-display text-2xl font-medium leading-snug tracking-tight text-champagne">
              Designed to Grow. <span className="serif-accent">Built to Perform.</span>
            </p>
            <Link
              to="/contact"
              className="link-underline mt-8 inline-flex items-center gap-2 pb-1 text-sm text-bronze"
            >
              Start a project <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow text-champagne/50">Navigate</p>
              <ul className="mt-5 space-y-3">
                {navItems.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="link-underline text-sm text-champagne/80 hover:text-champagne">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-champagne/50">Services</p>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services"
                      hash={s.slug}
                      className="link-underline text-sm text-champagne/80 hover:text-champagne"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-champagne/50">Connect</p>
              <ContactChannels className="mt-5" compact />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-hairline pt-8 text-xs text-champagne/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.company}. Founded by {brand.founder}.
          </p>
          <p>{brand.statement}</p>
        </div>
      </div>
    </footer>
  );
}
