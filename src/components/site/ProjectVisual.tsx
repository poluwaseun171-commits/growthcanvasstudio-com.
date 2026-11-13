import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Square project presentation image. Frames should be aspect-square so nothing is cropped. */
export function ProjectVisual({
  project,
  className,
  eager = false,
}: {
  project: Project;
  className?: string | undefined;
  eager?: boolean;
}) {
  return (
    <img
      src={project.image}
      alt={`${project.title} — ${project.type} built in ${project.platform} by Growth Canvas`}
      loading={eager ? "eager" : "lazy"}
      width={1080}
      height={1080}
      className={cn(
        "h-full w-full bg-charcoal-soft object-cover transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:scale-[1.03]",
        className,
      )}
    />
  );
}
