import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#problem" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-fg-bg2 border-t border-fg-border">
      <div className="max-w-container mx-auto px-8">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-10">
          {/* Logo */}
          <Link
            href="#"
            className="font-orbitron font-bold text-[18px] tracking-[0.04em] text-fg-txt no-underline"
          >
            Flux<span className="text-fg-accent">Gate</span>
          </Link>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-7 list-none">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-orbitron font-medium text-[13px] tracking-[0.03em] text-fg-txt-sub no-underline transition-colors duration-200 hover:text-fg-accent-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="font-bold tracking-widest"
          >
            <Link href="#">Start Free</Link>
          </Button>
        </div>

        {/* shadcn Separator */}
        <Separator />

        {/* Bottom copyright row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="font-inter text-[14px] text-fg-txt-sub">
            © 2024 FluxGate. All rights reserved.
          </p>
          <p className="font-inter text-[13px] text-fg-txt-sub opacity-60">
            API rate-limiting gateway — Client → FluxGate → Server
          </p>
        </div>
      </div>
    </footer>
  );
}
