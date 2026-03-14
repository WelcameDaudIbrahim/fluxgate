import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export default function CTAButton({
  doAnimationOnMount = true,
  className,
}: {
  doAnimationOnMount?: boolean;
  className?: string;
}) {
  return (
    <Link href="#">
      <motion.div
        initial={doAnimationOnMount ? { opacity: 0, y: 30 } : false}
        animate={doAnimationOnMount ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileTap={{ scale: 0.96 }}
        className="inline-block"
      >
        <Button
          asChild
          size="lg"
          className={cn(
            "relative overflow-hidden border-2 border-primary text-primary font-bold text-[16px] px-6 py-3 bg-transparent",
            className,
          )}
        >
          {/* Make the wrapper motion-enabled and detect hover here */}
          <motion.div
            className="relative w-full h-full"
            initial="rest"
            whileHover="hover"
          >
            {/* Background fill */}
            <motion.span
              className="absolute top-0 left-0 h-full w-0 bg-primary z-0"
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            {/* Text */}
            <motion.span
              className="relative z-10 flex items-center justify-center w-full h-full"
              variants={{
                rest: { color: "var(--primary)" }, // default text color
                hover: { color: "#fff" }, // turns white when hover
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Start Free
            </motion.span>
          </motion.div>
        </Button>
      </motion.div>
    </Link>
  );
}
