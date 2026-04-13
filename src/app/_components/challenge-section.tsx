"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { value: "challenge", label: "도전", src: "/images/chall.png" },
  { value: "record", label: "기록", src: "/images/feed.png" },
  { value: "reward", label: "보상", src: "/images/shopping.png" },
];

export default function ChallengeSection() {
  const [activeTab, setActiveTab] = useState("challenge");
  const current = tabItems.find((t) => t.value === activeTab)!;

  return (
    <section className="relative mx-auto mt-20 max-w-screen-xl rounded-3xl bg-[#FCF2F8] md:mt-30">
      <div className="flex flex-col gap-10 p-8 md:flex-row md:p-14 !pb-0">
        <div className="shrink-0 md:w-[42%]">
          <p className="mb-3 text-[16px] font-semibold text-[#E64794]">
            CHALLENGE.
          </p>
          <motion.p
            className="text-[40px] font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            함께하는 도전
          </motion.p>
          <motion.p
            className="text-[40px] font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            선물처럼
          </motion.p>
          <motion.p
            className="text-[40px] font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            찾아오는 혜택
          </motion.p>
          <motion.p
            className="mt-8 text-[15px] leading-relaxed text-black/90 md:text-[17px]"
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
            <TabsList className="h-auto w-full max-w-[300px] gap-2 bg-transparent p-0">
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

          <div className="relative mt-8 w-[220px] md:w-[300px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.value}
                src={current.src}
                alt={current.label}
                className="block h-auto w-full max-w-full"
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
