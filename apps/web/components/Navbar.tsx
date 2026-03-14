"use client";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@components/ui/navigation-menu";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#problem" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-fg-bg border-b border-fg-border">
      <div className="max-w-container mx-auto px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="font-orbitron font-bold text-[22px] tracking-[0.04em] text-fg-txt no-underline"
          >
            Flux<span className="text-fg-accent">Gate</span>
          </Link>

          {/* shadcn NavigationMenu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_LINKS.map(({ label, href }) => (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* shadcn Button */}
          <Button
            asChild
            variant="default"
            className="text-[16px] px-7 py-3 font-bold"
          >
            <Link href="#">Start Free</Link>
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
}
