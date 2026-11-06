"use client";

import { FormEvent, useState } from "react";
import { Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

const links = [
  { href: `mailto:${site.email}`, label: "Email", value: site.email, icon: Mail },
  { href: site.linkedin, label: "LinkedIn", value: "Arya Sekhar Roy", icon: LinkedInIcon },
  { href: site.github, label: "GitHub", value: "Arya-s-roy", icon: GitHubIcon },
  { href: site.resumeUrl, label: "Resume", value: "Download PDF", icon: Download, download: true },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string; mailto?: string };
      if (!response.ok) throw new Error(payload.error || "Unable to send");
      if (payload.mailto) window.location.href = payload.mailto;
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="relative z-10 px-6 pb-28 pt-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/35 p-8 backdrop-blur-sm md:p-14">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">Contact</p>
        <h2 data-reveal className="display mt-5 max-w-4xl text-4xl text-white md:text-6xl">
          {site.contactHeading}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={"download" in link && link.download ? true : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 transition-transform hover:translate-x-1.5"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm text-white">{link.value}</span>
                </span>
                <link.icon size={16} className="text-accent" />
              </a>
            ))}
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block text-xs uppercase tracking-[0.2em] text-white/40">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.2em] text-white/40">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.2em] text-white/40">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-accent hover:text-white disabled:opacity-60"
            >
              {status === "sending" ? "Opening mail…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-accent-2">Your mail client should open with the message ready.</p>
            )}
            {status === "error" && <p className="text-sm text-red-400">{error}</p>}
          </form>
        </div>
      </div>
      <p className="mt-10 text-center text-xs tracking-[0.18em] text-white/30">
        © 2026 {site.name}
      </p>
    </section>
  );
}
