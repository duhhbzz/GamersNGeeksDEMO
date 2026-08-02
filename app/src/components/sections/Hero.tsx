import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="bg-background-alt sm:py-6 lg:py-8" aria-labelledby="hero-heading">
      <div className="relative isolate mx-auto min-h-[27rem] w-full max-w-7xl overflow-hidden sm:min-h-[30rem] sm:rounded-xl lg:min-h-[32rem]">
        <Image
          src="/images/store/store-event-hall.png"
          alt="Gamers gathered around tables in the Gamers N Geeks event hall"
          fill
          priority
          quality={90}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-[64%_center] sm:object-[62%_center] lg:object-[60%_center]"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />

        <Container className="relative flex min-h-[27rem] min-w-0 items-end py-8 sm:min-h-[30rem] sm:items-center sm:py-12 lg:min-h-[32rem]">
          <div className="min-w-0 max-w-xl text-white">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand sm:mb-3 sm:text-sm">Your local game store</p>
            <h1 id="hero-heading" className="text-[2rem] font-bold leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
              More Than a Store.<br />We&apos;re a Community.
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
              Join us for events, meet other players, and explore everything you love about gaming.
            </p>
            <div className="mt-5 flex flex-col items-start gap-2.5 min-[400px]:flex-row sm:mt-7 sm:gap-3">
              <Link href="/events" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-4 text-sm font-semibold text-on-brand shadow-md transition duration-150 hover:-translate-y-0.5 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus active:bg-brand-pressed sm:px-5 sm:text-base">
                View Events
              </Link>
              <Link href="/collections/all" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/70 bg-black/30 px-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-150 hover:-translate-y-0.5 hover:border-white hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5 sm:text-base">
                Shop All Products
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
