export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/collections/trading-card-games", label: "Trading Card Games" },
  { href: "/collections/miniatures", label: "Miniatures" },
  { href: "/collections/board-games", label: "Board Games" },
  { href: "/collections/role-playing-games", label: "Role-Playing Games" },
  { href: "/collections/paint-and-hobby", label: "Paint & Hobby" },
  { href: "/collections/models-and-gunpla", label: "Models & Gunpla" },
  { href: "/collections/collectibles", label: "Collectibles" },
  { href: "/events", label: "Events" },
  { href: "/collections/tcg-singles", label: "TCG Singles" },
];
