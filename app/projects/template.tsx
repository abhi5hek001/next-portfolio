"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{y:60, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-wrap justify-center items-center"
    >
      {children}
    </motion.div>
  );
}