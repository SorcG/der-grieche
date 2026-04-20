"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  /** Axis from which the element enters. Defaults to "up". */
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const OFFSET = 40;

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign =
    direction === "right" || direction === "down" ? -OFFSET : OFFSET;
  const initial =
    direction === "none" ? { opacity: 0 } : { opacity: 0, [axis]: sign };
  const animate =
    direction === "none" ? { opacity: 1 } : { opacity: 1, [axis]: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
