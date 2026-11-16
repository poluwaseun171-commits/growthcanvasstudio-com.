import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

type Channel = {
  key: string;
  label: string;
  icon: typeof Mail;
  value: string;
  href: string;
  external: boolean;
};

/**
 * Contact channels from brand.contact. Empty channels show a clearly labelled
 * "to be added" placeholder instead of an invented address or broken link.
 */
export function ContactChannels({ className, compact = false }: { className?: string; compact?: boolean }) {
  const channels: Channel[] = [
    ...brand.contact.emails.map((email, i) => ({
      key: `email-${i}`,
      label: brand.contact.emails.length > 1 ? `Email ${i + 1}` : "Email",
      icon: Mail,
      value: email,
      href: `mailto:${email}`,
      external: false,
    })),
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      value: brand.contact.whatsappDisplay || brand.contact.whatsapp,
      href: `https://wa.me/${brand.contact.whatsapp}`,
      external: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      value: brand.contact.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: brand.contact.linkedin,
      external: true,
    },
  ].filter((c) => c.value);

  return (
    <ul className={cn(compact ? "space-y-3" : "divide-y divide-border border-y border-border", className)}>
      {channels.map(({ key, label, icon: Icon, value, href, external }) => (
        <li key={key} className={cn(!compact && "py-5")}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="group flex min-w-0 items-center gap-3 text-sm hover:text-bronze"
          >
            <Icon className="size-4 shrink-0 text-bronze" aria-hidden />
            <span className="link-underline min-w-0 [overflow-wrap:anywhere]">{compact ? value : `${label} — ${value}`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
