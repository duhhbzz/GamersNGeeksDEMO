import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, UsersRound } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { upcomingEvents } from "@/lib/events";

export function Hero() {
  return (
    <section className="bg-background-alt sm:py-6 lg:py-8" aria-labelledby="hero-heading">
      <div className="relative isolate mx-auto min-h-[43rem] w-full max-w-7xl overflow-hidden sm:min-h-[42rem] sm:rounded-xl lg:min-h-[40rem]">
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

        <Container className="relative flex min-h-[43rem] min-w-0 flex-col justify-between gap-8 py-8 sm:min-h-[42rem] sm:py-10 lg:min-h-[40rem] lg:py-12">
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

          <section
            className="rounded-xl border border-white/20 bg-[#101312]/90 p-4 text-white shadow-lg backdrop-blur-md sm:p-5"
            aria-labelledby="hero-events-heading"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 id="hero-events-heading" className="text-lg font-bold uppercase tracking-wide sm:text-xl">
                Upcoming Events
              </h2>
              <Link href="/events" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:text-sm">
                <span className="hidden min-[390px]:inline">View all events</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events#${event.id}`}
                  aria-label={`View details for ${event.title}`}
                  className="group grid min-w-[15.5rem] snap-start grid-cols-[3.5rem_1fr] gap-3 rounded-lg border border-white/15 bg-black/35 p-3 transition-colors hover:border-brand hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:min-w-[17rem] lg:min-w-0"
                >
                  <time dateTime={event.dateTime} className="flex flex-col items-center border-r border-white/20 pr-3 text-center">
                    <span className="text-xs font-bold uppercase text-brand">{event.month}</span>
                    <span className="mt-1 text-2xl font-extrabold leading-none">{event.day}</span>
                  </time>
                  <span className="min-w-0">
                    <span className="block text-[0.6875rem] font-bold uppercase tracking-wide text-brand">{event.eventType}</span>
                    <span className="mt-1 block font-bold leading-tight">{event.title}</span>
                    <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.6875rem] font-medium text-brand">
                      <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" />{event.displayTime}</span>
                      <span className="inline-flex items-center gap-1"><UsersRound className="size-3.5" aria-hidden="true" />{event.status.label}</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </div>
    </section>
  );
}
