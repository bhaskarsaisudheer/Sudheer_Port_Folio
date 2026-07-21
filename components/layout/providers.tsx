"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F172A",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#FFFFFF",
          },
        }}
      />
    </ThemeProvider>
  );
}
