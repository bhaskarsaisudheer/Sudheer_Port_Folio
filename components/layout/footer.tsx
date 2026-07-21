"use client";

import { siteConfig } from "@/constants/site";
import { ArrowUp, Mail } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { VisitorCounter } from "@/components/layout/extras";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-bold text-white">{siteConfig.shortName}</p>
            <p className="mt-1 text-sm text-muted">Software & AI Engineer</p>
          </div>

          <div className="flex items-center gap-4">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-white" aria-label="GitHub">
              <SiGithub size={20} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-white" aria-label="LinkedIn">
              <TbBrandLinkedin size={20} />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-muted transition-colors hover:text-white" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href={siteConfig.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-white" aria-label="LeetCode">
              <SiLeetcode size={20} />
            </a>
          </div>

          <Button variant="outline" size="sm" onClick={scrollToTop}>
            <ArrowUp size={16} />
            Back to Top
          </Button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, Framer Motion & Three.js</p>
          <div className="mt-2">
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
}
