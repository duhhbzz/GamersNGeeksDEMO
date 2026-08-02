import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ValueItem } from "@/components/ui/ValueItem";
import { storeFeatures } from "@/lib/storeFeatures";

export function WhyGamersNGeeks() {
  return (
    <section
      className="bg-background py-12 sm:py-16 lg:py-24"
      aria-labelledby="why-gamers-n-geeks-heading"
    >
      <Container>
        <div className="grid min-w-0 overflow-hidden rounded-xl border border-border bg-surface shadow-sm lg:grid-cols-2">
          <div className="relative aspect-[16/9] min-w-0 overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[34rem] lg:border-r lg:border-b-0">
            <Image
              src="/images/store/store-retail-floor.png"
              alt="The spacious retail floor and broad game selection inside Gamers N Geeks"
              fill
              sizes="(max-width: 1023px) calc(100vw - 2rem), 600px"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0 p-5 sm:p-8 lg:flex lg:flex-col lg:justify-center lg:p-10 xl:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">
              Why Gamers N Geeks?
            </p>
            <h2
              id="why-gamers-n-geeks-heading"
              className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:mt-2 sm:text-4xl"
            >
              Your Local Home for Games, Events, and Community
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary sm:mt-4 sm:text-base sm:leading-7">
              Whether you&apos;re discovering a new hobby, building your next army,
              or looking for a place to play, Gamers N Geeks brings players
              together under one roof.
            </p>

            <div className="mt-6 sm:mt-8">
              <ul className="grid min-w-0 gap-3 min-[390px]:auto-rows-fr min-[390px]:grid-cols-2">
                {storeFeatures.map((feature) => (
                  <ValueItem key={feature.title} feature={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
