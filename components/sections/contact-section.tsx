"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Send, Loader2, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      toast.success("Message sent successfully!");
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch {
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Contact" subtitle="Let's work together" />

        <FadeIn>
          <div className="mx-auto max-w-xl">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-white/10 bg-card/60 p-8 backdrop-blur-xl shadow-2xl shadow-primary/5"
            >
              <div className="space-y-5">
                <div>
                  <Input placeholder="Your Name" {...register("name")} />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" {...register("email")} />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                </div>
                <div>
                  <Input placeholder="Subject" {...register("subject")} />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} {...register("message")} />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                </div>
              </div>

              <MagneticButton className="mt-6 block w-full">
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </MagneticButton>
            </motion.form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
