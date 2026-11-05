"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, Twitter, Clock, MapPin, Copy, Check } from "lucide-react";

const EMAIL = "edisonobieowuo8@gmail.com";
const CV_URL = "/Edison_William_CV.pdf";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Edisonwilliam",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/edisonwilliam",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/CodeEdison",
    label: "@CodeEdison on X",
    icon: Twitter,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Heading */}
        <div className="space-y-4">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Work with me
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
            Have a product to build? I take on a small number of freelance
            projects at a time. Email me or book a 20-minute call — I reply
            within 24 hours.
          </p>
        </div>

        {/* Availability status */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-green-500"
              style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
              aria-hidden="true"
            />
            <span>Available for projects</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} aria-hidden="true" />
            <span>WAT (UTC+1) · Mon–Fri, 9am–6pm</span>
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            <span>Nigeria</span>
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Email CTA — leads directly to sending an email */}
          <a
            href={`mailto:${EMAIL}?subject=Project%20Inquiry%20%E2%80%94%20Let's%20Work%20Together`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold text-sm transition-all hover:shadow-xl hover:shadow-black/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            <Mail size={16} aria-hidden="true" />
            Send me an email
          </a>

          {/* Quick copy email address */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-sm transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-500" aria-hidden="true" />
                <span className="text-green-600 dark:text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} aria-hidden="true" />
                <span>{EMAIL}</span>
              </>
            )}
          </button>

          {/* CV download */}
          <a
            href={CV_URL}
            download="Edison_William_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              <Icon size={16} aria-hidden="true" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
