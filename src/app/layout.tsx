import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const BASE_URL = "https://edisonportfoli.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Edison William — Full-Stack Developer",
    template: "%s | Edison William",
  },
  description:
    "Full-stack developer working with React, Next.js, Node.js, and MongoDB/PostgreSQL. I build and ship complete web products — auth, payments, deployment, and all.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Nigerian developer",
    "freelance developer",
  ],
  authors: [{ name: "Edison William", url: BASE_URL }],
  creator: "Edison William",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Edison William",
    title: "Edison William — Full-Stack Developer",
    description:
      "Full-stack developer working with React, Next.js, Node.js and MongoDB/PostgreSQL. I build and ship complete web products.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Edison William — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CodeEdison",
    creator: "@CodeEdison",
    title: "Edison William — Full-Stack Developer",
    description: "Full-stack developer who ships complete, working products.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// JSON-LD Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edison William",
  url: BASE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer working with React, Next.js, Node.js and MongoDB/PostgreSQL.",
  email: "edisonobieowuo8@gmail.com",
  nationality: "Nigerian",
  sameAs: [
    "https://github.com/Edisonwilliam",
    "https://linkedin.com/in/edisonwilliam",
    "https://x.com/CodeEdison",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "NestJS",
    "Docker",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#030303] selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-500">
        {/* Skip-to-content link — visible on keyboard focus only */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-zinc-900 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
