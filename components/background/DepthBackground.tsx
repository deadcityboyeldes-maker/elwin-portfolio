"use client";

import { motion } from "framer-motion";

export default function DepthBackground({ warp }: any) {
  return (
    <motion.div
      className="absolute inset-0 bg-black"
      animate={
        warp
          ? {
              scale: 1.6,
              rotate: 5,
              opacity: 0,
              filter: "blur(25px)",
            }
          : {
              scale: 1,
              rotate: 0,
              opacity: 1,
              filter: "blur(0px)",
            }
      }
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.25),transparent)]" />
    </motion.div>
  );
}