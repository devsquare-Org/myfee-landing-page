"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { value: "challenge", label: "도전", src: "/images/challenge_1.avif" },
  { value: "record", label: "기록", src: "/images/challenge_2.avif" },
  { value: "reward", label: "보상", src: "/images/challenge_3.avif" },
];

export default function ChallengeSection() {
  const [activeTab, setActiveTab] = useState("challenge");
  const current = tabItems.find((t) => t.value === activeTab)!;

  return (
    <section className="relative mx-auto mt-20 max-w-[1152px] rounded-3xl bg-[#FCF2F8] md:mt-30">
      <div className="flex flex-col gap-10 p-8 md:flex-row md:p-14">
        <div className="shrink-0 md:w-[42%]">
          <p className="mb-3 text-lg font-bold text-[#E64794]">CHALLENGE.</p>
          <motion.p
            className="text-[28px] font-bold leading-tight md:text-[36px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            함께해서 즐거운 도전.
            <br />
            선물처럼
            <br />
            찾아오는 혜택
          </motion.p>
          <motion.p
            className="mt-8 text-[15px] leading-relaxed text-gray-500 md:text-[17px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            혼자 하면 작심삼일이지만 함께라면
            <br />
            끝까지 즐거워요. 챌린지 주제에 맞춰
            <br />
            일상을 인증하면 챌린지 리워드를 제공해요.
          </motion.p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex w-full flex-col items-center"
          >
            <TabsList className="h-auto w-full gap-2 bg-transparent p-0">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="cursor-pointer flex-1 rounded-[4px] border-none bg-[#FFFAFC] px-6 py-3 h-12 text-lg font-medium text-[#C297AB] shadow-none hover:text-[#C297AB] data-active:bg-[#E64794] data-active:font-bold data-active:text-white data-active:hover:text-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative mt-8 aspect-[300/620] w-[260px] md:w-[300px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.value}
                src={current.src}
                alt={current.label}
                className="absolute left-0 top-0 w-full"
                style={{
                  filter:
                    "drop-shadow(0 25px 50px rgba(0,0,0,0.25)) drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </AnimatePresence>

            <AnimatePresence>
              {activeTab === "reward" && (
                <motion.img
                  src="/images/challenge_4.avif"
                  alt="500P 포인트"
                  className="pointer-events-none absolute -right-8 top-[35%] z-10 w-[120px] md:-right-10 md:w-[140px]"
                  style={{
                    filter: "drop-shadow(0 10px 25px rgba(230,71,148,0.35))",
                  }}
                  initial={{ opacity: 0, y: 40, rotate: -12 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0],
                    rotate: -12,
                    transition: {
                      opacity: { duration: 0.5, ease: "easeOut" },
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  exit={{ opacity: 0, y: 40, transition: { duration: 0.2 } }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
