"use client";

import { useEffect, useState } from "react";

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

      <div className="relative z-10">
        {TEXT_DATA.map(({ id, words }, dataIndex) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center transition-opacity duration-400 ease-in-out"
            style={{
              position: dataIndex === 0 ? "relative" : "absolute",
              inset: dataIndex === 0 ? undefined : 0,
              opacity: dataIndex === activeIndex ? 1 : 0,
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="block text-[60px] font-extrabold leading-[1.2] text-white"
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const TEXT_DATA = [
  { id: 0, words: ["일상을", "찍어서", "올리면"] },
  { id: 1, words: ["선물로", "쌓이는", "리워드"] },
];
