import { Clock, NotepadText, Star, Tag } from "lucide-react";

export const NAVIGATION_LINKS = [
  {
    name: "All Notes",
    href: "/",
    icon: NotepadText,
  },
  {
    name: "Recents",
    href: "/recents",
    icon: Clock,
  },
  {
    name: "Favorites",
    href: "/favorites",
    icon: Star,
  },
  {
    name: "Tags",
    href: "/tags",
    icon: Tag,
  },
];

export const NOTES = [
  {
    id: "1",
    title: "Choosing DB: Mongo vs Supabase",
    description:
      "Choosing DB dolor sit amet, consectetur supabase elit, sed do eiusmod tempor ann...",
    tags: ["nextjs", "db_choice"],
  },
  {
    id: "2",
    title: "React Performance Optimization",
    description:
      "Learn best practices for optimizing React application performance with memoization, code splitting, and lazy loading techniques...",
    tags: ["react", "performance"],
  },
  {
    id: "3",
    title: "TypeScript Advanced Patterns",
    description:
      "Explore advanced TypeScript patterns including generics, conditional types, and utility types for robust type-safe applications...",
    tags: ["typescript", "advanced"],
  },
  {
    id: "4",
    title: "Next.js 15 Features",
    description:
      "Discover new features and improvements in Next.js 15 including enhanced server components and optimized routing...",
    tags: ["nextjs", "web-development"],
  },
  {
    id: "5",
    title: "CSS Tailwind Tips",
    description:
      "Master Tailwind CSS with useful tips and tricks for faster and more maintainable styling in your projects...",
    tags: ["css", "tailwind"],
  },
];
