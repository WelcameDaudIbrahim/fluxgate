"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import CTAButton from "../CTAButton";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#problem" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-fg-bg">
      <div className="max-w-container m-auto! px-8 container">
        <div className="flex h-17 items-center justify-between">
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
            <CTAButton />
          </Button>
        </div>
      </div>
    </header>
  );
}
