import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.visitLink && project.visitLink !== "#" ? (
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold transition-all hover:shadow-xl hover:shadow-zinc-500/20 active:scale-95"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 font-bold cursor-not-allowed">
                  Live Site Coming Soon
                </div>
              )}
            </div>

            <div className="space-y-6 pt-8 border-t border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  Performance optimized architecture
                </li>
                <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  Fully responsive and mobile-friendly
                </li>
                <li className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  Modern tech stack & clean code
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
