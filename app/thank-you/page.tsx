import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <CheckCircle size={64} className="text-accent" />
      <h1 className="mt-6 font-heading text-4xl font-bold text-white">Thank You!</h1>
      <p className="mt-4 max-w-md text-muted">
        Your message has been received. I&apos;ll get back to you as soon as possible.
      </p>
      <Button variant="gradient" className="mt-8" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
