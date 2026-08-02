export type StoreFeatureIcon =
  | "community"
  | "events"
  | "selection"
  | "knowledge";

export type StoreFeature = {
  title: string;
  description: string;
  icon: StoreFeatureIcon;
};

export const storeFeatures: readonly StoreFeature[] = [
  {
    title: "Local Community",
    description: "A welcoming community for every kind of player.",
    icon: "community",
  },
  {
    title: "Weekly Events",
    description: "Tournaments, leagues, and casual games every week.",
    icon: "events",
  },
  {
    title: "Huge Selection",
    description: "Games, supplies, and essentials for every hobby.",
    icon: "selection",
  },
  {
    title: "Expert Knowledge",
    description: "Friendly staff with knowledge you can count on.",
    icon: "knowledge",
  },
] as const;
