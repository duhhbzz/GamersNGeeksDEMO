import { MapPin, Phone } from "lucide-react";
import { Container } from "./Container";

const singlesUrl = "https://gamersngeeks.tcgplayerpro.com/";

export function AnnouncementBar() {
  return (
    <>
      <aside className="border-b border-border bg-background-alt" aria-label="Website concept notice">
        <Container className="flex min-h-8 flex-wrap items-center justify-center gap-x-2 py-1 text-center text-[0.625rem] font-semibold uppercase tracking-[0.11em] text-text-secondary sm:justify-between sm:text-[0.6875rem]">
          <p>
            Gamers N Geeks Website Concept <span aria-hidden="true">·</span>{" "}
            Designed & Developed by{" "}
            <a href="mailto:contact@davidtroi.com" className="rounded-sm font-bold text-text-link hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus">
              David Sweatt
            </a>
          </p>
          <p className="hidden text-text-secondary lg:block">Interactive redesign · Not a live storefront</p>
        </Container>
      </aside>

      <aside className="bg-brand text-on-brand" aria-label="Store announcement">
        <Container className="flex min-w-0 flex-col items-center justify-center gap-0.5 py-1.5 text-center text-[0.6875rem] font-semibold leading-4 sm:py-2 sm:text-xs lg:min-h-10 lg:flex-row lg:justify-between lg:gap-6 lg:text-sm">
          <p className="max-w-full uppercase tracking-wide">
            Free shipping on{" "}
            <a
              href={singlesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm underline decoration-2 underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
            >
              TCG Singles
            </a>{" "}
            orders over $20
          </p>
          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-0 font-medium sm:gap-x-4">
            <span className="inline-flex min-w-0 items-center gap-1">
              <MapPin className="hidden shrink-0 sm:block" aria-hidden="true" size={14} />
              5701 Moffett Rd Ste N, Mobile, Alabama
            </span>
            <a
              href="tel:+12517256640"
              className="inline-flex shrink-0 items-center gap-1 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
            >
              <Phone className="hidden sm:block" aria-hidden="true" size={14} />
              251-725-6640
            </a>
          </div>
        </Container>
      </aside>
    </>
  );
}
