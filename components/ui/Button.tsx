"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";

interface Props {
  href: string;
  label?: string;
  delay?: number;
}

export default function NextButton({
  href,
  label = "Initialize Communication",
  delay = 1000,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { locale } = useLocale();
  const isFa = locale === "fa";

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => router.push(href), delay);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        border: "1px solid #00d4ff",
        backgroundColor: "rgba(0, 212, 255, 0.08)",
        color: "#00d4ff",
        textShadow: "0 0 8px #00d4ff",
        boxShadow: "0 0 12px rgba(0, 212, 255, 0.25)",
        fontFamily: isFa ? "'Estedad', sans-serif" : "'Russo One', sans-serif",
        fontWeight: isFa ? "700" : "400",
      }}
      className="px-12 py-6 hover:brightness-125 transition tracking-widest uppercase flex items-center gap-3"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          {isFa ? "در حال بارگذاری..." : "Loading..."}
        </>
      ) : (
        label
      )}
    </motion.button>
  );
}
