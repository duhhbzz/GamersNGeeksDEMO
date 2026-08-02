import {
  Box,
  Brush,
  Layers3,
  Trophy,
  UsersRound,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  CommunityHighlight,
  CommunityHighlightVisual,
} from "@/lib/communityHighlights";

const highlightIcons: Record<CommunityHighlightVisual, LucideIcon> = {
  tournament: Workflow,
  painting: Brush,
  pokemon: Layers3,
  release: Box,
  "game-day": UsersRound,
  qualifier: Trophy,
};

type CommunityHighlightCardProps = {
  highlight: CommunityHighlight;
};

export function CommunityHighlightCard({
  highlight,
}: CommunityHighlightCardProps) {
  const Icon = highlightIcons[highlight.visual];

  return (
    <article
      className={`community-highlight community-highlight--${highlight.visual} group relative isolate flex aspect-[4/3] min-w-0 overflow-hidden rounded-xl border border-border p-4 shadow-sm`}
    >
      <div
        role="img"
        aria-label={highlight.visualAlt}
        className="absolute inset-0 -z-10"
      />
      <div className="community-highlight__texture absolute inset-0 -z-10" aria-hidden="true" />
      <Icon
        aria-hidden="true"
        className="absolute right-3 top-3 size-16 text-text-primary/15 transition-transform duration-200 group-hover:scale-105 sm:size-20"
        strokeWidth={1.25}
      />
      <div className="mt-auto min-w-0">
        <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-brand sm:text-xs">
          {highlight.label}
        </p>
        <h3 className="mt-1 text-base font-bold leading-5 text-white sm:text-xl sm:leading-6">
          {highlight.title}
        </h3>
      </div>
    </article>
  );
}
