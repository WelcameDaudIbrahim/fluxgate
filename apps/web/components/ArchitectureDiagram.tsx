"use client";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="bg-background py-24">
      <div className="max-w-container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 mb-14"
        >
          <Badge
            variant="default"
            className="font-inter text-xs tracking-widest uppercase px-3 py-1"
          >
            How It Works
          </Badge>
          <h2 className="font-orbitron font-bold text-[38px] text-fg-txt tracking-[0.04em] text-center">
            Architecture visualization
          </h2>
          <Separator className="w-24 bg-fg-accent opacity-60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg
            viewBox="0 0 1100 340"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            style={{ overflow: "visible" }}
          >
            <defs>
              <radialGradient id="gatewayGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              <filter id="archGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <marker
                id="archArrow"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#8B5CF6" />
              </marker>
              <marker
                id="archArrowRed"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#EF4444" />
              </marker>
              <marker
                id="archArrowGreen"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#A78BFA" />
              </marker>
            </defs>

            {/* ── LEFT: Vulnerable Server ── */}
            <g transform="translate(60, 50)">
              <ellipse
                cx="90"
                cy="120"
                rx="80"
                ry="70"
                fill="rgba(239,68,68,0.05)"
              />
              <rect
                x="50"
                y="30"
                width="80"
                height="110"
                rx="5"
                fill="#17102E"
                stroke="#2A2148"
                strokeWidth="1.5"
              />
              {[40, 58, 76, 94, 112].map((y, i) => (
                <rect
                  key={i}
                  x="58"
                  y={y}
                  width="64"
                  height="12"
                  rx="2"
                  fill="#120B22"
                  stroke="#2A2148"
                  strokeWidth="1"
                />
              ))}
              <circle
                cx="112"
                cy="46"
                r="4"
                fill="#EF4444"
                className="warn-blink"
              />
              <circle
                cx="112"
                cy="64"
                r="4"
                fill="#EF4444"
                className="warn-blink-2"
              />
              <circle
                cx="112"
                cy="82"
                r="4"
                fill="#EF4444"
                opacity="0.6"
                className="warn-blink-3"
              />
              <polygon
                points="90,4 105,28 75,28"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
              />
              <text
                x="90"
                y="23"
                textAnchor="middle"
                fill="#EF4444"
                fontFamily="Inter,sans-serif"
                fontSize="12"
                fontWeight="700"
              >
                !
              </text>
              <text
                x="90"
                y="162"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Orbitron,sans-serif"
                fontSize="11"
                letterSpacing="0.04em"
                fontWeight="700"
              >
                Vulnerable API Server
              </text>
              <text
                x="90"
                y="182"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                Without rate limiting,
              </text>
              <text
                x="90"
                y="198"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                servers receive
              </text>
              <text
                x="90"
                y="214"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                uncontrolled traffic.
              </text>
            </g>

            {/* Red traffic hitting left server */}
            <g>
              <line
                x1="10"
                y1="80"
                x2="108"
                y2="100"
                stroke="#EF4444"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                markerEnd="url(#archArrowRed)"
                opacity="0.7"
              />
              <line
                x1="10"
                y1="105"
                x2="108"
                y2="110"
                stroke="#EF4444"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                markerEnd="url(#archArrowRed)"
                opacity="0.6"
              />
              <line
                x1="10"
                y1="130"
                x2="108"
                y2="120"
                stroke="#EF4444"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                markerEnd="url(#archArrowRed)"
                opacity="0.5"
              />
              <circle r="4" fill="#EF4444">
                <animateMotion
                  dur="1.2s"
                  repeatCount="indefinite"
                  begin="0s"
                  path="M10,90 L108,105"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#EF4444">
                <animateMotion
                  dur="1.4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  path="M10,120 L108,115"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>
            </g>

            {/* ── MIDDLE: FluxGate ── */}
            <g transform="translate(390, 30)">
              <ellipse
                cx="80"
                cy="110"
                rx="90"
                ry="85"
                fill="url(#gatewayGlow)"
              />
              <path
                d="M80 8 L134 38 L134 98 L80 128 L26 98 L26 38 Z"
                fill="rgba(139,92,246,0.08)"
                stroke="#8B5CF6"
                strokeWidth="2.5"
                style={{
                  filter:
                    "drop-shadow(0 0 16px #8B5CF6) drop-shadow(0 0 32px #6D28D9)",
                }}
              />
              <path
                d="M80 26 L112 40 L112 80 Q112 108 80 122 Q48 108 48 80 L48 40 Z"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="1.5"
                opacity="0.8"
              />
              <rect
                x="70"
                y="70"
                width="20"
                height="16"
                rx="3"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="1.5"
              />
              <path
                d="M74 70 L74 64 Q74 57 80 57 Q86 57 86 64 L86 70"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="1.5"
              />
              <circle cx="80" cy="78" r="2.5" fill="#A78BFA" />
              <text
                x="80"
                y="152"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Orbitron,sans-serif"
                fontSize="11"
                letterSpacing="0.04em"
                fontWeight="700"
              >
                FluxGate Gateway
              </text>
              <text
                x="80"
                y="172"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                FluxGate filters requests,
              </text>
              <text
                x="80"
                y="188"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                blocks attacks, and controls
              </text>
              <text
                x="80"
                y="204"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                request flow.
              </text>
            </g>

            {/* ── FLOW: Client → FluxGate ── */}
            <g>
              <line
                x1="240"
                y1="105"
                x2="388"
                y2="110"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="12 4"
                markerEnd="url(#archArrow)"
                opacity="0.6"
              />
              <line
                x1="240"
                y1="125"
                x2="388"
                y2="120"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeDasharray="8 4"
                markerEnd="url(#archArrow)"
                opacity="0.4"
              />
              <circle r="5" fill="#8B5CF6" filter="url(#archGlow)">
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0s"
                  path="M240,110 L388,112"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#6D28D9">
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.75s"
                  path="M240,118 L388,116"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.5s"
                  repeatCount="indefinite"
                  begin="0.75s"
                />
              </circle>
              <text
                x="288"
                y="96"
                textAnchor="middle"
                fill="#EF4444"
                fontFamily="Inter,sans-serif"
                fontSize="10"
                opacity="0.8"
              >
                ▬ BLOCKED
              </text>
              <circle r="4" fill="#EF4444">
                <animateMotion
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.3s"
                  path="M240,130 L340,130"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0.8;0"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
              </circle>
              <circle cx="340" cy="130" r="0" fill="#EF4444">
                <animate
                  attributeName="r"
                  values="0;5;0"
                  dur="1s"
                  begin="0.3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="1s"
                  begin="0.3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* ── FLOW: FluxGate → Protected Server ── */}
            <g>
              <line
                x1="628"
                y1="110"
                x2="800"
                y2="110"
                stroke="#A78BFA"
                strokeWidth="2.5"
                markerEnd="url(#archArrowGreen)"
                filter="url(#archGlow)"
              />
              <line
                x1="628"
                y1="128"
                x2="800"
                y2="125"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                markerEnd="url(#archArrowGreen)"
                opacity="0.7"
              />
              <circle r="5" fill="#A78BFA" filter="url(#archGlow)">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0s"
                  path="M628,110 L800,110"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="5" fill="#A78BFA" filter="url(#archGlow)">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin="1s"
                  path="M628,110 L800,110"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="1s"
                />
              </circle>
              <circle r="4" fill="#8B5CF6">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  path="M628,125 L800,122"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>
              <text
                x="706"
                y="96"
                textAnchor="middle"
                fill="#A78BFA"
                fontFamily="Inter,sans-serif"
                fontSize="10"
                filter="url(#archGlow)"
              >
                ● CONTROLLED FLOW
              </text>
            </g>

            {/* ── RIGHT: Protected Server ── */}
            <g transform="translate(800, 50)">
              <ellipse
                cx="90"
                cy="115"
                rx="80"
                ry="70"
                fill="rgba(139,92,246,0.05)"
              />
              <rect
                x="50"
                y="30"
                width="80"
                height="110"
                rx="5"
                fill="#17102E"
                stroke="#2A2148"
                strokeWidth="1.5"
              />
              {[40, 58, 76, 94, 112].map((y, i) => (
                <rect
                  key={i}
                  x="58"
                  y={y}
                  width="64"
                  height="12"
                  rx="2"
                  fill="#120B22"
                  stroke="#2A2148"
                  strokeWidth="1"
                />
              ))}
              <circle
                cx="112"
                cy="46"
                r="4"
                fill="#8B5CF6"
                filter="url(#archGlow)"
              />
              <circle
                cx="112"
                cy="64"
                r="4"
                fill="#8B5CF6"
                filter="url(#archGlow)"
                opacity="0.85"
              />
              <circle cx="112" cy="82" r="4" fill="#A78BFA" opacity="0.8" />
              <circle cx="112" cy="100" r="4" fill="#8B5CF6" opacity="0.9" />
              <circle cx="112" cy="118" r="4" fill="#6D28D9" />
              <path
                d="M90 4 L112 16 L112 42 Q112 58 90 66 Q68 58 68 42 L68 16 Z"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                filter="url(#archGlow)"
              />
              <polyline
                points="78,35 86,44 103,26"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="90"
                y="162"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Orbitron,sans-serif"
                fontSize="11"
                letterSpacing="0.04em"
                fontWeight="700"
              >
                Protected API
              </text>
              <text
                x="90"
                y="178"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Orbitron,sans-serif"
                fontSize="11"
                letterSpacing="0.04em"
                fontWeight="700"
              >
                Infrastructure
              </text>
              <text
                x="90"
                y="200"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                FluxGate ensures only safe
              </text>
              <text
                x="90"
                y="216"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                and controlled traffic
              </text>
              <text
                x="90"
                y="232"
                textAnchor="middle"
                fill="#B8B5D1"
                fontFamily="Inter,sans-serif"
                fontSize="12"
              >
                reaches your server.
              </text>
            </g>

            {/* Flow Labels */}
            <text
              x="314"
              y="155"
              textAnchor="middle"
              fill="#B8B5D1"
              fontFamily="Orbitron,sans-serif"
              fontSize="10"
              letterSpacing="0.04em"
              opacity="0.8"
            >
              INCOMING TRAFFIC
            </text>
            <text
              x="714"
              y="155"
              textAnchor="middle"
              fill="#B8B5D1"
              fontFamily="Orbitron,sans-serif"
              fontSize="10"
              letterSpacing="0.04em"
              opacity="0.8"
            >
              STABLE THROUGHPUT
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
