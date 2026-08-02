import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Boxes,
  Brush,
  Dices,
  Layers3,
  Swords,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FeaturedProduct, ProductVisual } from "@/lib/products";

const productIcons: Record<ProductVisual, LucideIcon> = {
  miniatures: Swords,
  cards: Layers3,
  "role-playing": BookOpen,
  paint: Brush,
  "board-games": Dices,
  models: Boxes,
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type ProductCardProps = {
  product: FeaturedProduct;
  variant?: "grid" | "compact";
};

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const Icon = productIcons[product.visual];

  if (variant === "compact") {
    return (
      <Link
        href={product.href}
        aria-label={`View ${product.name}`}
        className="grid min-w-0 grid-cols-[4.75rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-border bg-background-alt shadow-sm transition-colors duration-150 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
      >
        <div
          role="img"
          aria-label={product.visualAlt}
          className={`product-visual product-visual--${product.visual} relative flex min-h-24 items-center justify-center overflow-hidden border-r border-border`}
        >
          {product.imageSrc ? (
            <Image
              src={product.imageSrc}
              alt=""
              fill
              sizes="76px"
              className="object-contain p-1"
            />
          ) : (
            <>
              <div className="product-visual__texture absolute inset-0" aria-hidden="true" />
              <Icon aria-hidden="true" className="relative size-10 text-brand" strokeWidth={1.25} />
            </>
          )}
        </div>
        <div className="flex min-w-0 flex-col justify-center p-2.5">
          <p className="text-[0.6875rem] font-semibold text-text-link">{product.category}</p>
          <h3 className="mt-0.5 text-sm font-bold leading-5 text-text-primary">
            {product.name}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-base font-bold text-text-primary">
              {priceFormatter.format(product.priceCents / 100)}
            </p>
            <p
              className={
                product.availability.kind === "low-stock"
                  ? "text-[0.6875rem] font-semibold text-warning"
                  : "text-[0.6875rem] font-semibold text-success"
              }
            >
              {product.availability.label}
            </p>
          </div>
          <span className="mt-1 inline-flex text-xs font-semibold text-text-link">
            View Product
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-md">
      <div
        role="img"
        aria-label={product.visualAlt}
        className={`product-visual product-visual--${product.visual} relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border`}
      >
        {product.imageSrc ? (
          <Image src={product.imageSrc} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-3" />
        ) : (
          <>
            <div className="product-visual__texture absolute inset-0" aria-hidden="true" />
            <Icon aria-hidden="true" className="relative size-16 text-brand sm:size-20" strokeWidth={1.25} />
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold text-text-link">{product.category}</p>
        <h3 className="mt-1 text-base font-bold leading-5 text-text-primary sm:text-lg sm:leading-6">
          {product.name}
        </h3>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-lg font-bold text-text-primary">
            {priceFormatter.format(product.priceCents / 100)}
          </p>
          <p
            className={
              product.availability.kind === "low-stock"
                ? "text-xs font-semibold text-warning"
                : "text-xs font-semibold text-success"
            }
          >
            {product.availability.label}
          </p>
        </div>
        <Link
          href={product.href}
          aria-label={`View ${product.name}`}
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-3 text-sm font-semibold text-text-primary transition-colors duration-150 hover:border-brand hover:bg-surface-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
