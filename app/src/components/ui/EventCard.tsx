import Link from "next/link";
import { Clock, UsersRound } from "lucide-react";
import type { StoreEvent } from "@/lib/events";

type EventCardProps = { event: StoreEvent };

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex min-w-0 flex-col rounded-xl border border-border bg-surface p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-md sm:h-full sm:p-5">
      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
        <time dateTime={event.dateTime} className="flex w-14 shrink-0 flex-col overflow-hidden rounded-lg border border-border bg-background-alt text-center shadow-sm sm:w-16">
          <span className="bg-brand px-1.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-on-brand sm:px-2 sm:py-1 sm:text-xs">{event.month}</span>
          <span className="px-1.5 py-1.5 text-xl font-bold leading-none text-text-primary sm:px-2 sm:py-2 sm:text-2xl">{event.day}</span>
        </time>
        <div className="min-w-0 pt-0.5">
          <p className="text-xs font-semibold text-text-link sm:text-sm">{event.eventType}</p>
          <h3 className="mt-0.5 text-lg font-bold leading-tight text-text-primary sm:mt-1 sm:text-xl">{event.title}</h3>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-3 text-xs text-text-secondary sm:mt-6 sm:gap-x-5 sm:gap-y-2 sm:pt-4 sm:text-sm">
        <span className="inline-flex items-center gap-1.5"><Clock aria-hidden="true" size={16} />{event.displayTime}</span>
        <span className="inline-flex items-center gap-1.5"><UsersRound aria-hidden="true" size={16} />{event.status.label}</span>
      </div>
      <Link href={`/events#${event.id}`} className="mt-3 inline-flex min-h-11 items-center justify-center self-start rounded-lg border border-border px-3 text-xs font-semibold text-text-primary transition-colors duration-150 hover:border-brand hover:bg-surface-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:mt-5 sm:self-stretch sm:px-4 sm:text-sm" aria-label={`View details for ${event.title}`}>
        Event Details
      </Link>
    </article>
  );
}
