"use client";

import { siteConfig } from "@/constants/site";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { useCounter } from "@/hooks/use-counter";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FadeIn } from "@/components/animations/fade-in";
import { HeroIllustration } from "@/components/animations/hero-illustration";
import { FloatingIcons } from "@/components/animations/floating-icons";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-3xl font-bold text-white md:text-4xl">
        {count}{suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export function HeroSection() {
  const typedRole = useTypingAnimation(siteConfig.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <FloatingIcons />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="text-lg text-accent font-medium">Hi,</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-2 font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Bhaskar
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 h-8 text-xl text-muted sm:text-2xl">
                <span className="text-secondary">{typedRole}</span>
                <span className="animate-pulse">|</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                I build AI-powered software that solves real-world problems.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="outline" size="lg" asChild>
                    <a href={siteConfig.resume} download>
                      <Download size={18} />
                      Download Resume
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Mail size={18} />
                    Contact Me
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <MagneticButton className="mt-10 inline-block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Let&apos;s Build Something Amazing
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </MagneticButton>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <HeroIllustration />
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-white/5 bg-card/50 p-8 backdrop-blur-sm md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
