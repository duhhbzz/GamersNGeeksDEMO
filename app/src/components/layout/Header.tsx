import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Container } from "./Container";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const logoDimensions = {
  width: 2195,
  height: 521,
};

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-sm backdrop-blur-sm">
      <Container className="flex min-h-16 items-center justify-between gap-4 lg:min-h-20">
        <Link
          href="/"
          aria-label="Gamers N Geeks home"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focus"
        >
          <span className="block w-44 sm:w-52 lg:w-56">
            <Image
              src="/images/brand/gamers-n-geeks-logo-light.png"
              width={logoDimensions.width}
              height={logoDimensions.height}
              alt="Gamers N Geeks"
              priority
              className="theme-logo-light h-auto w-full"
            />
            <Image
              src="/images/brand/gamers-n-geeks-logo-dark.png"
              width={logoDimensions.width}
              height={logoDimensions.height}
              alt="Gamers N Geeks"
              priority
              className="theme-logo-dark h-auto w-full"
            />
          </span>
        </Link>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Link
            href="/cart"
            aria-label="View cart"
            className="inline-flex size-11 items-center justify-center rounded-lg text-text-secondary transition-colors duration-150 hover:bg-surface-highlight hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
          >
            <ShoppingCart aria-hidden="true" size={22} />
          </Link>
          <MobileNavigation />
        </div>

        <div className="hidden min-w-0 flex-1 items-center gap-6 lg:flex">
          <form action="/search" role="search" className="mx-auto flex w-full max-w-xl">
            <label htmlFor="desktop-site-search" className="sr-only">
              Search products
            </label>
            <input
              id="desktop-site-search"
              name="q"
              type="search"
              placeholder="Search games, cards, miniatures, and more"
              className="min-h-11 min-w-0 flex-1 rounded-l-md border border-r-0 border-border bg-surface px-4 text-text-primary placeholder:text-text-secondary focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-brand-focus"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="inline-flex min-h-11 w-12 items-center justify-center rounded-r-lg bg-brand text-on-brand transition-colors duration-150 hover:bg-brand-hover active:bg-brand-pressed focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
            >
              <Search aria-hidden="true" size={21} />
            </button>
          </form>

          <nav aria-label="Customer navigation" className="flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <Link
              href="/account"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-text-secondary transition-colors duration-150 hover:bg-surface-highlight hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
            >
              <UserRound aria-hidden="true" size={20} />
              Account
            </Link>
            <Link
              href="/cart"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-text-secondary transition-colors duration-150 hover:bg-surface-highlight hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
            >
              <ShoppingCart aria-hidden="true" size={20} />
              Cart
            </Link>
          </nav>
        </div>
      </Container>

      <div className="hidden lg:block">
        <DesktopNavigation />
      </div>
    </header>
  );
}
