import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MapPin, PackageCheck, ShieldCheck, Star, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { DemoNote } from "@/components/ui/DemoNote";
import { ProductCard } from "@/components/ui/ProductCard";
import { featuredProducts } from "@/lib/products";

export const metadata: Metadata = { title: "Pokémon Mega Lucario ex League Battle Deck | Gamers N Geeks" };
const product = featuredProducts[1];

export default function ProductPage() {
  return (
    <main className="bg-background">
      <Container className="py-8 sm:py-12 lg:py-16">
        <Link href="/collections/trading-card-games" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-link hover:text-text-link-highlight"><ArrowLeft className="size-4" aria-hidden="true" />Back to Trading Card Games</Link>
        <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="product-visual product-visual--cards relative aspect-square overflow-hidden rounded-xl border border-border bg-surface"><Image src={product.imageSrc!} alt={product.visualAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-6 sm:p-10" /></div>
            <div className="mt-3 grid grid-cols-3 gap-3">{["Front packaging","Deck detail","Play-ready contents"].map((label) => <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface"><Image src={product.imageSrc!} alt="" fill sizes="160px" className="object-contain p-3 opacity-80"/><span className="sr-only">{label}</span></div>)}</div>
          </div>
          <section aria-labelledby="product-title">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">{product.category}</p>
            <h1 id="product-title" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary"><span className="flex text-brand" aria-label="Five out of five stars">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" aria-hidden="true"/>)}</span><span>Staff favorite</span></div>
            <p className="mt-5 text-3xl font-bold">$29.99</p>
            <p className="mt-2 inline-flex items-center gap-2 font-semibold text-success"><Check className="size-5" aria-hidden="true" />In stock and ready for pickup</p>
            <p className="mt-6 leading-7 text-text-secondary">Power up your Pokémon TCG strategy with a tournament-ready deck built around Mega Lucario ex. It is a confident next step for players who know the basics and want a focused, competitive list.</p>
            <div className="mt-7 rounded-xl border border-border bg-surface p-5"><div className="flex gap-3"><MapPin className="mt-0.5 size-6 shrink-0 text-brand" aria-hidden="true"/><div><h2 className="font-bold">Free store pickup</h2><p className="mt-1 text-sm leading-6 text-text-secondary">Usually ready during business hours at 5701 Moffett Rd Ste N. Production availability would update from Shopify.</p></div></div></div>
            <button type="button" aria-disabled="true" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand px-6 font-bold text-on-brand opacity-90">Add to cart · Demo</button>
            <p className="mt-2 text-center text-xs text-text-secondary">Visual demonstration only—no purchase will be made.</p>
            <dl className="mt-7 grid grid-cols-2 gap-3 text-sm">{[["Game","Pokémon TCG"],["Product type","League Battle Deck"],["Skill level","Intermediate"],["Players","2"]].map(([term,value])=><div key={term} className="rounded-lg border border-border p-3"><dt className="text-text-secondary">{term}</dt><dd className="mt-1 font-bold">{value}</dd></div>)}</dl>
          </section>
        </div>
      </Container>

      <section className="bg-background-alt py-12 sm:py-16"><Container className="grid gap-6 lg:grid-cols-3"><div className="lg:col-span-2"><h2 className="text-2xl font-bold">What makes this deck battle-ready</h2><p className="mt-4 leading-7 text-text-secondary">A carefully constructed 60-card deck gives players a cohesive strategy out of the box. The included accessories make it easy to sit down at league night and start playing.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{["Complete 60-card deck","Strategy guide and deck box","Damage counters and condition markers","Tournament-legal core components"].map(item=><li key={item} className="flex gap-2"><Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true"/><span>{item}</span></li>)}</ul></div><DemoNote>A reusable product template like this can serve the entire catalog. Shopify would supply product media, variants, pricing, stock, and pickup status.</DemoNote></Container></section>

      <section className="bg-background py-12 sm:py-16"><Container><div className="grid gap-4 md:grid-cols-3">{[[Users,"Community recommended","Our staff can help tune the list and find your next matchup."],[PackageCheck,"Pickup made clear","Local availability gives nearby shoppers a reason to visit."],[ShieldCheck,"Built for trust","Clear specifications reduce uncertainty before purchase."]].map(([Icon,title,copy])=>{const ItemIcon=Icon as typeof Users;return <article key={String(title)} className="rounded-xl border border-border bg-surface p-6"><ItemIcon className="size-7 text-brand" aria-hidden="true"/><h2 className="mt-4 text-lg font-bold">{String(title)}</h2><p className="mt-2 text-sm leading-6 text-text-secondary">{String(copy)}</p></article>})}</div></Container></section>

      <section className="bg-background-alt py-12 sm:py-16"><Container><h2 className="text-3xl font-bold">You may also like</h2><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featuredProducts.filter(item=>item.id!==product.id).slice(0,3).map(item=><ProductCard key={item.id} product={item}/>)}</div></Container></section>
    </main>
  );
}
