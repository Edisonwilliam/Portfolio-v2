// ─── Project data — single source of truth ────────────────────────────────────
// Add a TODO comment anywhere a fact is missing; never invent data.

export interface Project {
  /** URL slug — matches the /projects/[id] route */
  id: string;
  title: string;
  /** One-line positioning phrase shown on the card */
  tagline: string;
  /** 2–3 sentence summary used for meta description and case-study intro */
  summary: string;
  /** Short description used on the project card */
  description: string;
  role: string;
  stack: string[];
  /** What problem does this solve? */
  problem?: string;
  /** How did you solve it? */
  solution?: string;
  /** Notable technical decisions and their rationale */
  keyDecisions?: string[];
  /** Concrete outcome — metrics, users, lessons */
  outcome?: string;
  /** Main card thumbnail */
  image: string;
  /** Additional screenshots for the case-study page */
  screenshots: string[];
  liveUrl: string;
  /** Full GitHub URL or "private" */
  repoUrl: string;
  year: number;
  /** true → "Selected Work" section; false → "More Work" row */
  featured: boolean;
  /** Payment provider, if applicable */
  payment?: string;
}

// ─── Projects ─────────────────────────────────────────────────────────────────
// Order: featured flagship projects first (DevTrack, CampusConnect, TableFlow,
// Forme Living), then non-featured (Artsy, Artlabs).

export const PROJECTS: Project[] = [
  {
    id: "devtrack",
    title: "DevTrack",
    tagline: "Freelancer management, all in one dashboard.",
    summary:
      "Full-stack platform for independent developers to manage clients, track projects, log tasks, generate invoices, and collect payments — without juggling five separate tools.",
    description:
      "Full-stack freelancer management platform for managing clients, projects, tasks, invoices, and online payments from one dashboard.",
    role: "Full-Stack Developer (solo project)",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem:
      "Freelancers typically manage clients in a spreadsheet, track time in one app, invoice in another, and chase payments manually. DevTrack consolidates the core workflow into a single, connected dashboard.",
    solution:
      "Built a full-stack MERN application with separate modules for client management, project tracking, task logging, invoice generation, and online payment collection. Designed a data model that links clients → projects → tasks → invoices for clean reporting.",
    keyDecisions: [
      "MongoDB for flexible document relationships across clients, projects and invoices",
      // TODO: Add 1–2 more key technical decisions you made
    ],
    outcome:
      "TODO: Add a concrete outcome — e.g. number of test users, time-saving metric, or specific features that were hardest to build.",
    image: "/project4.jpg",
    screenshots: ["/project4.jpg"],
    liveUrl: "https://dev-track-olive-five.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/DevTrack",
    year: 2025,
    featured: true,
    payment: "TODO: Confirm payment provider (Paystack / Stripe / Flutterwave)",
  },
  {
    id: "campusconnect",
    title: "CampusConnect",
    tagline: "One platform for student life — marketplace, housing, groups.",
    summary:
      "Full-stack campus platform that lets students buy and sell items, find accommodation, access campus services, join study groups, and make secure payments — all in one place.",
    description:
      "Full-stack campus platform combining a student marketplace, accommodation listings, campus services, study groups, and secure payments.",
    role: "Full-Stack Developer (solo project)",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem:
      "Campus life is scattered: Facebook groups for buying/selling, WhatsApp for housing, word-of-mouth for services. CampusConnect brings these into one verified, payment-enabled platform.",
    solution:
      "Built a multi-module platform with separate product, accommodation, and services listings, all linked to user accounts and a shared payment flow. Implemented role-based access to distinguish buyers, sellers, and service providers.",
    keyDecisions: [
      "Single shared auth system across all modules to reduce sign-up friction",
      // TODO: Add 1–2 more key technical decisions
    ],
    outcome:
      "TODO: Add a concrete outcome — e.g. student adoption, specific features shipped, or what you learned.",
    image: "/project3.jpg",
    screenshots: ["/project3.jpg"],
    liveUrl: "https://campusconnect-omega-snowy.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/CampusConnect",
    year: 2025,
    featured: true,
    payment: "TODO: Confirm payment provider",
  },
  {
    id: "tableflow",
    title: "TableFlow",
    tagline: "Restaurant discovery and table booking, done right.",
    summary:
      "Full-stack restaurant reservation platform. Users browse restaurants, explore menus, and book tables. Built with React, Node.js, Express, and MongoDB, with Google Sign-In for frictionless auth.",
    description:
      "Full-stack restaurant reservation platform. Browse restaurants, explore menus, and book tables — with Google Sign-In and a responsive UI.",
    role: "Full-Stack Developer (solo project)",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    problem:
      "TODO: Describe the specific problem TableFlow was built to solve — e.g. restaurants using phone-only bookings, no central discovery.",
    solution:
      "Built a full-stack booking system with restaurant listings, menu browsing, table availability, and reservation management. Integrated Google Sign-In to reduce sign-up friction for infrequent users.",
    keyDecisions: [
      "Google Sign-In for auth — most users book once, so reducing friction matters more than a custom auth flow",
      // TODO: Add 1–2 more key technical decisions
    ],
    outcome: "TODO: Add a concrete outcome.",
    image: "/project5.jpg",
    screenshots: ["/project5.jpg"],
    liveUrl: "https://tableflowe.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/tableflow",
    year: 2025,
    featured: true,
  },
  {
    id: "forme-living",
    title: "Forme Living",
    tagline: "Luxury furniture e-commerce, end to end.",
    summary:
      "Full-stack furniture e-commerce platform with Google sign-in, secure checkout, and a responsive storefront. Built with React, TypeScript, Node.js, Express, and MongoDB.",
    description:
      "Full-stack luxury furniture e-commerce platform with Google sign-in, secure checkout, and a responsive storefront.",
    role: "Full-Stack Developer (solo project)",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    problem:
      "TODO: Describe the specific problem Forme Living was built to solve.",
    solution:
      "Built a complete e-commerce stack: product catalogue with filtering, cart and checkout flow, Google Sign-In, payment integration, and an admin panel for inventory management.",
    keyDecisions: [
      "TypeScript across both client and server for end-to-end type safety on product and order models",
      "Google Sign-In to reduce checkout abandonment by removing the registration step",
      // TODO: Add 1–2 more key technical decisions
    ],
    outcome: "TODO: Add a concrete outcome.",
    image: "/project6.jpg",
    screenshots: ["/project6.jpg"],
    liveUrl: "https://forme-living.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/Forme-living",
    year: 2025,
    featured: true,
    payment: "TODO: Confirm payment provider",
  },
  {
    id: "artsy",
    title: "Artsy",
    tagline: "Art e-commerce built with Next.js and TypeScript.",
    summary:
      "E-commerce platform for art and creative products. Built with Next.js and TypeScript for fast page loads and a smooth shopping experience.",
    description:
      "E-commerce platform for art and creative products. Built with Next.js and TypeScript.",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript"],
    image: "/project1.jpg",
    screenshots: ["/project1.jpg"],
    liveUrl: "https://artsy-alpha.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/Artsy",
    year: 2024,
    featured: false,
  },
  {
    id: "artlabs",
    title: "Artlabs Landing Page",
    tagline: "Clean, responsive landing page for a creative studio.",
    summary:
      "Marketing landing page for Artlabs. Built with React and Tailwind CSS, focused on visual clarity and fast load times.",
    description:
      "Marketing landing page for Artlabs, built with React and Tailwind CSS.",
    role: "Frontend Developer",
    stack: ["React", "Tailwind CSS"],
    image: "/project2.jpg",
    screenshots: ["/project2.jpg"],
    liveUrl: "https://artlabsproject-d81k.vercel.app/",
    repoUrl: "https://github.com/Edisonwilliam/Artlabsproject",
    year: 2024,
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const MORE_PROJECTS = PROJECTS.filter((p) => !p.featured);
