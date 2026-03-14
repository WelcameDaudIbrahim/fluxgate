"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";

const CARDS = [
  {
    title: "Bot traffic",
    desc: "Automated bots can overwhelm your API endpoints with thousands of requests per second, degrading performance for legitimate users and consuming costly server resources.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
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
        <path
          d="M20 36 L28 36"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Traffic spikes",
    desc: "Sudden bursts of traffic — whether from viral moments or coordinated attacks — can crash your infrastructure, causing downtime and a poor user experience.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
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
    title: "Brute force attacks",
    desc: "Attackers systematically try millions of credential combinations against your API authentication endpoints, threatening account security and consuming significant compute resources.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <path
          d="M24 6 L32 12 L32 26 Q32 36 24 42 Q16 36 16 26 L16 12 Z"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="19"
          x2="24"
          y2="27"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="31" r="2" fill="#8B5CF6" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-fg-bg2 py-24">
      <div className="max-w-container mx-auto px-8">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-orbitron font-bold text-[38px] text-fg-txt tracking-[0.04em] text-center mb-14"
        >
          Why APIs Need Protection
        </motion.h2>

        {/* shadcn Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="h-full">
                <CardHeader>
                  {/* Icon */}
                  <div className="mb-5">{card.icon}</div>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>

                <Separator className="mx-8 w-auto my-0 opacity-40" />

                <CardContent>
                  <CardDescription className="text-[16px] leading-relaxed">
                    {card.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
