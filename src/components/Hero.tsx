"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If mobile, allow native mailto app
    if (typeof window !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      e.preventDefault();
      window.location.href = "mailto:edisonobieowuo8@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Start%20a%20Project";
    }
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto pt-40 pb-20 px-6"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-start gap-12">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-900 flex-shrink-0">
          <Image
            src="/avatar.jfif"
            alt="Edison William"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
            sizes="96px"
            // TODO (P9): convert avatar.jfif → avatar.webp for proper optimization;
            // remove unoptimized flag after conversion.
            unoptimized
          />
        </div>

        {/* Headlines + copy */}
        <div className="space-y-8 w-full">
          <div className="space-y-3">
            {/* Consistent role label — no rotating text */}
            <p className="text-sm font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              Full-Stack Developer
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-[72px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05]"
            >
              I build full-stack web products, from the interface to the
              database.
            </h1>
          </div>

          {/* Honest, specific sub-copy */}
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
            Full-stack developer working with React, Next.js, Node.js and
            MongoDB/PostgreSQL. I&apos;ve built and shipped a freelancer management
            platform, a campus marketplace and a restaurant booking app -
            including auth, payments and deployment. Open to freelance projects
            and full-time roles.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold text-sm transition-all hover:shadow-xl hover:shadow-black/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              View work <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=edisonobieowuo8@gmail.com&su=Project%20Inquiry%20%E2%80%94%20Start%20a%20Project"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              <Mail size={16} aria-hidden="true" />
              Start a project
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
