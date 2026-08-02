import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { storeInfo } from "@/lib/storeInfo";

const logoDimensions = {
  width: 2195,
  height: 521,
};

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Store Info", href: "/#store-information" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/pages/faq" },
] as const;

const shopLinks = [
  { label: "Trading Card Games", href: "/collections/trading-card-games" },
  { label: "Miniatures", href: "/collections/miniatures" },
  { label: "Board Games", href: "/collections/board-games" },
  { label: "Role-Playing Games", href: "/collections/role-playing-games" },
  { label: "Paint & Hobby", href: "/collections/paint-and-hobby" },
  { label: "Models & Gunpla", href: "/collections/models-and-gunpla" },
] as const;

const helpLinks = [
  { label: "Shipping Information", href: "/pages/shipping" },
  { label: "Returns", href: "/pages/returns" },
  { label: "Store Policies", href: "/pages/store-policies" },
  { label: "TCG Singles FAQ", href: "/pages/tcg-singles-faq" },
] as const;

const communityLinks = [
  { label: "Facebook", href: "/community/facebook" },
  { label: "Instagram", href: "/community/instagram" },
  { label: "Discord", href: "/community/discord" },
  { label: "YouTube", href: "/community/youtube" },
  { label: "TikTok", href: "/community/tiktok" },
] as const;

const footerGroups = [
  { title: "Quick Links", links: quickLinks },
  { title: "Shop", links: shopLinks },
  { title: "Help", links: helpLinks },
  { title: "Community", links: communityLinks },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/pages/privacy-policy" },
  { label: "Terms of Service", href: "/pages/terms-of-service" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-alt" aria-label="Site footer">
      <Container className="py-10 sm:py-12 lg:py-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.1fr_2fr_1.15fr] lg:gap-10">
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="Gamers N Geeks home"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus"
            >
              <span className="block w-52 max-w-full">
                <Image
                  src="/images/brand/gamers-n-geeks-logo-light.png"
                  width={logoDimensions.width}
                  height={logoDimensions.height}
                  alt="Gamers N Geeks"
                  className="theme-logo-light h-auto w-full"
                />
                <Image
                  src="/images/brand/gamers-n-geeks-logo-dark.png"
                  width={logoDimensions.width}
                  height={logoDimensions.height}
                  alt="Gamers N Geeks"
                  className="theme-logo-dark h-auto w-full"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-semibold text-text-primary">
              More than a store. It&apos;s a community.
            </p>
            <address className="mt-4 text-sm not-italic leading-6 text-text-secondary">
              <p>{storeInfo.address.street}</p>
              <p>{storeInfo.address.locality}</p>
              <a
                href={storeInfo.phone.href}
                className="rounded-sm text-text-link hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
              >
                {storeInfo.phone.display}
              </a>
            </address>
            <Link
              href="/#store-information"
              className="mt-3 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-text-link hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
            >
              Store hours and directions
            </Link>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4"
          >
            {footerGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h2 className="text-sm font-bold text-text-primary">{group.title}</h2>
                <div className="mt-3">
                  <ul className="space-y-1.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex min-h-8 items-center rounded-sm text-xs leading-5 text-text-secondary transition-colors hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus sm:text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>

          <div className="min-w-0">
            <h2 id="newsletter-heading" className="text-lg font-bold text-text-primary">Join the Community</h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Get store news, event reminders, and hobby inspiration in your inbox.
            </p>
            <div
              role="group"
              aria-labelledby="newsletter-heading"
              aria-describedby="newsletter-demo-note"
              className="mt-4"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="min-h-11 w-full min-w-0 rounded-lg border border-border bg-surface px-3 text-sm text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
              />
              <button
                type="button"
                aria-disabled="true"
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand px-4 text-sm font-semibold text-on-brand opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
              >
                Join the Community
              </button>
            </div>
            <p id="newsletter-demo-note" className="mt-2 text-xs leading-5 text-text-secondary">
              Demo form only. Production signup will connect to the store&apos;s email platform.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-5">
          <div className="rounded-lg border border-border bg-background p-4 text-xs leading-5 text-text-secondary sm:flex sm:items-start sm:justify-between sm:gap-8">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.1em] text-text-primary">Gamers N Geeks Website Concept</p>
              <p className="mt-1">This is a non-production interactive redesign demonstrating a modern Shopify storefront. Images and branding remain property of Gamers N Geeks.</p>
            </div>
            <p className="mt-3 shrink-0 sm:mt-0 sm:text-right">
              Created by<br />
              <a href="mailto:contact@davidtroi.com" className="font-bold text-text-link hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus">David Sweatt</a>
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Gamers N Geeks. Concept presentation only.</p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-8 items-center rounded-sm hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
