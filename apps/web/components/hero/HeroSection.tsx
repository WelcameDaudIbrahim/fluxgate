"use client";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import CTAButton from "../CTAButton";
import HeroIllustration from "./HeroIllustration";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background overflow-hidden py-24">
      <div className="max-w-container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-0"
          >
            {/* shadcn Badge — product label */}
            <div>
              <Badge
                variant="default"
                className="font-inter  text-xs tracking-widest uppercase px-3 py-1"
              >
                API Rate-Limiting Gateway
              </Badge>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-orbitron font-bold text-[58px] leading-[1.1] tracking-[0.03em] text-fg-txt ml-1 max-w-145"
            >
              Stop Abuse Before It Hits Your{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-primary drop-shadow-[0_0_20px_var(--color-primary)]"
              >
                App
              </motion.span>{" "}
              <motion.span className="italic">Instantly</motion.span>
              <motion.span
                className="inline-block"
                animate={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                !
              </motion.span>
            </motion.h1>
            <p className="font-orbitron mb-8 mt-1! text-[18px] text-fg-txt-sub max-w-120 leading-relaxed">
              One service, one endpoint, total control.
            </p>

            <div className="flex gap-4 flex-wrap">
              <CTAButton doAnimationOnMount={false} />
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
