import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="bg-background py-8 sm:py-12 lg:py-16">
      <Container>
        <section
          className="relative isolate min-h-[38rem] overflow-hidden rounded-xl border border-border bg-[#151817] shadow-lg sm:min-h-[34rem] lg:min-h-[36rem]"
          aria-labelledby="not-found-heading"
        >
          <Image
            src="/images/404/lost-goblin.png"
            alt="The Gamers N Geeks goblin studies a map beside a broken dungeon path after rolling a one."
            fill
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 94vw, 1280px"
            className="object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,13,0.96)_0%,rgba(12,14,13,0.72)_42%,rgba(12,14,13,0.08)_72%)] sm:bg-[linear-gradient(90deg,rgba(12,14,13,0.98)_0%,rgba(12,14,13,0.9)_37%,rgba(12,14,13,0.16)_67%,rgba(12,14,13,0)_100%)]" />

          <div className="relative z-10 flex min-h-[38rem] max-w-xl flex-col items-start px-5 py-8 text-white sm:min-h-[34rem] sm:justify-center sm:px-10 sm:py-10 lg:min-h-[36rem] lg:px-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              404 · Quest Not Found
            </p>
            <h1
              id="not-found-heading"
              className="mt-3 max-w-lg text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Looks like this adventure went off the map.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">
              Our goblin rolled a natural one and couldn&apos;t find this page. Head
              back home or discover the next event at the store.
            </p>

            <nav className="mt-6 flex w-full max-w-sm flex-col gap-3 min-[390px]:flex-row" aria-label="404 page options">
              <Link
                href="/"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-on-brand transition-colors duration-150 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus active:bg-brand-pressed"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Return Home
              </Link>
              <Link
                href="/events"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/50 bg-black/30 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:border-white hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <CalendarDays aria-hidden="true" className="size-4" />
                View Events
              </Link>
            </nav>
          </div>
        </section>
      </Container>
    </main>
  );
}
