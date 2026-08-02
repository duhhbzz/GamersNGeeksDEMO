import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CommunityHighlightCard } from "@/components/ui/CommunityHighlightCard";
import { communityHighlights } from "@/lib/communityHighlights";

export function CommunityHighlights() {
  return (
    <section
      className="bg-background py-12 sm:py-16 lg:py-24"
      aria-labelledby="community-highlights-heading"
    >
      <Container>
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">
              From the Community
            </p>
            <h2
              id="community-highlights-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-4xl"
            >
              Community Highlights
            </h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary sm:mt-3 sm:text-base">
              Recent tournaments, releases, painting events, and moments from
              around the store.
            </p>
          </div>
          <Link
            href="/community/instagram"
            className="hidden min-h-11 shrink-0 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-text-link transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:inline-flex"
          >
            Follow on Instagram
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>

        <div className="mt-7 grid min-w-0 gap-3 min-[390px]:grid-cols-2 sm:mt-10 sm:gap-5 lg:grid-cols-3">
          {communityHighlights.map((highlight) => (
            <CommunityHighlightCard key={highlight.id} highlight={highlight} />
          ))}
        </div>

        <Link
          href="/community/instagram"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-text-link transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus sm:hidden"
        >
          Follow on Instagram
          <ArrowRight aria-hidden="true" size={19} />
        </Link>
      </Container>
    </section>
  );
}
