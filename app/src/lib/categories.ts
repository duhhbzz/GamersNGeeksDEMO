export type CategoryAccent =
  | "cards"
  | "miniatures"
  | "board-games"
  | "role-playing"
  | "paint"
  | "models";

export type AdventureCategory = {
  title: string;
  description: string;
  href: string;
  accent: CategoryAccent;
};

export const adventureCategories: readonly AdventureCategory[] = [
  {
    title: "Trading Card Games",
    description: "Decks, boosters, accessories, and more.",
    href: "/collections/trading-card-games",
    accent: "cards",
  },
  {
    title: "Miniatures",
    description: "Build an army and bring it to the table.",
    href: "/collections/miniatures",
    accent: "miniatures",
  },
  {
    title: "Board Games",
    description: "Find a new favorite for game night.",
    href: "/collections/board-games",
    accent: "board-games",
  },
  {
    title: "Role Playing Games",
    description: "Create worlds and tell unforgettable stories.",
    href: "/collections/role-playing-games",
    accent: "role-playing",
  },
  {
    title: "Paint & Hobby",
    description: "Tools and color for your next project.",
    href: "/collections/paint-and-hobby",
    accent: "paint",
  },
  {
    title: "Models & Gunpla",
    description: "Detailed kits made for hands-on builders.",
    href: "/collections/models-and-gunpla",
    accent: "models",
  },
] as const;
