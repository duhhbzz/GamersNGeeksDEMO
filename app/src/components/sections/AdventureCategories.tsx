import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { adventureCategories } from "@/lib/categories";

export function AdventureCategories() {
  return (
    <section className="bg-background-alt py-12 sm:py-16 lg:py-24" aria-labelledby="adventure-categories-heading">
      <Container>
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">Find your table</p>
            <h2 id="adventure-categories-heading" className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-4xl">Discover Your Next Adventure</h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary sm:mt-3 sm:text-base">From the first roll to the finishing coat, everything you need for the hobbies you love is here.</p>
          </div>
          <Link
            href="/collections/all"
            className="hidden min-h-11 shrink-0 items-center gap-2 rounded-lg px-2 text-sm font-bold uppercase tracking-wider text-text-link transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus lg:inline-flex"
          >
            View All
            <ArrowRight aria-hidden="true" size={20} />
          </Link>
        </div>
        <div className="mt-7 grid min-w-0 gap-3 min-[390px]:grid-cols-2 sm:mt-10 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {adventureCategories.map((category) => <CategoryCard key={category.href} category={category} />)}
        </div>
      </Container>
    </section>
  );
}
