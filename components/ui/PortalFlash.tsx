"use client";

import { motion } from "framer-motion";

export default function PortalFlash() {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.6 }}
    />
  );
}