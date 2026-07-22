import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { experiences } from "@/constants/experience";
import { education } from "@/constants/education";
import { projects } from "@/constants/projects";
import { skillCategories } from "@/constants/skills";
import { achievements } from "@/constants/achievements";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: `Professional Resume of ${siteConfig.name} - Software & AI Engineer.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-28 text-foreground">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-4">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">{siteConfig.name}</h1>
          <p className="mt-2 text-xl text-primary font-medium">{siteConfig.title}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="gradient" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download size={18} /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={16} className="text-primary" /> {siteConfig.email}
        </a>
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <SiGithub size={16} className="text-secondary" /> GitHub Profile
        </a>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
          <FaLinkedin size={16} className="text-accent" /> LinkedIn Profile
        </a>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Professional Summary</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning. Experienced in developing full-stack web applications, machine learning pipelines, RAG-powered AI solutions, and RESTful APIs. Demonstrated strong problem-solving ability with 200+ LeetCode problems solved and practical experience across data science and machine learning internships.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Work Experience</h2>
        <div className="mt-6 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="rounded-xl border border-white/5 bg-card/60 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-accent">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Featured Projects</h2>
        <div className="mt-6 space-y-6">
          {projects.map((p) => (
            <div key={p.slug} className="rounded-xl border border-white/5 bg-card/60 p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-heading text-xl font-bold text-white">{p.title}</h3>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                      <SiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-muted">{p.longDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Technical Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="rounded-xl border border-white/5 bg-card/40 p-5">
              <h3 className="font-heading text-lg font-semibold text-white">{cat.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-white/5 px-3 py-1 text-sm text-muted border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-center rounded-xl border border-white/5 bg-card/40 p-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-primary">{edu.institution}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-accent">{edu.period}</span>
                <p className="text-sm font-semibold text-white mt-1">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-2">Achievements & Certifications</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((ach) => (
            <div key={ach.id} className="flex items-center gap-4 rounded-xl border border-white/5 bg-card/40 p-4">
              <span className="text-3xl">{ach.icon}</span>
              <div>
                <h3 className="font-heading font-semibold text-white">{ach.title}</h3>
                <p className="text-xs text-muted mt-0.5">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
