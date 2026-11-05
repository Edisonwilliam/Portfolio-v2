import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BASE_URL } from "@/app/layout";

type Props = {
  params: Promise<{ id: string }>;
};

// ─── Static generation ─────────────────────────────────────────────────────────
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

// ─── Per-page metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return { title: "Project not found" };
  }

  const pageUrl = `${BASE_URL}/projects/${project.id}`;

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${project.title} | Edison William`,
      description: project.summary,
      url: pageUrl,
      images: [
        {
          url: project.image,
          alt: `${project.title} screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Edison William`,
      description: project.summary,
      images: [project.image],
    },
  };
}

// ─── Stack tag ─────────────────────────────────────────────────────────────────
function StackTag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
      {label}
    </span>
  );
}

// ─── Case-study page ───────────────────────────────────────────────────────────
export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isPrivate = project.repoUrl === "private";

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left column: content ── */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
                {project.year} · {project.role}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Summary */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.summary}
            </p>

            {/* Stack */}
            <div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                {project.stack.map((tech) => (
                  <StackTag key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Problem */}
            {project.problem && (
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Problem
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Solution
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Key decisions */}
            {project.keyDecisions && project.keyDecisions.length > 0 && (
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Key Decisions
                </h2>
                <ul className="space-y-3">
                  {project.keyDecisions.map((decision, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {decision}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {project.outcome && (
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Outcome
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}

            {/* Payment */}
            {project.payment && (
              <div>
                <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Payments
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {project.payment}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold transition-all hover:shadow-xl hover:shadow-zinc-500/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Visit live site <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}

              {!isPrivate ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold transition-all hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <Github size={16} aria-hidden="true" /> View on GitHub
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-900 text-zinc-400 dark:text-zinc-600 font-bold cursor-default select-none">
                  <Lock size={16} aria-hidden="true" /> Private repo — walkthrough on request
                </div>
              )}
            </div>
          </div>

          {/* ── Right column: screenshot ── */}
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
