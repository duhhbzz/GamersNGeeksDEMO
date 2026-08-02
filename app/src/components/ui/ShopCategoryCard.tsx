import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryIcons } from "@/components/ui/CategoryCard";
import type { AdventureCategory, CategoryAccent } from "@/lib/categories";

const categoryImages: Record<CategoryAccent, string> = {
  cards: "/images/categories/trading-card-games.png",
  miniatures: "/images/categories/miniatures.png",
  "board-games": "/images/categories/board-games.png",
  "role-playing": "/images/categories/role-playing-games.png",
  paint: "/images/categories/paint-and-hobby.png",
  models: "/images/categories/models-and-gunpla.png",
};

type ShopCategoryCardProps = {
  category: AdventureCategory;
};

export function ShopCategoryCard({ category }: ShopCategoryCardProps) {
  const Icon = categoryIcons[category.accent];

  return (
    <Link
      href={category.href}
      className={`category-card category-card--${category.accent} group relative isolate flex aspect-[4/3] min-w-0 flex-col overflow-hidden rounded-xl border border-border p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus min-[390px]:aspect-[3/4] xl:h-full xl:aspect-auto`}
    >
      <Image
        src={categoryImages[category.accent]}
        alt=""
        fill
        sizes="(max-width: 389px) calc(100vw - 2rem), (max-width: 639px) 50vw, (max-width: 1279px) 33vw, 150px"
        className="-z-10 object-cover transition-transform duration-200 group-hover:scale-[1.02]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/10 to-black/20"
        aria-hidden="true"
      />
      <span className="inline-flex size-9 shrink-0 items-center justify-center self-start rounded-lg border border-border bg-background/70 text-brand backdrop-blur-sm">
        <Icon aria-hidden="true" size={19} />
      </span>
      <div className="mt-auto min-w-0 pr-10">
        <h3 className="min-w-0 text-left text-sm font-bold leading-5 text-text-primary xl:text-base">
          {category.title}
        </h3>
      </div>
      <span className="absolute right-3 bottom-3 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand transition-transform duration-150 group-hover:translate-x-0.5">
        <ArrowRight aria-hidden="true" size={17} />
      </span>
    </Link>
  );
}
