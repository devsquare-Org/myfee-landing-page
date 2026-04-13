"use client";

import { motion } from "framer-motion";

const imageList = [
  {
    id: 0,
    imgUrl: "/images/asset-16.png",
  },
  {
    id: 1,
    imgUrl: "/images/asset-19.jpg",
  },
  {
    id: 2,
    imgUrl: "/images/asset-11.png",
  },
  {
    id: 3,
    imgUrl: "/images/asset-10.png",
  },
  {
    id: 4,
    imgUrl: "/images/asset-6.png",
  },
  {
    id: 5,
    imgUrl: "/images/asset-14.png",
  },
  {
    id: 6,
    imgUrl: "/images/asset-15.png",
  },
  {
    id: 7,
    imgUrl: "/images/asset-35.jpeg",
  },
];

export default function ShoppingSection() {
  const doubled = [...imageList, ...imageList];

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#EEFBFA] py-6 md:py-10 mt-20 max-w-screen-xl mx-auto">
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

      <div className="relative z-10 mx-auto mt-14 max-w-screen-xl px-8 md:mt-20 md:px-14">
        <p className="text-right text-[16px] font-semibold text-[#31D7CD]">
          SHOPPING.
        </p>
        <motion.p
          className="text-right text-[40px] md:text-[60px] font-bold leading-[1.3] text-[#1F1F1F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          나의 노력으로
        </motion.p>
        <motion.p
          className="text-right text-[40px] md:text-[60px] font-bold leading-[1.3] text-[#1F1F1F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          완성하는
        </motion.p>
        <motion.p
          className="mb-6 text-right text-[40px] md:text-[60px] font-bold leading-[1.3] text-[#1F1F1F]"
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
