import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/layout/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ShareButton } from "@/components/layout/extras";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CommandPalette } from "@/components/layout/command-palette";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ParticleBackground } from "@/components/animations/particle-background";
import { MouseGlow } from "@/components/animations/mouse-glow";
import { siteConfig } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Generative AI",
    "Bhaskar Sai Sudheer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="custom-cursor min-h-screen bg-background text-foreground antialiased"
      >
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          <ParticleBackground />
          <MouseGlow />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 gradient-bg">{children}</main>
          <Footer />
          <ShareButton />
          <CommandPalette />
          <Analytics />
        </Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: "Software Engineer",
              sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.leetcode],
              email: siteConfig.email,
            }),
          }}
        />
      </body>
    </html>
  );
}
