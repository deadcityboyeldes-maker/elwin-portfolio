// components/ui/EnterButton.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EnterButton({
  setWarp,
  start,
}: {
  setWarp: (value: boolean) => void;
  start: () => void;
}) {
  const router = useRouter();

  const handleEnter = () => {
    start(); // ← موسیقی اینجا شروع میشه
    setWarp(true);

    setTimeout(() => {
      router.push("/about");
    }, 650);
  };

  return (
    <motion.button
      onClick={handleEnter}
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        delay: 0.4,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="nfs-button"
    >
      <span className="nfs-text font-cormorant font-bold">ENTER SYSTEM</span>
      <span className="nfs-line font-cormorant"></span>
    </motion.button>
  );
}
