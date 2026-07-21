"use client";

import { experiences } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Experience" subtitle="Professional journey" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.15}>
              <div className={`relative mb-12 flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:items-center`}>
                <div className="absolute left-8 md:left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                  <Briefcase size={10} className="text-white" />
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-white/5 bg-card/80 p-6 backdrop-blur-sm transition-colors hover:border-primary/20">
                    <span className="text-sm font-medium text-accent">{exp.period}</span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item) => (
                        <li key={item} className="text-sm text-muted">{item}</li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
