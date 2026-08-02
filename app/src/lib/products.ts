export type ProductVisual =
  | "miniatures"
  | "cards"
  | "role-playing"
  | "paint"
  | "board-games"
  | "models";

export type ProductAvailability = "in-stock" | "low-stock";

export type FeaturedProduct = {
  id: string;
  name: string;
  category: string;
  priceCents: number;
  availability: {
    kind: ProductAvailability;
    label: string;
  };
  visual: ProductVisual;
  visualAlt: string;
  imageSrc?: string;
  href: string;
};

// A production Shopify theme can replace this array with a merchant-selected
// collection such as "Homepage Featured" without changing the section markup.
export const featuredProducts: readonly FeaturedProduct[] = [
  {
    id: "warhammer-introductory-set",
    name: "Warhammer 40K – Start Here – Starter Set",
    category: "Miniatures",
    priceCents: 21250,
    availability: { kind: "in-stock", label: "In Stock" },
    visual: "miniatures",
    visualAlt: "Warhammer 40,000 Start Here starter set box",
    imageSrc: "/images/products/mini-warhammer-starter.jpg",
    href: "/products/warhammer-40k-start-here-starter-set",
  },
  {
    id: "pokemon-booster-box",
    name: "Pokémon – Mega Lucario ex League Battle Deck",
    category: "Trading Card Games",
    priceCents: 2999,
    availability: { kind: "in-stock", label: "In Stock" },
    visual: "cards",
    visualAlt: "Pokémon Mega Lucario ex League Battle Deck box",
    imageSrc: "/images/products/tcg-pokemon-deck.jpg",
    href: "/products/pokemon-mega-lucario-ex-league-battle-deck",
  },
  {
    id: "players-handbook",
    name: "D&D – Welcome to the Hellfire Club",
    category: "Role-Playing Games",
    priceCents: 4999,
    availability: { kind: "in-stock", label: "In Stock" },
    visual: "role-playing",
    visualAlt: "Dungeons & Dragons Welcome to the Hellfire Club game box",
    imageSrc: "/images/products/rpg-DNDhellfire-starter.jpg",
    href: "/products/dnd-welcome-to-the-hellfire-club",
  },
  {
    id: "miniature-paint-set",
    name: "Premium Miniature Paint Set",
    category: "Paint & Hobby",
    priceCents: 3999,
    availability: { kind: "low-stock", label: "Low Stock" },
    visual: "paint",
    visualAlt: "Stylized paint bottles and brush representing a miniature paint set",
    href: "/products/premium-miniature-paint-set",
  },
  {
    id: "strategy-board-game",
    name: "Strategy Board Game",
    category: "Board Games",
    priceCents: 5499,
    availability: { kind: "in-stock", label: "In Stock" },
    visual: "board-games",
    visualAlt: "Stylized dice and game pieces representing a strategy board game",
    href: "/products/strategy-board-game",
  },
  {
    id: "model-kit-starter-set",
    name: "Model Kit Starter Set",
    category: "Models & Gunpla",
    priceCents: 4499,
    availability: { kind: "in-stock", label: "In Stock" },
    visual: "models",
    visualAlt: "Stylized model parts representing a model kit starter set",
    href: "/products/model-kit-starter-set",
  },
] as const;
