"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16 text-center", className)}
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </motion.div>
  );
}
