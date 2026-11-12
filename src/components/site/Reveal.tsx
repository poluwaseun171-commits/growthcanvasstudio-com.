import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
} & Omit<HTMLMotionProps<"div">, "children">;

/** Fades and lifts content into view once, on scroll. Respects reduced motion. */
export function Reveal({ children, delay = 0, y = 28, className, as = "div", ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Splits a line into words and staggers them upward, for display headlines. */
export function StaggerWords({
  text,
  className,
  delay = 0,
  accent,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Words (exact match) that receive the italic serif accent. */
  accent?: string[];
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${accent?.includes(word) ? "serif-accent pr-[0.06em]" : ""}`}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.05, delay: delay + i * 0.06, ease }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
