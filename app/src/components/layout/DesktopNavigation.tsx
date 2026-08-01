import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { Container } from "./Container";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="border-t border-border">
      <Container>
        <ul className="flex items-stretch justify-between gap-3">
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center whitespace-nowrap text-xs font-semibold text-text-secondary transition-colors duration-150 hover:text-text-link-highlight focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus xl:text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
