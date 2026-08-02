import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { DemoNote } from "@/components/ui/DemoNote";
import { PageHero } from "@/components/ui/PageHero";
import { upcomingEvents } from "@/lib/events";

export const metadata: Metadata = { title: "Events | Gamers N Geeks" };
const pastEvents = ["Mobile Regional Qualifier", "Summer Paint & Take", "Midnight Set Release"];

export default function EventsPage() {
  const featured = upcomingEvents[0];
  return <main>
    <PageHero eyebrow="Play together" title="There is always a seat at the table." description="Weekly leagues, welcoming hobby nights, and competitive tournaments make Gamers N Geeks one of Mobile's favorite places to play." imageSrc="/images/store/store-event-hall.png" imageAlt="Gamers gathering for organized play in the event hall" />
    <section className="bg-background py-12 sm:py-16"><Container><DemoNote>This calendar uses demonstration content. In production, staff could publish or update upcoming events once and have this page refresh automatically.</DemoNote>
      <article className="mt-10 grid overflow-hidden rounded-xl border border-border bg-surface shadow-lg lg:grid-cols-[1.15fr_1fr]">
        <div className="relative min-h-72"><Image src="/images/store/store-event-hall.png" alt="Tables ready for a community gaming event" fill sizes="(max-width:1024px) 100vw,55vw" className="object-cover"/><span className="absolute left-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-on-brand">Featured event</span></div>
        <div className="p-6 sm:p-8"><p className="text-sm font-bold text-brand">{featured.eventType}</p><h2 className="mt-2 text-3xl font-extrabold">{featured.title}</h2><div className="mt-5 space-y-3 text-text-secondary"><p className="flex gap-3"><CalendarDays className="size-5 text-brand" aria-hidden="true"/><time dateTime={featured.dateTime}>{featured.month} {featured.day}, 2026</time></p><p className="flex gap-3"><Clock className="size-5 text-brand" aria-hidden="true"/>{featured.displayTime}</p><p className="flex gap-3"><Users className="size-5 text-brand" aria-hidden="true"/>{featured.status.label}</p><p className="flex gap-3"><MapPin className="size-5 text-brand" aria-hidden="true"/>Gamers N Geeks event hall</p></div><Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-brand px-6 font-bold text-on-brand">Plan your visit</Link></div>
      </article>
    </Container></section>
    <section className="bg-background-alt py-12 sm:py-16"><Container><div><p className="text-sm font-bold uppercase tracking-[.16em] text-brand">August 2026</p><h2 className="mt-2 text-3xl font-bold">Upcoming tournaments & game nights</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2">{upcomingEvents.map(event=><article key={event.id} className="grid grid-cols-[5rem_1fr] overflow-hidden rounded-xl border border-border bg-surface"><time dateTime={event.dateTime} className="flex flex-col items-center justify-center bg-background p-4"><span className="text-xs font-bold uppercase text-brand">{event.month}</span><span className="text-3xl font-extrabold">{event.day}</span></time><div className="p-5"><p className="text-xs font-bold uppercase tracking-wide text-text-link">{event.eventType}</p><h3 className="mt-1 text-xl font-bold">{event.title}</h3><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary"><span className="flex items-center gap-1.5"><Clock className="size-4" aria-hidden="true"/>{event.displayTime}</span><span className="flex items-center gap-1.5"><Users className="size-4" aria-hidden="true"/>{event.status.label}</span></div></div></article>)}</div></Container></section>
    <section className="bg-background py-12 sm:py-16"><Container><h2 className="text-3xl font-bold">Recent community highlights</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{pastEvents.map((title,index)=><article key={title} className="rounded-xl border border-border bg-surface p-6"><Trophy className="size-8 text-brand" aria-hidden="true"/><p className="mt-5 text-xs font-bold uppercase tracking-wide text-text-secondary">Past event · {32+index*11} players</p><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">A full room, memorable matches, and another reason for the community to come back.</p></article>)}</div></Container></section>
    <section className="bg-brand py-10 text-on-brand"><Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-extrabold">Your next game starts here.</h2><p className="mt-1">Bring a friend, meet your community, and claim a seat at the table.</p></div><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#111] px-6 font-bold text-white">Visit the store</Link></Container></section>
  </main>;
}
