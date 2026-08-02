import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { ShopCategoryCard } from "@/components/ui/ShopCategoryCard";
import { adventureCategories } from "@/lib/categories";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section
      className="bg-background py-12 sm:py-16 lg:py-24"
      aria-labelledby="featured-products-heading"
    >
      <Container>
        <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(18rem,1fr)]">
          <div className="min-w-0 rounded-xl border border-border bg-surface p-4 shadow-sm sm:p-6 lg:flex lg:flex-col">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">
                From the Shop
              </p>
              <h2
                id="featured-products-heading"
                className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-3xl"
              >
                Shop by Category
              </h2>
            </div>
            <div className="mt-5 grid min-w-0 gap-3 min-[390px]:grid-cols-2 sm:grid-cols-3 lg:flex-1 xl:grid-cols-6">
              {adventureCategories.map((category) => (
                <ShopCategoryCard key={category.href} category={category} />
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div className="flex min-w-0 items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-text-primary">Featured Products</h2>
              <Link
                href="/collections/all"
                className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-sm text-xs font-semibold text-text-link transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
              >
                View All
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <div className="mt-3 grid min-w-0 gap-3">
              {featuredProducts.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
