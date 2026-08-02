import Image from "next/image";
import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description, imageSrc, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background-alt py-16 sm:py-20 lg:py-28">
      {imageSrc && <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-30" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-background)_0%,color-mix(in_srgb,var(--color-background)_88%,transparent)_55%,color-mix(in_srgb,var(--color-background)_35%,transparent)_100%)]" />
      <Container className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
