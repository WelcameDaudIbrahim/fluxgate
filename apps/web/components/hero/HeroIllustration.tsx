import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 380"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style={{ maxWidth: 500 }}
    >
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <filter id="heroGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#A78BFA" />
        </marker>
        <marker
          id="arrowRed"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#EF4444" />
        </marker>
      </defs>

      {/* Background glow */}
      <ellipse
        cx="250"
        cy="190"
        rx="130"
        ry="130"
        fill="url(#shieldGlow)"
        opacity="0.9"
      />

      {/* Server Rack */}
      <g transform="translate(360, 82) scale(1.5)">
        <rect
          x="0"
          y="0"
          width="90"
          height="130"
          rx="6"
          fill="#17102E"
          stroke="#2A2148"
          strokeWidth="1.5"
        />
        {[10, 32, 54, 76, 98].map((y, i) => (
          <rect
            key={i}
            x="8"
            y={y}
            width="74"
            height="16"
            rx="3"
            fill="#120B22"
            stroke="#2A2148"
            strokeWidth="1"
          />
        ))}
        <circle
          cx="70"
          cy="18"
          r="3"
          fill="#8B5CF6"
          opacity="0.9"
          filter="url(#heroGlow)"
        />
        <circle
          cx="70"
          cy="40"
          r="3"
          fill="#8B5CF6"
          opacity="0.9"
          filter="url(#heroGlow)"
        />
        <circle cx="70" cy="62" r="3" fill="#A78BFA" opacity="0.8" />
        <circle cx="70" cy="84" r="3" fill="#8B5CF6" opacity="0.9" />
        <circle cx="70" cy="106" r="3" fill="#6D28D9" opacity="0.8" />
        <text
          x="45"
          y="152"
          textAnchor="middle"
          fill="#B8B5D1"
          fontFamily="Orbitron,sans-serif"
          fontSize="10"
          letterSpacing="0.04em"
        >
          SERVER
        </text>
      </g>

      {/* Shield */}
      <motion.g
        transform="translate(156, 58)"
        className="shield-pulse"
        filter="url(#heroGlow)"
      >
        <path
          d="M94 12 L170 42 L170 110 Q170 165 94 195 Q18 165 18 110 L18 42 Z"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="3"
          style={{
            filter:
              "drop-shadow(0 0 16px #8B5CF6) drop-shadow(0 0 32px #6D28D9)",
          }}
        />
        <path
          d="M94 22 L160 48 L160 110 Q160 158 94 184 Q28 158 28 110 L28 48 Z"
          fill="rgba(139,92,246,0.07)"
        />
        <rect
          x="79"
          y="90"
          width="30"
          height="22"
          rx="4"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M85 90 L85 82 Q85 72 94 72 Q103 72 103 82 L103 90"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <circle cx="94" cy="101" r="4" fill="#A78BFA" opacity={".6"} />
      </motion.g>

      {/* Blocked incoming arrows */}
      <g>
        <line
          x1="20"
          y1="100"
          x2="200"
          y2="120"
          stroke="#EF4444"
          strokeWidth="2"
          strokeDasharray="8 4"
          markerEnd="url(#arrowRed)"
          opacity="0.8"
        />
        <circle cx="202" cy="121" r="0" fill="#EF4444" opacity="0">
          <animate
            attributeName="r"
            values="0;6;0"
            dur="1.2s"
            begin="0.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1.2s"
            begin="0.2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="38"
          y="94"
          fill="#EF4444"
          fontFamily="Inter,sans-serif"
          fontSize="10"
          opacity="0.7"
        >
          BOT TRAFFIC
        </text>
      </g>
      <g>
        <line
          x1="10"
          y1="185"
          x2="198"
          y2="185"
          stroke="#EF4444"
          strokeWidth="2"
          strokeDasharray="8 4"
          markerEnd="url(#arrowRed)"
          opacity="0.7"
        />
        <circle cx="200" cy="185" r="0" fill="#EF4444" opacity="0">
          <animate
            attributeName="r"
            values="0;6;0"
            dur="1.4s"
            begin="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1.4s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="16"
          y="178"
          fill="#EF4444"
          fontFamily="Inter,sans-serif"
          fontSize="10"
          opacity="0.7"
        >
          BRUTE FORCE
        </text>
      </g>
      <g>
        <line
          x1="20"
          y1="265"
          x2="202"
          y2="245"
          stroke="#EF4444"
          strokeWidth="2"
          strokeDasharray="8 4"
          markerEnd="url(#arrowRed)"
          opacity="0.6"
        />
        <circle cx="204" cy="244" r="0" fill="#EF4444" opacity="0">
          <animate
            attributeName="r"
            values="0;5;0"
            dur="1.1s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1.1s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="24"
          y="280"
          fill="#EF4444"
          fontFamily="Inter,sans-serif"
          fontSize="10"
          opacity="0.7"
        >
          FLOOD ATTACK
        </text>
      </g>

      {/* Valid arrows (shield → server) */}
      <path
        id="validPath1"
        d="M252 160 L340 160"
        stroke="#A78BFA"
        strokeWidth="2.5"
        fill="none"
        opacity={".8"}
        markerEnd="url(#arrowhead)"
      />
      <path
        id="validPath2"
        d="M252 190 L340 185"
        stroke="#8B5CF6"
        strokeWidth="2.5"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      {/* Animated valid packets */}
      <circle cx="0" cy="0" r="5" fill="#A78BFA" filter="url(#heroGlow)">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s">
          <mpath xlinkHref="#validPath1" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      <path id="validPath1" d="M252 160 L340 160" fill="none" />

      <circle cx="0" cy="0" r="4" fill="#8B5CF6" filter="url(#heroGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.9s">
          <mpath xlinkHref="#validPath2" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="2s"
          repeatCount="indefinite"
          begin="0.9s"
        />
      </circle>
      <path id="validPath2" d="M252 190 L340 185" fill="none" />

      <text
        x="266"
        y="152"
        fill="#A78BFA"
        fontFamily="Inter,sans-serif"
        fontSize="10"
        filter="url(#heroGlow)"
      >
        VALID REQUEST
      </text>

      {/* Bottom labels */}
      <text
        x="80"
        y="340"
        textAnchor="middle"
        fill="#EF4444"
        fontFamily="Orbitron,sans-serif"
        fontSize="11"
        letterSpacing="0.03em"
      >
        BLOCKED
      </text>
      <text
        x="250"
        y="340"
        textAnchor="middle"
        fill="#8B5CF6"
        fontFamily="Orbitron,sans-serif"
        fontSize="11"
        letterSpacing="0.03em"
        filter="url(#heroGlow)"
      >
        FLUXGATE
      </text>
      <text
        x="425"
        y="340"
        textAnchor="middle"
        fill="#A78BFA"
        fontFamily="Orbitron,sans-serif"
        fontSize="11"
        letterSpacing="0.03em"
      >
        PROTECTED
      </text>
    </svg>
  );
}
