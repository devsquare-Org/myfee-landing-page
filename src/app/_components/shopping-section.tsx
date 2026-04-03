"use client";

import { motion } from "framer-motion";

export default function ShoppingSection() {
  const doubled = [...imageList, ...imageList];

  return (
    <section className="relative mx-auto mt-20 max-w-[1152px] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat bg-[url('/images/BG_pink.png')] md:mt-30">
      <div className="p-8 md:p-14">
        <p className="text-[28px] font-bold text-[#F35896] text-right md:text-[40px]">
          SHOPPING
        </p>
        <motion.p
          className="text-right text-[28px] font-bold text-[#3A001C] md:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          나의 노력으로
        </motion.p>
        <motion.p
          className="mb-6 text-right text-[28px] font-bold text-[#3A001C] md:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          완성하는 현명한 쇼핑
        </motion.p>
        <motion.p
          className="text-right break-keep"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          챌린지 참여하고 받은 리워드로 구매하고 싶었던 위시리스트에 사용하세요.
        </motion.p>
        <motion.p
          className="text-right break-keep"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          당신의 열정이 쇼핑의 즐거움으로!
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden pb-8 md:pb-14">
        <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-4 pl-4">
          {doubled.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="aspect-square w-[260px] flex-shrink-0 overflow-hidden rounded-2xl md:w-[340px]"
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
    </section>
  );
}

const imageList = [
  {
    id: 0,
    imgUrl:
      "https://framerusercontent.com/images/K7b0raC14YwIpVBRMpzAgOzjU.png?scale-down-to=1024&width=1480&height=986",
  },
  {
    id: 1,
    imgUrl:
      "https://framerusercontent.com/images/0BQTYBYIVPUdpuuyasn8YdHHc.png?scale-down-to=1024&width=1333&height=2000",
  },
  {
    id: 2,
    imgUrl:
      "https://framerusercontent.com/images/SbKYhRq6FwarrPtuJqMMq0pldO0.png?width=1335&height=2000",
  },
  {
    id: 3,
    imgUrl:
      "https://framerusercontent.com/images/TxaeNlkLZePb7ZlcxRMZGcidws.png?width=1333&height=2000",
  },
  {
    id: 4,
    imgUrl:
      "https://framerusercontent.com/images/wlQyNYsX7wJh83KYmgXRNoWJkq0.png?width=2000&height=1124",
  },
  {
    id: 5,
    imgUrl:
      "https://framerusercontent.com/assets/1DyrvgD24BQFiOJ7HufoQshqFg0.mp4",
  },
  {
    id: 6,
    imgUrl:
      "https://framerusercontent.com/images/fr8TGTN0yRT1ZrSUmLmILzfCiI.png?width=2000&height=2000",
  },
  {
    id: 7,
    imgUrl:
      "https://framerusercontent.com/images/hD9SSFv9l1MfZLKXmA3dGvvzk2o.png?width=1333&height=2000",
  },
];
