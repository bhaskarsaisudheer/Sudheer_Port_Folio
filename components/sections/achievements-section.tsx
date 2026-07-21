"use client";

import { achievements } from "@/constants/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Achievements" subtitle="Milestones along the way" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, rotate: 1 }}
                className="group rounded-2xl border border-white/5 bg-card/80 p-6 backdrop-blur-sm transition-colors hover:border-accent/30"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
