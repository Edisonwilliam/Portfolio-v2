"use client";

import { motion } from "framer-motion";
import { Home, Twitter, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  {
    href: "https://linkedin.com/in/edisonwilliam",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://x.com/CodeEdison",
    label: "@CodeEdison on X",
    logo: "/twitter.png",
    external: true,
  },
  {
    href: "https://github.com/Edisonwilliam",
    label: "GitHub",
    icon: Github,
    external: true,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 md:top-8 left-0 right-0 z-50 flex justify-center items-center gap-3 px-4">
      {/* Main pill nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Main navigation"
        className="flex items-center gap-0.5 md:gap-1 p-1 bg-white/60 dark:bg-black/80 backdrop-blur-xl rounded-full border border-zinc-200/50 dark:border-zinc-800/80 shadow-2xl shadow-black/10"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const isExternal = item.external;

          return (
            <Link
              key={item.href}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100",
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
              )}
            >
              <div className="flex items-center justify-center">
                {item.icon ? (
                  <item.icon size={18} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                ) : (
                  <div className="relative w-[18px] h-[18px] shrink-0">
                    <Image
                      src={item.logo!}
                      alt=""
                      fill
                      sizes="18px"
                      className="object-contain dark:invert"
                    />
                  </div>
                )}
              </div>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "auto", opacity: 1, marginLeft: 8 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium hidden md:inline-block"
                aria-hidden="true"
              >
                {item.label}
              </motion.span>
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10"
                />
              )}
            </Link>
          );
        })}
      </motion.nav>

      {/* "Hire me" CTA — always visible, anchors to #contact */}
      <motion.a
        href="/#contact"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
        className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold shadow-2xl shadow-black/10 hover:shadow-black/20 transition-all hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      >
        Hire me
      </motion.a>
    </div>
  );
}
