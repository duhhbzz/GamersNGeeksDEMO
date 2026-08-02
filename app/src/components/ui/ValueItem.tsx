import {
  CalendarDays,
  LibraryBig,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { StoreFeature, StoreFeatureIcon } from "@/lib/storeFeatures";

const featureIcons: Record<StoreFeatureIcon, LucideIcon> = {
  community: UsersRound,
  events: CalendarDays,
  selection: LibraryBig,
  knowledge: Lightbulb,
};

type ValueItemProps = {
  feature: StoreFeature;
};

export function ValueItem({ feature }: ValueItemProps) {
  const Icon = featureIcons[feature.icon];

  return (
    <li className="flex h-full min-w-0 gap-3 rounded-lg border border-border bg-background-alt p-3 sm:p-4">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-on-brand sm:size-10">
        <Icon aria-hidden="true" size={20} strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold leading-5 text-text-primary sm:text-base">
          {feature.title}
        </h3>
        <p className="mt-0.5 text-xs leading-5 text-text-secondary sm:text-sm">
          {feature.description}
        </p>
      </div>
    </li>
  );
}
