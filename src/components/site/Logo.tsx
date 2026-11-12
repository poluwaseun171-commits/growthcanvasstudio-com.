import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

/**
 * Official Growth Canvas logo. Renders the uploaded file untouched when set in
 * brand.assets.logo; otherwise a clearly labelled placeholder.
 */
export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const height = size === "lg" ? "h-24" : size === "sm" ? "h-12" : "h-16";
  if (brand.assets.logo) {
    return (
      <img
        src={brand.assets.logo}
        alt="Growth Canvas logo"
        className={cn(height, "w-auto object-contain", className)}
      />
    );
  }
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 border border-dashed border-bronze/60 px-3",
        height,
        className,
      )}
      title="Logo placeholder — upload the official Growth Canvas logo to replace"
      aria-label="Growth Canvas (logo placeholder)"
    >
      <span className="font-display text-[0.8rem] font-bold tracking-[0.22em] text-champagne">
        GROWTH CANVAS
      </span>
      <span className="eyebrow text-[0.55rem]! tracking-[0.18em]! text-bronze">Logo</span>
    </span>
  );
}
