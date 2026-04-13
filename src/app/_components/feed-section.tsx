"use client";

import * as React from "react";

const imageList = [
  {
    id: 0,
    imgUrl: "/images/asset-7.png",
  },
  {
    id: 1,
    imgUrl: "/images/asset-8.png",
  },
  {
    id: 2,
    imgUrl: "/images/asset-24.jpg",
  },
  {
    id: 3,
    imgUrl: "/images/asset-12.png",
  },
  {
    id: 4,
    imgUrl: "/images/asset-34.jpeg",
  },
  {
    id: 5,
    imgUrl: "/images/asset-31.jpg",
  },
  {
    id: 6,
    imgUrl: "/images/asset-28.jpg",
  },
  {
    id: 7,
    imgUrl: "/images/asset-30.jpg",
  },
  {
    id: 8,
    imgUrl: "/images/asset-22.jpg",
  },
  {
    id: 9,
    imgUrl: "/images/asset-9.png",
  },
];

type ImageConfig = {
  id: number;
  desktopClass: string;
  mobileClass: string;
  rotate: number;
  floatY: number;
  delay: number;
  duration: number;
};

const imageConfigs: ImageConfig[] = [
  {
    id: 0,
    desktopClass: "top-[-20px] left-[-20px] w-[190px] h-[245px]",
    mobileClass: "top-[-10px] left-[-15px] w-[120px] h-[155px]",
    rotate: 0,
    floatY: -10,
    delay: 0,
    duration: 4,
  },
  {
    id: 2,
    desktopClass: "top-[30px] left-[280px] w-[100px] h-[125px]",
    mobileClass: "top-[5px] left-[140px] w-[100px] h-[130px]",
    rotate: 0,
    floatY: -14,
    delay: 0.6,
    duration: 4.5,
  },
  {
    id: 1,
    desktopClass: "top-[-15px] left-[600px] w-[165px] h-[185px]",
    mobileClass: "hidden",
    rotate: 0,
    floatY: -8,
    delay: 1.0,
    duration: 4.2,
  },
  {
    id: 5,
    desktopClass: "top-[-20px] right-[-20px] w-[210px] h-[165px]",
    mobileClass: "top-[-10px] right-[-15px] w-[140px] h-[110px]",
    rotate: 0,
    floatY: -8,
    delay: 1.2,
    duration: 3.8,
  },
  {
    id: 3,
    desktopClass: "top-[290px] left-[80px] w-[105px] h-[145px]",
    mobileClass: "top-[240px] left-[-15px] w-[110px] h-[90px]",
    rotate: 0,
    floatY: -12,
    delay: 0.3,
    duration: 4.2,
  },
  {
    id: 4,
    desktopClass: "bottom-[-20px] left-[-20px] w-[195px] h-[280px]",
    mobileClass: "bottom-[-10px] left-[-15px] w-[140px] h-[200px]",
    rotate: 0,
    floatY: -10,
    delay: 0.9,
    duration: 4.4,
  },
  {
    id: 7,
    desktopClass: "bottom-[-15px] left-[360px] w-[185px] h-[145px]",
    mobileClass: "bottom-[-10px] left-[40%] w-[140px] h-[110px]",
    rotate: 0,
    floatY: -14,
    delay: 1.5,
    duration: 3.6,
  },
  {
    id: 9,
    desktopClass: "top-[580px] right-[180px] w-[175px] h-[130px]",
    mobileClass: "top-[150px] right-[-10px] w-[130px] h-[95px]",
    rotate: 0,
    floatY: -10,
    delay: 0.5,
    duration: 4.0,
  },
  {
    id: 6,
    desktopClass: "top-[280px] right-[-20px] w-[170px] h-[235px]",
    mobileClass: "top-[310px] right-[-80px] w-[120px] h-[165px]",
    rotate: 0,
    floatY: -10,
    delay: 0.8,
    duration: 4.1,
  },
  {
    id: 8,
    desktopClass: "bottom-[-15px] right-[-20px] w-[155px] h-[215px]",
    mobileClass: "bottom-[-10px] right-[-10px] w-[110px] h-[155px]",
    rotate: 0,
    floatY: -12,
    delay: 1.3,
    duration: 3.7,
  },
];

function FloatingImage({
  src,
  desktopClass,
  mobileClass,
  rotate,
  floatY,
  delay,
  duration,
}: {
  src: string;
  desktopClass: string;
  mobileClass: string;
  rotate: number;
  floatY: number;
  delay: number;
  duration: number;
}) {
  const mobileHidden = mobileClass === "hidden";

  return (
    <>
      <div
        className={`absolute overflow-hidden rounded-xl shadow-lg hidden md:block ${desktopClass}`}
        style={
          {
            "--rotate": `${rotate}deg`,
            "--float-y": `${floatY}px`,
            animation: `feed-float ${duration}s ease-in-out ${delay}s infinite`,
          } as React.CSSProperties
        }
      >
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {!mobileHidden && (
        <div
          className={`absolute overflow-hidden rounded-lg shadow-lg md:hidden ${mobileClass}`}
          style={
            {
              "--rotate": `${rotate}deg`,
              "--float-y": `${floatY}px`,
              animation: `feed-float ${duration}s ease-in-out ${delay}s infinite`,
            } as React.CSSProperties
          }
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}

export default function FeedSection() {
  return (
    <section className="mt-30 relative mx-auto max-w-screen-xl h-[786px] overflow-hidden rounded-3xl bg-[#E8FAF2]">
      <div className="relative h-full">
        {imageConfigs.map((config) => {
          const img = imageList.find((i) => i.id === config.id)!;
          return (
            <FloatingImage
              key={config.id}
              src={img.imgUrl}
              desktopClass={config.desktopClass}
              mobileClass={config.mobileClass}
              rotate={config.rotate}
              floatY={config.floatY}
              delay={config.delay}
              duration={config.duration}
            />
          );
        })}

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="mx-auto max-w-xl px-6 text-center">
            <p className="text-[16px] font-semibold tracking-wide text-[#4DD9B4] decoration-2">
              FEED.
            </p>
            <h2 className="mt-5 text-[40px] md:text-[60px] font-bold leading-snug break-keep">
              자유롭게 <br /> 영감을 나누는
              <br />
              웰니스 피드
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-black/90 break-keep md:text-base">
              꼭 특별한 날이 아니어도 좋아요.
              <br />
              오늘의 식단부터 나만의 뷰티 팁까지,
              <br /> 건강한 일상을 감각적인 피드로 기록해요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
