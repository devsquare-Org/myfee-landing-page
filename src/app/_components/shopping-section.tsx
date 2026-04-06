"use client";

import { motion } from "framer-motion";

const imageList = [
  {
    id: 0,
    imgUrl:
      "https://framerusercontent.com/assets/1DyrvgD24BQFiOJ7HufoQshqFg0.mp4",
  },
  {
    id: 1,
    imgUrl:
      "https://framerusercontent.com/images/fr8TGTN0yRT1ZrSUmLmILzfCiI.png?width=2000&height=2000",
  },
  {
    id: 2,
    imgUrl:
      "https://framerusercontent.com/images/hD9SSFv9l1MfZLKXmA3dGvvzk2o.png?width=1333&height=2000",
  },
  {
    id: 3,
    imgUrl:
      "https://framerusercontent.com/images/K7b0raC14YwIpVBRMpzAgOzjU.png?width=1480&height=986",
  },
  {
    id: 4,
    imgUrl:
      "https://framerusercontent.com/images/0BQTYBYIVPUdpuuyasn8YdHHc.png?width=1333&height=2000",
  },
  {
    id: 5,
    imgUrl:
      "https://framerusercontent.com/images/SbKYhRq6FwarrPtuJqMMq0pldO0.png?width=1335&height=2000",
  },
  {
    id: 6,
    imgUrl:
      "https://framerusercontent.com/images/TxaeNlkLZePb7ZlcxRMZGcidws.png?width=1333&height=2000",
  },
  {
    id: 7,
    imgUrl:
      "https://framerusercontent.com/images/wlQyNYsX7wJh83KYmgXRNoWJkq0.png?width=2000&height=1124",
  },
];

export default function ShoppingSection() {
  const doubled = [...imageList, ...imageList];

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#EEFBFA] py-6 md:py-10 mt-20 max-w-[1152px] mx-auto">
      <img
        src="/images/shop_line.png"
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-[10%] h-auto w-full object-cover mix-blend-multiply opacity-20"
      />

      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-6 pl-6">
          {doubled.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="aspect-square w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:w-[320px]"
            >
              {item.imgUrl.endsWith(".mp4") ? (
                <video
                  src={item.imgUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={item.imgUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-[1152px] px-8 md:mt-20 md:px-14">
        <p className="text-right text-lg font-semibold text-[#31D7CD] md:text-[28px]">
          SHOPPING.
        </p>
        <motion.p
          className="text-right text-[28px] font-bold leading-[1.3] text-[#1F1F1F] md:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          나의 노력으로
        </motion.p>
        <motion.p
          className="text-right text-[28px] font-bold leading-[1.3] text-[#1F1F1F] md:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          완성하는
        </motion.p>
        <motion.p
          className="mb-6 text-right text-[28px] font-bold leading-[1.3] text-[#1F1F1F] md:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          현명한 쇼핑
        </motion.p>
        <motion.p
          className="text-right text-[15px] leading-relaxed text-[#3B3B3B] break-keep md:text-[18px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          챌린지 참여하고 받은 리워드로,
          <br />
          위시리스트를 위해 사용하세요.
          <br />
          당신의 열정이 쇼핑의 즐거움으로!
        </motion.p>
      </div>
    </section>
  );
}
