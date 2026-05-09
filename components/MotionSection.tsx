"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionSectionProps = PropsWithChildren<{
  className?: string;
}>;

const MotionSection = ({ children, className = "" }: MotionSectionProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
