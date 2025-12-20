"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-in";
}

export default function ScrollReveal({ children, animation = "fade-up" }: Props) {
  const variants = {
    "fade-up": { opacity: 0, y: 30 },
    "fade-down": { opacity: 0, y: -30 },
    "fade-in": { opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[animation]}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}