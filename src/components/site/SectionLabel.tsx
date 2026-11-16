import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  label,
  className,
}: {
  number?: string | undefined;
  label: string;
  className?: string | undefined;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-3 text-bronze", className)}>
      {number ? <span>{number}</span> : null}
      <span aria-hidden className="h-px w-10 bg-current" />
      <span>{label}</span>
    </p>
  );
}
