import { Hero } from "@/components/Hero";
import { MovingPictures } from "@/components/MovingPictures";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edison William - Full-Stack Developer",
  description:
    "Full-stack developer working with React, Next.js, Node.js, and MongoDB/PostgreSQL. I build and ship complete web products — auth, payments, deployment, and all.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <MovingPictures />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />

      <footer className="max-w-4xl mx-auto w-full px-6 py-12 border-t border-zinc-100 dark:border-zinc-800 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()}  Edison William · Built with Next.js &amp;
          Tailwind CSS ·{" "}
          <a
            href="mailto:edisonobieowuo8@gmail.com"
            className="underline underline-offset-2 hover:no-underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            edisonobieowuo8@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
