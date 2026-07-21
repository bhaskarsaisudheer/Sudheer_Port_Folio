"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";

export function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      aria-hidden
    >
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        style={{
          left: x,
          top: y,
          background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
