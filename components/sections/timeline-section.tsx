"use client";

import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineItems = [
  ...education.map((e) => ({
    id: e.id,
    type: "education" as const,
    title: e.degree,
    subtitle: e.institution,
    period: e.period,
    detail: e.gpa,
  })),
  ...experiences.map((e) => ({
    id: e.id,
    type: "experience" as const,
    title: e.role,
    subtitle: e.company,
    period: e.period,
    detail: e.skills.join(" · "),
  })),
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Timeline" subtitle="Education & career journey" />

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {timelineItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <div className="relative mb-10 ml-14">
                <div className="absolute -left-[38px] flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-card">
                  {item.type === "education" ? (
                    <GraduationCap size={14} className="text-primary" />
                  ) : (
                    <Briefcase size={14} className="text-secondary" />
                  )}
                </div>
                <div className="rounded-xl border border-white/5 bg-card/60 p-5 backdrop-blur-sm">
                  <span className="text-xs font-medium text-accent">{item.period}</span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-primary">{item.subtitle}</p>
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
