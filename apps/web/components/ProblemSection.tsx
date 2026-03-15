"use client";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ICON_SIZE = 64;

const CARDS = [
  {
    title: "Traffic spikes",
    desc: "Sudden bursts of traffic — whether from viral moments or coordinated attacks...",
    Icon: ({ size }: { size: number }) => (
      <svg viewBox="0 0 48 48" fill="none" width={size} height={size}>
        <polyline
          points="6,38 14,28 20,34 28,14 34,22 42,10"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="42"
          x2="42"
          y2="42"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="10"
          x2="6"
          y2="42"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Bot traffic",
    desc: "Automated bots can overwhelm your API endpoints with thousands of requests per second...",
    Icon: ({ size }: { size: number }) => (
      <svg
        viewBox="6 6 36 36"
        fill="none"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <rect
          x="10"
          y="14"
          width="28"
          height="22"
          rx="4"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <circle cx="18" cy="25" r="3" stroke="#8B5CF6" strokeWidth="2" />
        <circle cx="30" cy="25" r="3" stroke="#8B5CF6" strokeWidth="2" />
        <path
          d="M18 12 L18 14"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 12 L30 14"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 30 L10 30"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M38 30 L42 30"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Brute force",
    desc: "Attackers systematically try millions of credential combinations against your API...",
    Icon: ({ size }: { size: number }) => (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className=" py-24">
      <div className="max-w-container mx-auto px-8">
        <motion.h2 className="font-orbitron font-bold text-[38px] text-fg-txt text-center mb-16">
          Why Apps Need Protection
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="h-full flex items-center justify-center"
              transition={{ delay: i * 0.15 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div className="w-fit h-full rounded-xl p-0.5 from-primary via-transparent via-34%  to-transparent from bg-conic-0">
                <Card className="z-10 rounded-xl h-full bg-background pb-8 pt-2.5 px-4 text-center border-none">
                  <CardHeader className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-20 h-20">
                      <card.Icon size={ICON_SIZE} />
                    </div>

                    <CardTitle className="text-2xl mt-2.5">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-1.5 px-0">
                    <CardDescription className="text-[16px] leading-relaxed max-w-xs mx-auto">
                      {card.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
