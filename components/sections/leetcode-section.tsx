"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/constants/site";
import type { LeetCodeStats } from "@/types";

export function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, []);

  const fallbackStats: LeetCodeStats = {
    totalSolved: 200,
    easySolved: 80,
    mediumSolved: 100,
    hardSolved: 20,
    ranking: 0,
    contestRating: 0,
  };

  const data = stats || fallbackStats;

  return (
    <section id="leetcode" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="LeetCode" subtitle="Problem solving progress" />

        {loading ? (
          <div className="h-64 animate-pulse rounded-2xl bg-card" />
        ) : (
          <FadeIn>
            <div className="rounded-2xl border border-white/5 bg-card/80 p-8 backdrop-blur-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted">Total Problems Solved</p>
                  <p className="font-heading text-5xl font-bold text-white">{data.totalSolved}+</p>

                  <div className="mt-8 space-y-4">
                    {[
                      { label: "Easy", value: data.easySolved, color: "bg-green-500", total: data.totalSolved },
                      { label: "Medium", value: data.mediumSolved, color: "bg-yellow-500", total: data.totalSolved },
                      { label: "Hard", value: data.hardSolved, color: "bg-red-500", total: data.totalSolved },
                    ].map((level) => (
                      <div key={level.label}>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted">{level.label}</span>
                          <span className="text-white">{level.value}</span>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5">
                          <div
                            className={`h-full rounded-full ${level.color}`}
                            style={{ width: `${(level.value / level.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/5 p-8">
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 rounded-sm"
                        style={{
                          backgroundColor: `rgba(37, 99, 235, ${Math.random() * 0.8 + 0.1})`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted">Activity Heatmap</p>
                  {data.contestRating ? (
                    <p className="mt-2 text-lg font-bold text-accent">
                      Contest Rating: {data.contestRating}
                    </p>
                  ) : null}
                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    View LeetCode Profile
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
