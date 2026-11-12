import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/content/brand";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-luxe)]",
        scrolled || open
          ? "border-b border-hairline bg-charcoal/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link to="/" aria-label="Growth Canvas — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline pb-0.5 text-sm text-champagne/75 transition-colors hover:text-champagne"
              activeProps={{ className: "text-champagne! bg-[length:100%_1px]!" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="bronze" size="default" className="hidden sm:inline-flex">
            <Link to="/contact">
              Start a Project <ArrowUpRight />
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-hairline text-champagne lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-charcoal lg:hidden"
          >
            <ul className="flex flex-col px-5 pt-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-hairline"
                >
                  <Link
                    to={item.to}
                    className="flex items-baseline justify-between py-5 font-display text-3xl font-semibold tracking-tight text-champagne"
                    activeProps={{ className: "text-bronze!" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                    <span className="eyebrow text-bronze">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-5 pt-8">
              <Button asChild variant="bronze" size="xl" className="w-full">
                <Link to="/contact">
                  Start a Project <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
