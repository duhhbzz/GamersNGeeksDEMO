import Link from "next/link";
import { ArrowRight, ArrowUpRight, Brush, Boxes, Dices, Layers3, Shield, Swords } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AdventureCategory, CategoryAccent } from "@/lib/categories";

export const categoryIcons: Record<CategoryAccent, LucideIcon> = {
  cards: Layers3,
  miniatures: Swords,
  "board-games": Dices,
  "role-playing": Shield,
  paint: Brush,
  models: Boxes,
};

type CategoryCardProps = { category: AdventureCategory };

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = categoryIcons[category.accent];

  return (
    <Link href={category.href} className={`category-card category-card--${category.accent} group relative isolate flex min-h-52 min-w-0 overflow-hidden rounded-xl border border-border p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus sm:min-h-56 sm:p-5 lg:min-h-64 lg:p-6 xl:min-h-80 xl:p-4`}>
      <div className="category-card__texture absolute inset-0 -z-10" aria-hidden="true" />
      <Icon aria-hidden="true" className="absolute -right-3 -top-2 size-24 rotate-6 text-text-primary/10 transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105 sm:size-28 lg:-right-5 lg:-top-4 lg:size-40 xl:-right-8 xl:size-36" strokeWidth={1.25} />
      <div className="mt-auto min-w-0">
        <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-white/20 bg-black/20 text-brand backdrop-blur-sm sm:mb-4 sm:size-10 lg:mb-5 lg:size-11">
          <Icon aria-hidden="true" size={21} />
        </span>
        <div className="flex min-w-0 items-end justify-between gap-2">
          <h3 className="min-w-0 text-lg font-bold leading-tight text-text-primary sm:text-xl lg:text-2xl xl:text-lg">{category.title}</h3>
          <span className="hidden size-9 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand transition-transform duration-150 group-hover:translate-x-0.5 xl:inline-flex">
            <ArrowRight aria-hidden="true" size={19} />
          </span>
        </div>
        <p className="mt-1.5 max-w-xs text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6 xl:hidden">{category.description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand sm:text-sm xl:hidden">Explore <span className="hidden lg:inline">category</span><ArrowUpRight aria-hidden="true" size={16} /></span>
      </div>
    </Link>
  );
}
