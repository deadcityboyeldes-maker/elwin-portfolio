"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useLocale } from "../../context/LocaleContext";

interface Props {
  href?: string;
  label?: string;
  delay?: number;
}

const translations = {
  en: {
    label: "Initialize Communication",
    loading: "Loading...",
  },
  fa: {
    label: "شروع ارتباط",
    loading: "در حال بارگذاری...",
  },
};

export default function NextButton({
  href = "/contact",
  label,
  delay = 1000,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { locale } = useLocale();
  const text = translations[locale];

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => router.push(href), delay);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="
        px-12 py-6
        border border-[#00d4ff]
        text-[#00d4ff]
        bg-[#00d4ff]/10
        hover:bg-[#00d4ff]/20
        shadow-[0_0_15px_rgba(0,212,255,0.3)]
        hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]
        transition font-bold tracking-widest uppercase
        flex items-center gap-3
      "
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          {text.loading}
        </>
      ) : (
        (label ?? text.label)
      )}
    </motion.button>
  );
}
