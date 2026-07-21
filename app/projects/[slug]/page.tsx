import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Cpu } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Bhaskar Sai Sudheer`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-28 text-foreground">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
        {project.image && (
          <div className="relative h-72 w-full sm:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          </div>
        )}

        <div className="p-8 sm:p-12">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-4 font-heading text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{project.longDescription}</p>
          
          <div className="mt-6 flex flex-wrap gap-4">
            {project.github && (
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <SiGithub size={18} /> GitHub Repository
                </a>
              </Button>
            )}
            {project.live && (
              <Button variant="gradient" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Live Demonstration
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
          <Sparkles size={22} className="text-primary" /> Key Features
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.features.map((f) => (
            <div key={f} className="flex items-start gap-3 rounded-xl border border-white/5 bg-card/60 p-4 backdrop-blur-sm">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-sm text-muted leading-snug">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
          <Cpu size={22} className="text-secondary" /> Technology Stack
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-red-500/10 bg-red-500/5 p-6">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <AlertCircle size={20} className="text-red-400" /> Engineering Challenges
          </h2>
          <ul className="mt-4 space-y-3">
            {project.challenges.map((c) => (
              <li key={c} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
          <h2 className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={20} className="text-emerald-400" /> Architectural Solutions
          </h2>
          <ul className="mt-4 space-y-3">
            {project.solutions.map((s) => (
              <li key={s} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12 rounded-2xl border border-white/5 bg-card/40 p-6">
        <h2 className="font-heading text-xl font-bold text-white">Future Enhancements</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.futureImprovements.map((f) => (
            <li key={f} className="text-sm text-muted flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
