import { Hero } from "@/components/Hero";
import { MovingPictures } from "@/components/MovingPictures";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <MovingPictures />
      <About />
      <Projects />
      <TechStack />
      <Experience />

      {/* Basic Footer */}
      <footer className="max-w-4xl mx-auto w-full px-6 py-12 border-t border-zinc-100 dark:border-zinc-800 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Edison William. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
