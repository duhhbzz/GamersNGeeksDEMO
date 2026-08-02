import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, PackageCheck, RefreshCw, Store } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { DemoNote } from "@/components/ui/DemoNote";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/lib/products";

export const metadata: Metadata = { title: "Trading Card Games | Gamers N Geeks" };

const collections = [
  { title: "Pokémon", copy: "Decks, boosters, accessories, and weekly league play.", accent: "Catch your next favorite card" },
  { title: "Magic: The Gathering", copy: "Commander staples, sealed product, and Friday night play.", accent: "Build something legendary" },
  { title: "Disney Lorcana", copy: "Starter decks and new sets for collectors and competitors.", accent: "A new story in every pack" },
];

export default function TradingCardGamesPage() {
  return (
    <main>
      <PageHero eyebrow="Trading Card Games" title="Find your next deck. Meet your next rival." description="From first packs to tournament tables, Gamers N Geeks gives Mobile's card-game community a place to collect, compete, and belong." imageSrc="/images/categories/trading-card-games.png" imageAlt="Trading cards arranged for play" />

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <Container>
          <DemoNote>This page demonstrates how a Shopify collection could turn store inventory into a polished shopping experience. Products, pricing, and availability would sync automatically.</DemoNote>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {collections.map((item, index) => (
              <article key={item.title} className="group relative min-h-64 overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--color-brand)_22%,transparent),transparent_52%)]" />
                <p className="relative text-xs font-bold uppercase tracking-[0.15em] text-brand">Featured collection {index + 1}</p>
                <h2 className="relative mt-4 text-2xl font-bold text-text-primary">{item.title}</h2>
                <p className="relative mt-3 leading-7 text-text-secondary">{item.copy}</p>
                <p className="relative mt-8 font-semibold text-text-primary">{item.accent}</p>
                <Link href="#featured-tcg" className="relative mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-text-link hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-brand-focus">Explore the collection <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="featured-tcg" className="bg-background-alt py-12 sm:py-16 lg:py-20" aria-labelledby="tcg-products-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">Featured inventory</p><h2 id="tcg-products-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ready for the display case</h2></div>
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary">Demo inventory · 6 items</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </Container>
      </section>

      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border"><Image src="/images/store/store-event-hall.png" alt="Players gathering in the Gamers N Geeks event hall" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
          <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">More than merchandise</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Organized play turns shoppers into regulars.</h2><p className="mt-4 leading-7 text-text-secondary">A category page can connect the products on the shelf with the community around the table—giving new customers a reason to visit and established players a reason to return.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">{[[CalendarDays,"Weekly events","Promote leagues beside the games players need."],[RefreshCw,"Shopify sync","Keep availability current without editing the page."],[Store,"Local pickup","Turn online discovery into an in-store visit."],[PackageCheck,"Clear availability","Help customers shop with confidence."]].map(([Icon,label,copy]) => { const ItemIcon = Icon as typeof CalendarDays; return <div key={String(label)} className="rounded-lg border border-border bg-surface p-4"><ItemIcon className="size-6 text-brand" aria-hidden="true"/><h3 className="mt-3 font-bold">{String(label)}</h3><p className="mt-1 text-sm leading-6 text-text-secondary">{String(copy)}</p></div>})}</div>
          </div>
        </Container>
      </section>
      <section className="bg-brand py-10 text-on-brand"><Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-extrabold">Bring the collection online.</h2><p className="mt-1 max-w-2xl">One flexible layout can power every category while Shopify handles the inventory behind it.</p></div><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#111] px-6 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111]">See the full vision</Link></Container></section>
    </main>
  );
}
