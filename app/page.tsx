"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAudio } from "../components/audio/AudioContext";

export default function Home() {
  const [warp, setWarp] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const { start } = useAudio();
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    if (warp) return;
    start();
    setWarp(true);
  };

  return (
    <main className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#2563eb15_1px,transparent_1px),linear-gradient(to_bottom,#2563eb15_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* BLOB */}
      <motion.div
        animate={{
          x: [0, 250, -250, 0],
          y: [0, -180, 180, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] bg-blue-600/30 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />

      {/* CENTER */}
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence>
          {showHint && !warp && (
            <motion.p
              key="hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-blue-300/70 text-sm tracking-widest uppercase pointer-events-none"
            >
              tap to start
            </motion.p>
          )}
        </AnimatePresence>

        <div className="cursor-pointer" onClick={handleClick}>
          <motion.img
            src="/legend.png"
            alt="me"
            initial={{ opacity: 0 }}
            animate={
              warp ? { scale: 1.08, opacity: 0.6 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-80 h-115 object-cover select-none"
            draggable={false}
          />
        </div>
      </div>

      <AnimatePresence>
        {warp && (
          <motion.div
            key="blackout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            onAnimationComplete={() => router.push("/lang-select")}
            className="absolute inset-0 bg-black z-20"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
