"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Folder, Mail, FileText, Home } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/constants/projects";
import { navLinks, siteConfig } from "@/constants/site";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150]">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="fixed left-1/2 top-[20%] z-[151] w-full max-w-lg -translate-x-1/2 px-4">
        <Command className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 px-4">
            <Search size={18} className="text-muted" />
            <Command.Input
              placeholder="Search sections, projects..."
              className="flex h-12 w-full bg-transparent text-sm text-white placeholder:text-muted outline-none"
            />
            <kbd className="hidden rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted sm:inline">ESC</kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted">No results found.</Command.Empty>

            <Command.Group heading="Navigation" className="text-xs text-muted px-2 py-1.5">
              {navLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  onSelect={() => runCommand(() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }))}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white aria-selected:bg-white/10"
                >
                  <Home size={16} className="text-muted" />
                  {link.name}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Projects" className="text-xs text-muted px-2 py-1.5">
              {projects.map((p) => (
                <Command.Item
                  key={p.slug}
                  onSelect={() => runCommand(() => window.location.href = `/projects/${p.slug}`)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white aria-selected:bg-white/10"
                >
                  <Folder size={16} className="text-muted" />
                  {p.title}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Links" className="text-xs text-muted px-2 py-1.5">
              <Command.Item
                onSelect={() => runCommand(() => window.open(siteConfig.github, "_blank"))}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white aria-selected:bg-white/10"
              >
                <SiGithub size={16} className="text-muted" />
                GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }))}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white aria-selected:bg-white/10"
              >
                <Mail size={16} className="text-muted" />
                Contact
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(siteConfig.resume, "_blank"))}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white aria-selected:bg-white/10"
              >
                <FileText size={16} className="text-muted" />
                Download Resume
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
