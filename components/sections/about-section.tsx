"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="About Me" subtitle="Passionate about building intelligent systems" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-primary/10"
            >
              <Image
                src="/assets/avatar.jpg"
                alt="Bhaskar Sai Sudheer Tangeti"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-secondary/20 blur-2xl" />
            </motion.div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">
                Computer Science graduate specializing in Artificial Intelligence and Machine Learning
                with practical experience in Machine Learning, Data Science, Full Stack Development,
                and Generative AI.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-muted">
                I enjoy building scalable software, AI applications, REST APIs, and intelligent
                automation systems that solve real-world problems.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg leading-relaxed text-muted">
                I have completed internships in Machine Learning and Data Science, built multiple
                AI-powered applications, and continuously improve my problem-solving skills through
                competitive programming.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-4">
                {["AI/ML", "Full Stack", "Gen AI", "Competitive Programming"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
