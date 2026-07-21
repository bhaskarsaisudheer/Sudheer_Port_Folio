import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        404
      </h1>
      <p className="mt-4 text-xl text-muted">Page not found</p>
      <p className="mt-2 text-sm text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button variant="gradient" className="mt-8" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
