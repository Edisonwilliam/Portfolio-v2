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

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "https://linkedin.com/in/edisonwilliam", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "https://x.com/CodeEdison", label: "Twitter", logo: "/twitter.png", external: true },
  { href: "https://github.com/Edisonwilliam", label: "Github", icon: Github, external: true },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-1 p-1.5 bg-white/60 dark:bg-black/80 backdrop-blur-xl rounded-full border border-zinc-200/50 dark:border-zinc-800/80 shadow-2xl shadow-black/10"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isExternal = item.external;

          return (
            <Link
              key={item.href}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "group relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
              )}
            >
              {item.icon ? (
                <item.icon size={18} strokeWidth={2} />
              ) : (
                <div className="relative w-[18px] h-[18px]">
                  <Image 
                    src={item.logo!} 
                    alt={item.label} 
                    fill 
                    className="object-contain dark:invert" 
                  />
                </div>
              )}
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "auto", opacity: 1, marginLeft: 8 }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium"
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
    </div>
  );
}
