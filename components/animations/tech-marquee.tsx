"use client";

import { motion } from "framer-motion";
import { techLogos } from "@/constants/skills";

export function TechMarquee() {
  const logos = [...techLogos, ...techLogos];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {logos.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="flex items-center gap-2 text-lg font-medium text-muted/60 transition-colors hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
