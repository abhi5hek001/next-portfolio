"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedBlockProps {
  direction: "left" | "right"; 
  children: React.ReactNode;
}

export function AnimatedBlock({ direction, children }: AnimatedBlockProps) {
  const variants = {
    hiddenLeft: { x: -800, opacity: 0 },
    hiddenRight: { x: 800, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
      animate="visible"
      variants={variants}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-wrap justify-center items-center"
    >
      {children}
    </motion.div>
  );
}
