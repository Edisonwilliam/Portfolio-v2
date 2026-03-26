export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  visitLink: string;
}

export const PROJECTS: Project[] = [
  {
    id: "artsy",
    title: "Artsy E-commerce site",
    description: "A modern, high-performance e-commerce platform built with Next.js and TypeScript. Features include a seamless user experience, secure payment integration, and a robust backend system.",
    image: "/project1.jpg",
    visitLink: "https://artsy-alpha.vercel.app/"
  },
  {
    id: "artlabs",
    title: "Artlabs Landing Page",
    description: "A modern, high-performance landing page for Artlabs, built with React and TailwindCSS",
    image: "/project2.jpg",
    visitLink: "https://artlabsproject-d81k.vercel.app/"
  },
  {
    id: "uncutxtra",
    title: "Uncutxtra Award Night",
    description: "Modern, high-performance landing page for UncutXtra Magazine's annual award show...",
    image: "/project3.jpg",
    visitLink: "#"
  },
  {
    id: "emojidb",
    title: "EmojiDB",
    description: "A database, but encrypted with emojis. A lightweight, secure database with a fun twist...",
    image: "/project4.jpg",
    visitLink: "#"
  }
];
