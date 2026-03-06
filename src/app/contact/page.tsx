"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import ButtonLink from "@/app/components/ui/ButtonLink";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
      turnstileRef.current?.reset();
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="max-w-container mx-auto px-gutter-sm md:px-gutter">
        <div className="relative mt-section mb-section min-h-[280px]">
          <h1 className="text-display-sm md:text-display font-semibold leading-none text-primary">
            Contact
          </h1>
          <p className="text-body mt-4">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary"> Get in touch</span>
          </p>
          <div className="hidden md:block absolute inset-y-0 right-0 w-[100%]">
            <div className="relative w-full h-full">
              <Image
                src="/images/Geo/sphere.png"
                alt=""
                fill
                sizes="50vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-container mx-auto px-gutter-sm md:px-gutter mb-section">
        <div className="max-w-[500px] mx-auto border border-border p-8">
          {status === "sent" ? (
            <div className="py-8 text-center">
              <p className="text-primary text-body mb-2">Message sent.</p>
              <p className="text-secondary text-sm">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-input-bg px-3 py-2 text-body text-primary placeholder:text-muted focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-input-bg px-3 py-2 text-body text-primary placeholder:text-muted focus:outline-none focus:border-accent"
              />
              <textarea
                placeholder="Your message ..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-input-bg px-3 py-2 text-body text-primary placeholder:text-muted focus:outline-none focus:border-accent resize-y"
              />
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={setToken}
                onError={() => setToken(null)}
                onExpire={() => setToken(null)}
              />
              {status === "error" && (
                <p className="text-sm text-accent">Something went wrong. Please try again.</p>
              )}
              <div className="flex justify-center">
                <ButtonLink
                  type="submit"
                  label={status === "sending" ? "Sending..." : "Send"}
                  disabled={status === "sending" || !token}
                />
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
