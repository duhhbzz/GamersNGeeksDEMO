import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EventCard } from "@/components/ui/EventCard";
import { upcomingEvents } from "@/lib/events";

export function UpcomingEvents() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24" aria-labelledby="upcoming-events-heading">
      <Container>
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">Play together</p>
            <h2 id="upcoming-events-heading" className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-4xl">Upcoming Events</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary sm:mt-3 sm:text-base">Pull up a chair, meet your next party, and make game night something to look forward to.</p>
          </div>
          <Link href="/events" className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-semibold text-text-link transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus sm:self-auto">
            View All Events <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>
        <div className="mt-7 grid min-w-0 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </Container>
    </section>
  );
}
