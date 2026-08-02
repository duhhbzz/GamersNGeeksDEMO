import { MapPinned, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { StoreHours } from "@/components/ui/StoreHours";
import { storeInfo } from "@/lib/storeInfo";

export function StoreInformation() {
  return (
    <section
      id="store-information"
      className="bg-background-alt py-10 sm:py-12 lg:py-16"
      aria-labelledby="store-information-heading"
    >
      <Container>
        <div className="grid min-w-0 overflow-hidden rounded-xl border border-border bg-surface shadow-sm lg:grid-cols-2">
          <div className="min-w-0 p-5 sm:p-6 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">
              Visit the Store
            </p>
            <h2
              id="store-information-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-3xl"
            >
              Your Next Game Night Starts Here
            </h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary sm:mt-3 sm:text-base">
              Browse the shelves, meet local players, and join one of the largest
              tabletop gaming communities in the area.
            </p>

            <div className="mt-4 grid min-w-0 gap-3 rounded-xl border border-border bg-background-alt p-3 min-[390px]:grid-cols-[minmax(0,1fr)_9.5rem] sm:mt-5">
              <address className="flex min-w-0 items-start gap-3 not-italic">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-on-brand">
                  <MapPinned aria-hidden="true" size={21} />
                </span>
                <div className="min-w-0 text-sm leading-6 text-text-secondary">
                  <p className="font-bold text-text-primary">{storeInfo.name}</p>
                  <p>{storeInfo.address.street}</p>
                  <p>{storeInfo.address.locality}</p>
                </div>
              </address>

              <div className="grid min-w-0 gap-2">
                <a
                  href={storeInfo.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-lg bg-brand px-3 text-xs font-semibold text-on-brand transition-colors duration-150 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus active:bg-brand-pressed sm:text-sm"
                >
                  <MapPinned aria-hidden="true" size={17} />
                  Get Directions
                </a>
                <a
                  href={storeInfo.phone.href}
                  className="inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-3 text-xs font-semibold text-text-primary transition-colors duration-150 hover:border-brand hover:bg-surface-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:text-sm"
                >
                  <Phone aria-hidden="true" size={17} />
                  Call Store
                </a>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <StoreHours hours={storeInfo.hours} />
            </div>
          </div>

          <div className="min-w-0 border-t border-border p-3 lg:border-t-0 lg:border-l">
            <div className="aspect-[4/3] min-h-64 w-full min-w-0 overflow-hidden rounded-lg border border-border bg-background-alt lg:h-full lg:min-h-[26rem] lg:aspect-auto">
              <iframe
                src={storeInfo.map.embedUrl}
                title={`Map showing the location of ${storeInfo.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
