"use client";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

import HeroIllustration from "./HeroIllustration";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-fg-bg overflow-hidden py-24">
      <div className="max-w-container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* shadcn Badge — product label */}
            <div>
              <Badge
                variant="default"
                className="font-inter text-xs tracking-widest uppercase px-3 py-1"
              >
                API Rate-Limiting Gateway
              </Badge>
            </div>

            <h1 className="font-orbitron font-bold text-[58px] leading-[1.1] tracking-[0.03em] text-fg-txt">
              Protect Your API
              <span className="block text-[38px] text-fg-accent-light mt-2">
                From Abuse Instantly!
              </span>
            </h1>

            <p className="font-inter text-[18px] text-fg-txt-sub max-w-[480px] leading-relaxed">
              One service, one endpoint, total control.
            </p>

            {/* shadcn Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button
                asChild
                variant="default"
                size="lg"
                className="text-[16px] font-bold"
              >
                <Link href="#">Start Free</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-[16px] font-bold"
              >
                <Link href="#">View Documentation</Link>
              </Button>
            </div>
          </motion.div>

          {/* ── Right: SVG Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
