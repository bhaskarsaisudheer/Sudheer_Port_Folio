import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GitHubSection } from "@/components/sections/github-section";
import { LeetCodeSection } from "@/components/sections/leetcode-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TechMarquee } from "@/components/animations/tech-marquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <TimelineSection />
      <GitHubSection />
      <LeetCodeSection />
      <ContactSection />
    </>
  );
}
