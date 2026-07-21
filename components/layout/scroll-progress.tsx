"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
