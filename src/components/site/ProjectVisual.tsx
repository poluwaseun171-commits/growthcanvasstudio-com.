import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Project image, or an on-brand labelled placeholder frame until a screenshot is added. */
export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} — ${project.category} project by Growth Canvas`}
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:scale-[1.04]",
          className,
        )}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder image for ${project.title}`}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal-soft",
        className,
      )}
    >
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      {/* Abstract browser frame */}
      <div className="relative w-[74%] border border-hairline bg-charcoal transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2" aria-hidden>
          <span className="size-1.5 rounded-full bg-bronze/70" />
          <span className="size-1.5 rounded-full bg-champagne/30" />
          <span className="size-1.5 rounded-full bg-champagne/30" />
        </div>
        <div className="space-y-3 p-5" aria-hidden>
          <div className="h-2 w-1/3 bg-bronze/60" />
          <div className="h-5 w-4/5 bg-champagne/15" />
          <div className="h-5 w-3/5 bg-champagne/10" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="aspect-[4/3] bg-champagne/[0.06]" />
            <div className="aspect-[4/3] bg-champagne/[0.06]" />
            <div className="aspect-[4/3] bg-bronze/15" />
          </div>
        </div>
      </div>
      <span className="eyebrow absolute left-4 top-4 border border-dashed border-bronze/50 px-2 py-1 text-[0.6rem]! text-bronze">
        Placeholder — add project image
      </span>
    </div>
  );
}
