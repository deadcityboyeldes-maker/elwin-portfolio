/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CyberGrid() {
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      delay: number;
      duration: number;
      size: number;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 70 }).map(() => {
        // ← افزایش یافت به ۷۰
        const depth = Math.random();
        return {
          x: Math.random() * 100,
          y: Math.random() * 100 - 50,
          delay: Math.random() * 12,
          duration: 12 + Math.random() * 18,
          size: 1 + depth * 2.5,
          opacity: 0.15 + depth * 0.6,
        };
      }),
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: `blur(${p.size > 1.8 ? 1 : 0}px)`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: [0, 420],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
