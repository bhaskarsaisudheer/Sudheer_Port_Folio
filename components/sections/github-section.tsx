"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/constants/site";
import { Star, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { GitHubStats } from "@/types";

export function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="GitHub" subtitle="Open source contributions" />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-2xl bg-card" />
            ))}
          </div>
        ) : stats ? (
          <>
            <FadeIn>
              <div className="mb-10 grid grid-cols-3 gap-6">
                {[
                  { label: "Repositories", value: stats.publicRepos },
                  { label: "Followers", value: stats.followers },
                  { label: "Total Stars", value: stats.totalStars },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/5 bg-card/80 p-6 text-center backdrop-blur-sm">
                    <p className="font-heading text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {stats.pinnedRepos.map((repo, i) => (
                <FadeIn key={repo.name} delay={i * 0.1}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-white/5 bg-card/80 p-6 backdrop-blur-sm transition-colors hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <SiGithub size={18} className="text-muted" />
                        <h3 className="font-heading font-bold text-white group-hover:text-primary transition-colors">
                          {repo.name}
                        </h3>
                      </div>
                      <ExternalLink size={16} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{repo.description}</p>
                    <div className="mt-4 flex items-center gap-4">
                      {repo.language && <Badge variant="accent">{repo.language}</Badge>}
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <Star size={14} /> {repo.stars}
                      </span>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </>
        ) : (
          <FadeIn>
            <div className="rounded-2xl border border-white/5 bg-card/80 p-12 text-center backdrop-blur-sm">
              <SiGithub size={48} className="mx-auto text-muted/40" />
              <p className="mt-4 text-muted">GitHub stats will appear when configured</p>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:underline">
                View GitHub Profile
              </a>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/5 bg-card/50 p-4">
            <img
              src={`https://ghchart.rshah.org/2563EB/bhaskarsai`}
              alt="GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
