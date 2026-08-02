import Image from "next/image";
import { MapPinned, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { StoreHours } from "@/components/ui/StoreHours";
import { ValueItem } from "@/components/ui/ValueItem";
import { storeFeatures } from "@/lib/storeFeatures";
import { storeInfo } from "@/lib/storeInfo";

export function WhyGamersNGeeks() {
  return (
    <section
      id="store-information"
      className="bg-background py-10 sm:py-12 lg:py-16"
      aria-labelledby="why-gamers-n-geeks-heading"
    >
      <Container>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <div className="relative isolate min-h-[38rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[30rem]">
            <Image
              src="/images/store/store-retail-floor.png"
              alt="The spacious retail floor and broad game selection inside Gamers N Geeks"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,10,0.2)_0%,rgba(10,12,10,0.9)_42%,rgba(10,12,10,0.98)_100%)] sm:bg-[linear-gradient(90deg,rgba(10,12,10,0.08)_0%,rgba(10,12,10,0.3)_34%,rgba(10,12,10,0.94)_60%,rgba(10,12,10,0.98)_100%)]"
              aria-hidden="true"
            />

            <div className="relative flex min-h-[38rem] items-end p-5 sm:min-h-[34rem] sm:items-center sm:justify-end sm:p-8 lg:min-h-[30rem] lg:p-10">
              <div className="w-full text-white sm:max-w-[58%] lg:max-w-[52%]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand sm:text-sm">
                  Why Gamers N Geeks?
                </p>
                <h2 id="why-gamers-n-geeks-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Your Local Home for Games, Events, and Community
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  Whether you&apos;re discovering a new hobby, building your next army,
                  or looking for a place to play, Gamers N Geeks brings players together under one roof.
                </p>
                <div className="mt-7">
                  <ul className="grid gap-2 min-[390px]:grid-cols-2">
                    {storeFeatures.map((feature) => <ValueItem key={feature.title} feature={feature} />)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid border-t border-border lg:grid-cols-[1.35fr_.65fr]">
            <div className="min-w-0 p-5 sm:p-6 lg:p-5">
              <div className="grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link">Visit the Store</p>
                  <h2 className="mt-1 text-lg font-bold tracking-tight sm:text-xl md:whitespace-nowrap">Your Next Game Night Starts Here</h2>
                  <div className="mt-3 grid gap-3 min-[430px]:grid-cols-[minmax(0,1fr)_auto] min-[430px]:items-center">
                    <address className="flex min-w-0 items-start gap-2.5 not-italic">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-on-brand"><MapPinned aria-hidden="true" size={19} /></span>
                      <div className="min-w-0 text-xs leading-5 text-text-secondary sm:text-sm"><p className="font-bold text-text-primary">{storeInfo.name}</p><p className="whitespace-nowrap">{storeInfo.address.street}</p><p>{storeInfo.address.locality}</p></div>
                    </address>
                    <div className="grid gap-2">
                      <a href={storeInfo.map.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 text-xs font-semibold text-on-brand hover:bg-brand-hover"><MapPinned aria-hidden="true" size={15} />Directions</a>
                      <a href={storeInfo.phone.href} className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-xs font-semibold text-text-primary hover:border-brand"><Phone aria-hidden="true" size={15} />Call Store</a>
                    </div>
                  </div>
                </div>
                <StoreHours hours={storeInfo.hours} />
              </div>
            </div>

            <div className="min-h-52 border-t border-border p-3 lg:min-h-0 lg:border-l lg:border-t-0">
              <iframe
                src={storeInfo.map.embedUrl}
                title={`Map showing the location of ${storeInfo.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-48 w-full rounded-lg border-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
