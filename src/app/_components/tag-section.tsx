"use client";

import { motion } from "framer-motion";

const fadeSlideUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TagSection() {
  return (
    <div className="relative bg-linear-to-b from-white via-[#BEFBF7] to-white px-6 py-20 md:px-16 md:py-40">
      <motion.p
        className="text-center text-[16px] md:text-left md:text-base pb-20 md:pb-40"
        {...fadeSlideUp}
      >
        기록은 하고 싶고,
        <br /> 보여주기만 하긴 지칠 때
      </motion.p>

      <motion.div
        className="text-center text-[40px] md:text-[48px] font-bold pb-20 md:pb-40"
        {...fadeSlideUp}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <p>#식단</p>
        <p>#미라클모닝</p>
        <p>#러닝크루</p>
        <p>#오운완</p>
        <p>#힐링</p>
      </motion.div>

      <motion.p
        className="text-center text-[16px] md:text-right md:text-base"
        {...fadeSlideUp}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        저장공간 속에만 두기엔
        <br /> 당신의 노력이 너무 아깝지 않나요?
      </motion.p>
    </div>
  );
}
