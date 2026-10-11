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
  image: "/project4.jpg",
  visitLink: "https://dev-track-olive-five.vercel.app/"
},
{
  id: "campusconnect",
  title: "CampusConnect",
  description:
    "A full-stack campus platform that brings together student marketplaces, accommodation, campus services, study groups, and secure payments in one place.",
  image: "/project3.jpg",
  visitLink: "https://campusconnect-omega-snowy.vercel.app/"
}
{
  id: "tableflow",
  title: "Tableflow",
  description:
    "TableFlow is a full-stack restaurant reservation platform that enables users to discover restaurants, explore interactive menu experiences, and book tables seamlessly. Built with React, Node.js, Express, and MongoDB, it features secure authentication, Google Sign-In, and a responsive, premium user interface.",
  image: "/project5.jpg",
  visitLink: "https://tableflowe.vercel.app/"
}
];
