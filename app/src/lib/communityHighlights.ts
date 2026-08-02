export type CommunityHighlightVisual =
  | "tournament"
  | "painting"
  | "pokemon"
  | "release"
  | "game-day"
  | "qualifier";

export type CommunityHighlight = {
  id: string;
  title: string;
  label: string;
  visual: CommunityHighlightVisual;
  visualAlt: string;
};

export const communityHighlights: readonly CommunityHighlight[] = [
  {
    id: "weekly-tournament",
    title: "Weekly Tournament Night",
    label: "Organized Play",
    visual: "tournament",
    visualAlt: "Stylized tournament bracket representing weekly organized play",
  },
  {
    id: "painting-competition",
    title: "Painting Competition",
    label: "Hobby Community",
    visual: "painting",
    visualAlt: "Stylized paintbrush representing a community miniature painting competition",
  },
  {
    id: "pokemon-event",
    title: "Pokémon Event",
    label: "League Play",
    visual: "pokemon",
    visualAlt: "Stylized trading cards representing a community Pokémon event",
  },
  {
    id: "new-release",
    title: "New Product Release",
    label: "Release Day",
    visual: "release",
    visualAlt: "Stylized open box representing a new game release celebration",
  },
  {
    id: "community-game-day",
    title: "Community Game Day",
    label: "Around the Store",
    visual: "game-day",
    visualAlt: "Stylized group of players representing a community game day",
  },
  {
    id: "regional-qualifier",
    title: "Regional Qualifier",
    label: "Competitive Play",
    visual: "qualifier",
    visualAlt: "Stylized trophy representing a regional tournament qualifier",
  },
] as const;
