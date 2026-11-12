import { UserRound } from "lucide-react";
import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

/**
 * Displays the founder's original photograph without alteration (object-cover,
 * anchored to the top so the face is never cropped). Falls back to a labelled
 * placeholder until the photo is uploaded.
 */
export function FounderPortrait({
  className,
  tone = "dark",
  priority = false,
  photo = brand.assets.founderPhoto,
}: {
  className?: string;
  tone?: "dark" | "light";
  priority?: boolean;
  photo?: string | null;
}) {
  if (photo) {
    return (
      <img
        src={photo}
        alt="Precious Akinola, founder of Growth Canvas"
        className={cn("h-full w-full object-cover object-top", className)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Placeholder for the founder photograph of Precious Akinola"
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed text-center",
        tone === "dark"
          ? "border-bronze/50 bg-charcoal-soft text-champagne/70"
          : "border-charcoal/30 bg-charcoal/5 text-charcoal/60",
        className,
      )}
    >
      <UserRound className="size-14 stroke-[1]" aria-hidden />
      <div className="space-y-1 px-6">
        <p className="eyebrow text-bronze">Founder photo</p>
        <p className="text-sm">Upload the original photograph of Precious Akinola to replace this placeholder.</p>
      </div>
    </div>
  );
}
