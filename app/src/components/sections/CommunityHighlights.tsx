import {
  ArrowUpRight,
} from "lucide-react";
import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import type { IconType } from "react-icons";
import { Container } from "@/components/layout/Container";

const socialLinks: readonly { label: string; href: string; icon: IconType }[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@gamersngeeks", icon: FaTiktok },
  { label: "Instagram", href: "https://www.instagram.com/gamersngeekz/", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/GamersNGeeks", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@GamersNGeeks", icon: FaYoutube },
  { label: "Discord", href: "https://discord.com/invite/jzSx2vMt3P", icon: FaDiscord },
  { label: "Substack", href: "https://substack.com/@gamersngeeks", icon: SiSubstack },
];

export function CommunityHighlights() {
  return (
    <section className="bg-background-alt py-10 sm:py-12 lg:py-16" aria-labelledby="community-highlights-heading">
      <Container>
        <div className="mb-6 sm:flex sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-link sm:text-sm">Stay connected</p>
            <h2 id="community-highlights-heading" className="mt-1.5 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">The community keeps playing online.</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-text-secondary sm:mt-0 sm:text-right lg:whitespace-nowrap">Watch store videos, join the conversation, and never miss an event.</p>
        </div>

        <div className="grid overflow-hidden rounded-xl border border-border bg-surface shadow-sm lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative min-h-64 overflow-hidden border-b border-border bg-[#080a09] lg:min-h-0 lg:border-b-0 lg:border-r">
            <iframe
              src="https://www.youtube.com/embed/u8QEcEkvpJ8?rel=0"
              title="Gamers N Geeks store commercial on YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video h-full min-h-64 w-full border-0"
            />
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-1 lg:p-5">
            <a href="https://discord.com/invite/jzSx2vMt3P" target="_blank" rel="noopener noreferrer" className="group flex min-h-32 flex-col justify-between rounded-xl border border-border bg-background-alt p-5 transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus">
              <span className="flex items-start justify-between gap-3"><span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand text-on-brand"><FaDiscord className="size-5" aria-hidden="true" /></span><ArrowUpRight className="size-5 text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
              <span><strong className="block text-lg text-text-primary">Join the Discord</strong><span className="mt-1 block text-sm leading-5 text-text-secondary">Find games, meet players, and keep up with the community.</span></span>
            </a>
            <a href="https://substack.com/@gamersngeeks" target="_blank" rel="noopener noreferrer" className="group flex min-h-32 flex-col justify-between rounded-xl border border-border bg-background-alt p-5 transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus">
              <span className="flex items-start justify-between gap-3"><span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand text-on-brand"><SiSubstack className="size-5" aria-hidden="true" /></span><ArrowUpRight className="size-5 text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
              <span><strong className="block text-lg text-text-primary">Read the Substack</strong><span className="mt-1 block text-sm leading-5 text-text-secondary">Store news, hobby stories, and updates worth opening.</span></span>
            </a>
          </div>
        </div>

        <nav className="mt-4" aria-label="Gamers N Geeks social media">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm font-semibold text-text-secondary transition-colors hover:border-brand hover:text-text-link-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus">
                  <Icon className="size-4 text-brand" aria-hidden="true" />{label}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
