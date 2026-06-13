/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CyberGrid from "../../components/background/CyberGrid";
import Button from "../../components/ui/Button";
import { useLocale } from "../../context/LocaleContext";

const PHONE = "09928781780";
const TG_ID = "eldes11";

const SCAN_LINES = [
  "> BREACH INITIATED — TARGET UNAWARE...",
  "> INJECTING PAYLOAD INTO NODE_0x4F2A...",
  "> BYPASSING FIREWALL [████████████] 100%",
  "> EXPLOITING CVE-2024-7491 — CRITICAL",
  "> DUMPING /etc/shadow... DONE",
  "> ROOT ACCESS GRANTED — SYSTEM OWNED",
  "> TRACING DIGITAL FOOTPRINT...",
  "> CROSS-REF: NSA_DB // INTERPOL_DB // DARKWEB",
  "> BIOMETRIC MATCH: 99.97%",
  "> ██ IDENTITY CONFIRMED ██ RESISTANCE FUTILE",
];

const GLITCH_CHARS = "!@#$%^&*<>/\\|{}[]?~`";
const C = "#00d4ff";
const C33 = "#00d4ff33";
const C55 = "#00d4ff55";
const C88 = "#00d4ff88";

const translations = {
  en: {
    title: "CONTACT",
    breachLabel: "// BREACH TERMINAL — CLASSIFIED",
    confirmed: "> IDENTITY CONFIRMED _ RESISTANCE FUTILE ✓",
    channels: "COMPROMISED CHANNELS — USE WITH CAUTION",
    phoneLabel: "ENCRYPTED_LINE://",
    phoneCta: "[ SECURE CALL ]",
    phoneAction: "▶ DIAL",
    tgLabel: "USER_PV://",
    tgCta: "[ SEND MESSAGE ]",
    tgAction: "▶ ENTER",
    traced: "⚠ YOU HAVE BEEN TRACED — PROCEED AT YOUR OWN RISK ⚠",
    back: "BACK",
  },
  fa: {
    title: "ارتباط",
    breachLabel: "// ترمینال نفوذ — محرمانه",
    confirmed: "> هویت تایید شد _ مقاومت بی‌فایده است ✓",
    channels: "کانال‌های لو رفته — با احتیاط استفاده کنید",
    phoneLabel: "ENCRYPTED_LINE://",
    phoneCta: "[ تماس امن ]",
    phoneAction: "▶ تماس",
    tgLabel: "USER_PV://",
    tgCta: "[ ارسال پیام ]",
    tgAction: "▶ ورود",
    traced: "⚠ شما ردیابی شدید — با مسئولیت خودتان ادامه دهید ⚠",
    back: "بازگشت",
  },
};

function GlitchText({
  text,
  fontFamily,
}: {
  text: string;
  fontFamily: string;
}) {
  const [display, setDisplay] = useState(text);
  const glitch = () => {
    let count = 0;
    const iv = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((c) =>
            Math.random() > 0.6
              ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              : c,
          )
          .join(""),
      );
      if (++count > 8) {
        clearInterval(iv);
        setDisplay(text);
      }
    }, 40);
  };
  return (
    <span
      onMouseEnter={glitch}
      className="cursor-pointer"
      style={{ fontFamily }}
    >
      {display}
    </span>
  );
}

export default function ContactPage() {
  const { locale } = useLocale();
  const isFa = locale === "fa";
  const fontFamily = isFa ? "'Estedad', sans-serif" : "'Russo One', sans-serif";
  const text = translations[locale];

  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"scanning" | "clearing" | "contact">(
    "scanning",
  );
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (phase !== "scanning") return;
    if (lineIndex >= SCAN_LINES.length) {
      setTimeout(() => setPhase("clearing"), 800);
      return;
    }
    const t = setTimeout(
      () => {
        setVisibleLines((p) => [...p, SCAN_LINES[lineIndex]]);
        setLineIndex((i) => i + 1);
      },
      lineIndex === 0 ? 400 : 160 + Math.random() * 180,
    );
    return () => clearTimeout(t);
  }, [lineIndex, phase]);

  useEffect(() => {
    if (phase !== "clearing") return;
    if (visibleLines.length === 0) {
      setPhase("contact");
      return;
    }
    const t = setTimeout(() => setVisibleLines((p) => p.slice(1)), 35);
    return () => clearTimeout(t);
  }, [phase, visibleLines]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-black px-3 py-12 sm:px-6 sm:py-16"
      style={{ fontFamily }}
    >
      <CyberGrid />

      <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 text-center"
        >
          <p
            className="font-mono text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1"
            style={{ color: C33 }}
          >
            {text.breachLabel}
          </p>
          <h1
            className="text-4xl sm:text-5xl tracking-tight"
            style={{
              color: C,
              textShadow: `0 0 20px ${C88}`,
              fontFamily,
              fontWeight: isFa ? "700" : "400",
            }}
          >
            <GlitchText text={text.title} fontFamily={fontFamily} />
          </h1>
        </motion.div>

        {/* Terminal Box — always LTR / English */}
        <div
          dir="ltr"
          className="rounded border p-3 sm:p-5 relative text-left"
          style={{
            background: "#000",
            borderColor: C33,
            boxShadow: `0 0 30px ${C33}18, inset 0 0 30px #00000088`,
            height: "360px",
            overflow: "hidden",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3"
            style={{ borderBottom: `1px solid ${C33}15` }}
          >
            <motion.div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: C }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: C33 }}
            />
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: C33 }}
            />
            <span
              className="ml-1 font-mono text-[10px] sm:text-xs truncate"
              style={{ color: C33 }}
            >
              exploit_trace.sh — root@VOID-∞
            </span>
            <motion.span
              className="ml-auto font-mono text-[10px] sm:text-xs shrink-0"
              style={{ color: C55 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ⚠ LIVE
            </motion.span>
          </div>

          {/* Scanning phase */}
          <AnimatePresence>
            {(phase === "scanning" || phase === "clearing") &&
              visibleLines.map((line, i) => (
                <motion.p
                  key={line + i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.07 }}
                  className="font-mono text-[10px] sm:text-xs mb-1 break-all"
                  style={{
                    color:
                      line.includes("IDENTITY") ||
                      line.includes("ROOT") ||
                      line.includes("CONFIRMED")
                        ? C
                        : C55,
                    textShadow:
                      line.includes("IDENTITY") || line.includes("ROOT")
                        ? `0 0 8px ${C88}`
                        : "none",
                    fontWeight:
                      line.includes("IDENTITY") || line.includes("ROOT")
                        ? "bold"
                        : "normal",
                  }}
                >
                  {line}
                </motion.p>
              ))}
          </AnimatePresence>

          {phase === "scanning" && lineIndex < SCAN_LINES.length && (
            <motion.span
              className="inline-block w-2 h-3 align-middle"
              style={{ background: C }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}

          {/* Contact phase */}
          <AnimatePresence>
            {phase === "contact" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="font-mono text-[10px] sm:text-xs mb-3 sm:mb-4"
                  style={{ color: C, textShadow: `0 0 10px ${C55}` }}
                >
                  &gt; IDENTITY CONFIRMED _ RESISTANCE FUTILE ✓
                </p>
                <div
                  className="h-px mb-3 sm:mb-4"
                  style={{
                    background: `linear-gradient(to right, transparent, ${C33}, transparent)`,
                  }}
                />
                <p
                  className="font-mono text-[10px] sm:text-xs tracking-widest mb-3 sm:mb-4"
                  style={{ color: C33 }}
                >
                  COMPROMISED CHANNELS — USE WITH CAUTION
                </p>

                {/* Phone */}
                <motion.a
                  href={`tel:${PHONE}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded mb-2"
                  style={{
                    border: `1px solid ${C33}`,
                    background: "#00d4ff08",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = C55)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = C33)
                  }
                >
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: `1px solid ${C33}`, color: C }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-mono text-[10px] sm:text-xs mb-0.5"
                      style={{ color: C33 }}
                    >
                      ENCRYPTED_LINE://
                    </p>
                    <span
                      className="font-mono text-xs sm:text-sm"
                      style={{ color: C, textShadow: `0 0 8px ${C55}` }}
                    >
                      <GlitchText
                        text="[ SECURE CALL ]"
                        fontFamily="'Russo One', sans-serif"
                      />
                    </span>
                  </div>
                  <motion.span
                    className="ml-auto font-mono text-[10px] sm:text-xs shrink-0"
                    style={{ color: C33 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    ▶ DIAL
                  </motion.span>
                </motion.a>

                {/* Telegram */}
                <motion.a
                  href={`https://t.me/${TG_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded"
                  style={{
                    border: `1px solid ${C33}`,
                    background: "#00d4ff08",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = C55)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = C33)
                  }
                >
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: `1px solid ${C33}`, color: C }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-mono text-[10px] sm:text-xs mb-0.5"
                      style={{ color: C33 }}
                    >
                      USER_PV://
                    </p>
                    <span
                      className="font-mono text-xs sm:text-sm"
                      style={{ color: C, textShadow: `0 0 8px ${C55}` }}
                    >
                      <GlitchText
                        text="[ SEND MESSAGE ]"
                        fontFamily="'Russo One', sans-serif"
                      />
                    </span>
                  </div>
                  <motion.span
                    className="ml-auto font-mono text-[10px] sm:text-xs shrink-0"
                    style={{ color: C33 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
                  >
                    ▶ ENTER
                  </motion.span>
                </motion.a>

                <p
                  className="text-center font-mono text-[10px] sm:text-xs mt-3"
                  style={{ color: C33 }}
                >
                  ⚠ YOU HAVE BEEN TRACED — PROCEED AT YOUR OWN RISK ⚠
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-5 sm:mt-6 flex justify-center w-full"
        >
          <div style={{ fontFamily, fontWeight: isFa ? "700" : "400" }}>
            <Button href="/about" label={text.back} delay={0} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
