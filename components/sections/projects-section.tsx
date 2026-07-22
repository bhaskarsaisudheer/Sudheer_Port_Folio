"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";

const filters = ["All", "AI", "ML", "Full Stack"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <FadeIn>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "border border-white/10 text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-card/80 backdrop-blur-sm transition-colors hover:border-primary/20"
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10">
                      <Folder size={48} className="text-muted/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs text-muted/70">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <SiGithub size={16} /> GitHub
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild className="ml-auto">
                      <Link href={`/projects/${project.slug}`}>Case Study</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
