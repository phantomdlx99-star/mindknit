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
