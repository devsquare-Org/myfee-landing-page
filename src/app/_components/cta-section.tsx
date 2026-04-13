"use client";
import Image from "next/image";

const GRID_W = 3170;
const GRID_H = 360;
const GAP = 10;

type GridItem = {
  src: string;
  type: "image" | "video";
  top: number;
  left: number;
  w: number;
  h: number;
  radius: number;
  objectPosition?: string;
};

const gridItems: GridItem[] = [
  {
    src: "/images/asset-4.png",
    type: "image",
    top: 0,
    left: 0,
    w: 400,
    h: 170,
    radius: 25,
  },
  {
    src: "/images/asset-21.jpg",
    type: "image",
    top: 190,
    left: 190,
    w: 400,
    h: 170,
    radius: 25,
  },
  {
    src: "/images/asset-23.jpg",
    type: "image",
    top: 0,
    left: 420,
    w: 170,
    h: 170,
    radius: 1000,
    objectPosition: "center bottom",
  },
  {
    src: "/images/asset-25.jpg",
    type: "image",
    top: 0,
    left: 610,
    w: 180,
    h: 360,
    radius: 25,
  },
  {
    src: "/images/asset-20.jpg",
    type: "image",
    top: 0,
    left: 810,
    w: 280,
    h: 360,
    radius: 25,
  },
  {
    src: "/images/asset-33.jpg",
    type: "image",
    top: 0,
    left: 1110,
    w: 240,
    h: 240,
    radius: 25,
  },
  {
    src: "/images/asset-27.jpg",
    type: "image",
    top: 0,
    left: 1370,
    w: 170,
    h: 170,
    radius: 25,
  },
  {
    src: "/images/asset-3.png",
    type: "image",
    top: 190,
    left: 1370,
    w: 170,
    h: 170,
    radius: 999,
  },
  {
    src: "/images/asset-29.jpg",
    type: "image",
    top: 0,
    left: 1560,
    w: 360,
    h: 360,
    radius: 25,
  },
  {
    src: "/images/asset-32.jpg",
    type: "image",
    top: 190,
    left: 1940,
    w: 170,
    h: 170,
    radius: 25,
  },
  {
    src: "/images/asset-18.jpg",
    type: "image",
    top: 0,
    left: 2130,
    w: 280,
    h: 360,
    radius: 25,
  },
  {
    src: "/images/asset-1.png",
    type: "image",
    top: 0,
    left: 2430,
    w: 360,
    h: 360,
    radius: 1000,
    objectPosition: "50.5% 66.9%",
  },
  {
    src: "https://framerusercontent.com/assets/DTYPOEBOJaPQ7FdTP6XEOxyBtLI.mp4",
    type: "video",
    top: 157,
    left: 2810,
    w: 360,
    h: 203,
    radius: 25,
  },
];

function BentoGrid({ keyPrefix = "" }: { keyPrefix?: string }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: GRID_W, height: GRID_H }}
    >
      {gridItems.map((item, i) => (
        <div
          key={`${keyPrefix}${i}`}
          className="absolute overflow-hidden"
          style={{
            top: item.top,
            left: item.left,
            width: item.w,
            height: item.h,
            borderRadius: item.radius,
          }}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={item.src}
              alt=""
              className="h-full w-full object-cover"
              style={
                item.objectPosition
                  ? { objectPosition: item.objectPosition }
                  : undefined
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function CtaSection() {
  return (
    <div className="pt-[100px] md:pt-[120px] pb-[40px] md:pb-[60px]">
      <p className="text-[40px] md:text-[60px] font-bold text-center">
        기록할수록
      </p>
      <p className="text-[40px] md:text-[60px] font-bold text-center">
        가치가 쌓이는
      </p>
      <p className="text-[40px] md:text-[60px] font-bold text-center pb-8">
        웰니스 커뮤니티
      </p>
      <Image
        src="/logo.svg"
        alt="logo"
        width={190}
        height={60}
        className="mx-auto"
      />

      <div className="mt-12 w-full overflow-hidden">
        <div
          className="flex"
          style={{
            gap: GAP,
            animation: `bento-scroll ${40}s linear infinite`,
          }}
        >
          <BentoGrid keyPrefix="a-" />
          <BentoGrid keyPrefix="b-" />
        </div>
      </div>
    </div>
  );
}
