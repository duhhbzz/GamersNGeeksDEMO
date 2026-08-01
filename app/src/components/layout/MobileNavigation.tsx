"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Search, UserRound, X } from "lucide-react";
import { primaryNavigation } from "@/lib/navigation";
import { IconButton } from "@/components/ui/IconButton";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  function closeDrawer() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusableElements = drawer?.querySelectorAll<HTMLElement>(focusableSelector);
    focusableElements?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }

      if (event.key !== "Tab" || !focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <IconButton
        ref={menuButtonRef}
        icon={Menu}
        label="Open navigation menu"
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      />

      <div
        className={`fixed inset-0 z-50 transition-visibility duration-250 lg:hidden ${isOpen ? "visible" : "invisible"}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={closeDrawer}
          className={`absolute inset-0 bg-background/80 transition-opacity duration-250 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          ref={drawerRef}
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-background-alt shadow-lg transition-transform duration-250 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex min-h-16 items-center justify-between border-b border-border px-4">
            <span className="text-lg font-semibold text-text-primary">Menu</span>
            <IconButton icon={X} label="Close navigation menu" onClick={closeDrawer} />
          </div>

          <div className="border-b border-border p-4">
            <form action="/search" role="search" className="flex gap-2">
              <label htmlFor="mobile-site-search" className="sr-only">
                Search products
              </label>
              <input
                id="mobile-site-search"
                name="q"
                type="search"
                placeholder="Search products"
                className="min-h-11 min-w-0 flex-1 rounded-md border border-border bg-surface px-4 text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
              />
              <IconButton icon={Search} label="Submit search" type="submit" />
            </form>
          </div>

          <nav aria-label="Mobile primary navigation" className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="flex min-h-12 items-center rounded-lg px-3 font-medium text-text-primary transition-colors duration-150 hover:bg-surface-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border p-4">
            <Link
              href="/account"
              onClick={closeDrawer}
              className="flex min-h-12 items-center gap-3 rounded-lg px-3 font-medium text-text-primary transition-colors duration-150 hover:bg-surface-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
            >
              <UserRound aria-hidden="true" size={22} />
              Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
