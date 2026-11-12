import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

const channels = [
  {
    key: "email",
    label: "Email",
    icon: Mail,
    value: brand.contact.email,
    href: (v: string) => `mailto:${v}`,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    value: brand.contact.whatsapp,
    href: (v: string) => `https://wa.me/${v}`,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    value: brand.contact.linkedin,
    href: (v: string) => v,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: Instagram,
    value: brand.contact.instagram,
    href: (v: string) => v,
  },
] as const;

/**
 * Contact channels from brand.contact. Empty channels show a clearly labelled
 * "to be added" placeholder instead of an invented address or broken link.
 */
export function ContactChannels({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <ul className={cn(compact ? "space-y-3" : "divide-y divide-border border-y border-border", className)}>
      {channels.map(({ key, label, icon: Icon, value, href }) => (
        <li key={key} className={cn(!compact && "py-5")}>
          {value ? (
            <a
              href={href(value)}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm hover:text-bronze"
            >
              <Icon className="size-4 text-bronze" aria-hidden />
              <span className="link-underline">{compact ? label : `${label} — ${value}`}</span>
            </a>
          ) : (
            <span className="flex items-center gap-3 text-sm text-muted-foreground" title="Placeholder — add in brand settings">
              <Icon className="size-4 text-bronze/70" aria-hidden />
              <span>
                {label} <span className="text-xs italic">(to be added)</span>
              </span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
