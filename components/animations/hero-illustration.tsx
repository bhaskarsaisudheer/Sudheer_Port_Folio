"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
    </div>
  ),
});

export function HeroIllustration() {
  return (
    <div className="relative h-[400px] w-full lg:h-[500px]">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  );
}
