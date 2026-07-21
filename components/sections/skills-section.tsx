"use client";

import { skillCategories } from "@/constants/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.category} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full rounded-2xl border border-white/5 bg-card/80 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
              >
                <h3 className="font-heading text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-muted transition-colors group-hover:border-white/10 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
