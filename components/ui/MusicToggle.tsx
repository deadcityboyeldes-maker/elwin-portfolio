// components/ui/MusicToggle.tsx
"use client";
import { useAudio } from "../audio/AudioContext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const { toggle, playing } = useAudio();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 left-6 z-50 group"
    >
      {/* Outer Neon Glow */}
      <div className="absolute inset-0 bg-blue-300/40 rounded-full blur-md transition-all duration-500 group-hover:bg-blue-300/50 group-hover:scale-110" />

      <div
        className="relative w-14 h-14 rounded-2xl 
                   border border-blue-500/70 bg-black/90 
                   backdrop-blur-2xl flex items-center justify-center
                   shadow-[0_0_12px_-5px] shadow-blue-500
                   hover:border-blue hover:shadow-[0_0_25px_5px] hover:shadow-blue-500/60
                   transition-all duration-300"
      >
        {/* Inner Neon Ring */}
        <div className="absolute inset-[2px] rounded-[14px] border border-blue-500/30" />

        {/* Icon */}
        <div className="relative flex items-center justify-center text-blue-500">
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-8 h-8 drop-shadow-[0_0_6px_rgb(59,130,246)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h3m-6 6h6m-6 6h6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-9 h-9 ml-0.5 drop-shadow-[0_0_6px_rgb(59,130,246)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.668-.985V5.653z"
              />
            </svg>
          )}
        </div>

        {/* Cyberpunk Bottom Line */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-[1px] bg-blue-500" />
      </div>
    </motion.button>
  );
}
