"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLocale } from "../../context/LocaleContext";

export default function LangSelect() {
  const [selected, setSelected] = useState<"en" | "fa">("en"); // ← Default to English
  const [warping, setWarping] = useState(false);
  const { setLocale } = useLocale();
  const router = useRouter();

  const handleNext = () => {
    setLocale(selected);
    setWarping(true);
    setTimeout(() => {
      router.push(`/about`);
    }, 900);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-4 py-8">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#2563eb15_1px,transparent_1px),linear-gradient(to_bottom,#2563eb15_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:50px_50px]" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.8, 1.15, 0.95, 1.1, 1],
          opacity: [0, 0.18, 0.25, 0.18],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.3, // کمی تأخیر برای جلوگیری از فلش اولیه
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] 
             bg-blue-600/10 blur-[90px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 w-full max-w-lg sm:max-w-xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="text-blue-400/60 tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs uppercase mb-2"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            SYSTEM LANGUAGE INIT
          </p>
          <h1
            className="text-white text-xl sm:text-2xl lg:text-3xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            SELECT LANGUAGE
          </h1>
          <div className="mt-3 mx-auto w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        {/* Language Cards */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8 w-full justify-center">
          {(["en", "fa"] as const).map((lang, i) => (
            <motion.button
              key={lang}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              onClick={() => setSelected(lang)}
              className="relative group flex-1 max-w-[160px] sm:max-w-[176px]"
            >
              {/* Glow on selected */}
              {selected === lang && (
                <motion.div
                  layoutId="lang-glow"
                  className="absolute inset-0 bg-blue-500/15 blur-lg rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}

              <div
                className={`
                  relative w-full h-44 sm:h-52 lg:h-56 rounded-2xl border
                  flex flex-col items-center justify-center gap-3 sm:gap-4
                  backdrop-blur-xl transition-all duration-300
                  ${
                    selected === lang
                      ? "border-blue-400 bg-blue-950/40 shadow-[0_0_14px_1px_rgba(59,130,246,0.3)]"
                      : "border-blue-900/50 bg-black/60 hover:border-blue-700/70 hover:shadow-[0_0_8px_0px_rgba(59,130,246,0.15)]"
                  }
                `}
              >
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t border-l border-blue-500/50" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t border-r border-blue-500/50" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b border-l border-blue-500/50" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b border-r border-blue-500/50" />

                {/* Language label */}
                <span
                  className={`text-4xl sm:text-5xl font-bold tracking-wider transition-all duration-300
                    ${selected === lang ? "text-blue-300" : "text-blue-900 group-hover:text-blue-700"}`}
                  style={{
                    fontFamily:
                      lang === "en"
                        ? "var(--font-russo)"
                        : "Estedad, sans-serif",
                  }}
                >
                  {lang === "en" ? "EN" : "FA"}
                </span>

                {/* Language name */}
                <div className="text-center px-2">
                  <p
                    className={`text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300
                      ${selected === lang ? "text-blue-400" : "text-blue-800 group-hover:text-blue-600"}`}
                    style={{
                      fontFamily:
                        lang === "en"
                          ? "var(--font-russo)"
                          : "Estedad, sans-serif",
                    }}
                  >
                    {lang === "en" ? "English" : "فارسی"}
                  </p>
                  <p
                    className="text-[9px] sm:text-[10px] text-blue-900 mt-1 tracking-widest"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {lang === "en" ? "LTR · LATIN" : "RTL · PERSIAN"}
                  </p>
                </div>

                {/* Selected indicator */}
                <AnimatePresence>
                  {selected === lang && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute bottom-3 sm:bottom-4 w-5 sm:w-6 h-[2px] bg-blue-400 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          ))}
        </div>

        {/* NEXT Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Always visible since default is selected
          transition={{ duration: 0.4 }}
        >
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-10 sm:px-14 lg:px-16 py-2.5 sm:py-3
              border rounded-sm tracking-[0.3em] sm:tracking-[0.4em]
              text-xs sm:text-sm uppercase transition-all duration-300
              border-blue-500 text-blue-300 hover:bg-blue-500/10 hover:shadow-[0_0_8px_1px_rgba(59,130,246,0.2)]
            `}
            style={{ fontFamily: "var(--font-accent)" }}
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current" />
            NEXT
          </motion.button>
        </motion.div>
      </div>

      {/* Warp transition */}
      <AnimatePresence>
        {warping && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 60, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0, 0.8, 1] }}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-black z-10"
              style={{ boxShadow: "0 0 80px 40px rgba(30,30,60,0.6)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute inset-0 bg-black z-20"
            />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
