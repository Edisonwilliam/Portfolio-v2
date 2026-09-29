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
  id: "devtrack",
  title: "DevTrack",
  description:
    "A full-stack freelancer management platform for managing clients, projects, tasks, invoices, and online payments from one dashboard.",
  image: "/project3.jpg",
  visitLink: "https://dev-track-olive-five.vercel.app/"
},
{
  id: "campusconnect",
  title: "CampusConnect",
  description:
    "A full-stack campus platform that brings together student marketplaces, accommodation, campus services, study groups, and secure payments in one place.",
  image: "/project4.jpg",
  visitLink: "https://campusconnect-omega-snowy.vercel.app/"
}
];
