"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEXT_DATA.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // src="/hero-video.mp4"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {TEXT_DATA[activeIndex].words.map((word, i) => (
              <span
                key={i}
                className="block text-[60px] font-extrabold leading-[1.2] text-white"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const TEXT_DATA = [
  { id: 0, words: ["일상을", "찍어서", "올리면"] },
  { id: 1, words: ["선물로", "쌓이는", "리워드"] },
];
