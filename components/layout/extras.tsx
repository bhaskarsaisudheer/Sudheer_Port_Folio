"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.title,
          text: siteConfig.description,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Portfolio link copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        variant="gradient"
        size="icon"
        onClick={handleShare}
        aria-label="Share portfolio"
        className="rounded-full shadow-lg shadow-primary/25"
      >
        {copied ? <Check size={18} /> : <Share2 size={18} />}
      </Button>
    </motion.div>
  );
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const key = "portfolio_visits";
    const visits = parseInt(localStorage.getItem(key) || "0", 10) + 1;
    localStorage.setItem(key, visits.toString());
    setCount(visits);
  }, []);

  if (count === null) return null;

  return (
    <span className="text-xs text-muted/60">
      Visitor #{count.toLocaleString()}
    </span>
  );
}

export function EmailCopy() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyEmail}
      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
    >
      {siteConfig.email}
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
