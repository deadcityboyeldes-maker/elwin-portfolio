/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocale } from "../../context/LocaleContext";

// ─── Types ───────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
interface Log {
  id: string;
  text: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const LOGS = [
  "› initializing energy core...",
  "› calibrating neural pathways...",
  "› loading creative modules [████████] 100%",
  "› system ready. all systems nominal.",
];

const STATS_TRANSLATIONS = {
  en: [
    { label: "Projects", value: "16 +" },
    { label: "Experience", value: "3 yr" },
    { label: "Stack", value: "12 +" },
  ],
  fa: [
    { label: "پروژه‌ها", value: "+۱۶" },
    { label: "تجربه", value: "۳ سال" },
    { label: "استک", value: "+۱۲" },
  ],
};

const TEXT = {
  en: {
    badge: "SYSTEM ONLINE",
    tagline: "Full-stack developer running on creativity and clean code.",
    energyCore: "ENERGY CORE",
    charging: "CHARGING...",
  },
  fa: {
    badge: "سیستم آنلاین",
    tagline: "توسعه‌دهنده فول‌استک با تکیه بر خلاقیت و کد تمیز.",
    energyCore: "هسته انرژی",
    charging: "در حال شارژ...",
  },
};

const glitchVariants = {
  animate: {
    x: [0, -2, 2, -1, 1, 0],
    skewX: [0, -1, 1, 0],
    transition: { duration: 0.4, repeat: Infinity, repeatDelay: 3 },
  },
} satisfies Variants;

// ─── Sub-components ──────────────────────────────────────────────────────────
const ScanLine = () => (
  <motion.div
    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 z-20 pointer-events-none"
    animate={{ y: [0, 600, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
  />
);

const CornerBracket = ({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) => {
  const base = "absolute w-5 h-5 border-cyan-400/60 pointer-events-none";
  const cls = {
    tl: "top-3 left-3 border-t border-l",
    tr: "top-3 right-3 border-t border-r",
    bl: "bottom-3 left-3 border-b border-l",
    br: "bottom-3 right-3 border-b border-r",
  }[pos];
  return <div className={`${base} ${cls}`} />;
};

const FloatingParticles = ({ particles }: { particles: Particle[] }) => (
  <>
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-cyan-400 pointer-events-none"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
        }}
        animate={{ y: [-10, 10, -10], opacity: [0.2, 0.7, 0.2] }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EnergySection() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const fontFamily = isFa ? "'Estedad', sans-serif" : "'Russo One', sans-serif";
  const fontWeight = isFa ? "700" : "400";
  const text = TEXT[locale];
  const stats = STATS_TRANSLATIONS[locale];

  const sectionRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [logs, setLogs] = useState<Log[]>([]);
  const [burst, setBurst] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const energyWidth = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      })),
    );
  }, []);

  useEffect(() => {
    LOGS.forEach((logText, i) => {
      setTimeout(
        () =>
          setLogs((prev) => [
            ...prev,
            { id: `${Date.now()}-${i}-${Math.random()}`, text: logText },
          ]),
        i * 800 + 500,
      );
    });
  }, []);

  const handleClick = useCallback(() => {
    setBurst(true);
    setTimeout(() => setBurst(false), 600);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, fontFamily, direction: isFa ? "rtl" : "ltr" }}
      className="relative overflow-hidden px-4 py-16 sm:py-24"
      onClick={handleClick}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

      <ScanLine />
      <FloatingParticles particles={particles} />
      {(["tl", "tr", "bl", "br"] as const).map((p) => (
        <CornerBracket key={p} pos={p} />
      ))}

      {/* Burst rings */}
      <AnimatePresence>
        {burst &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-cyan-400 pointer-events-none"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 3 + i, opacity: 0 }}
              exit={{}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[700px] mx-auto flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-widest border border-cyan-400/30 px-3 py-1 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          dir="ltr"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {text.badge}
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={glitchVariants}
          animate="animate"
          className="text-4xl sm:text-6xl font-bold text-white text-center tracking-tight"
          style={{ fontFamily: "'Russo One', sans-serif", fontWeight: 400 }}
          dir="ltr"
        >
          <span className="text-cyan-400">{"<"}</span>
          Energy
          <span className="text-cyan-400">{"/>"}</span>
        </motion.h2>

        <p
          className="text-cyan-300/70 text-sm sm:text-base text-center max-w-md"
          style={{ fontFamily, fontWeight }}
        >
          {text.tagline}
        </p>

        {/* Energy Bar */}
        <div className="w-full" dir="ltr">
          <div
            className="flex justify-between text-xs font-mono text-cyan-200/60 mb-1"
            style={{ fontFamily: "'Russo One', sans-serif", fontWeight: 400 }}
          >
            <span>{text.energyCore}</span>
            <span>{text.charging}</span>
          </div>
          <div className="h-2 bg-cyan-400/10 rounded-full overflow-hidden border border-cyan-400/20">
            <motion.div
              style={{ width: energyWidth }}
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-300 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {stats.map(({ label, value }) => (
            <motion.div
              key={label}
              className="flex flex-col items-center border border-cyan-400/20 rounded-lg py-3 bg-cyan-400/5"
              whileHover={{
                borderColor: "rgba(6,182,212,0.5)",
                backgroundColor: "rgba(6,182,212,0.08)",
              }}
            >
              <span
                className="text-xl sm:text-2xl font-bold text-cyan-200"
                style={{ fontFamily, fontWeight }}
              >
                {value}
              </span>
              <span
                className="text-xs text-cyan-100 mt-1"
                style={{ fontFamily, fontWeight }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Terminal — always LTR / English */}
        <div
          dir="ltr"
          className="w-full bg-black/50 border border-cyan-400/20 rounded-lg p-4 font-mono text-xs text-left"
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-400/10">
            {["bg-blue-300", "bg-blue-300", "bg-blue-300"].map((c, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${c} opacity-60`} />
            ))}
            <span className="text-cyan-400/40 ml-1">terminal</span>
          </div>
          <div className="space-y-1">
            {logs.map((log) => (
              <motion.p
                key={log.id}
                className="text-cyan-300/70"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {log.text}
              </motion.p>
            ))}
            <span className="text-cyan-400 animate-pulse">█</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
