"use client";

import { useIsMobile } from "@/hooks/use-mobile";
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
    src: "https://framerusercontent.com/images/mXNyVCxoQ7ye13u2i6uCLlGXkgo.png?scale-down-to=1024&width=1480&height=986",
    type: "image",
    top: 0,
    left: 0,
    w: 400,
    h: 170,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/assets/hDj6vjL0cMOQqMPJypgevsd6SU.mp4",
    type: "video",
    top: 190,
    left: 190,
    w: 400,
    h: 170,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/LTGOGXg0zIwsQ37c0NmyyC7l36M.png?scale-down-to=1024&width=1333&height=2000",
    type: "image",
    top: 0,
    left: 420,
    w: 170,
    h: 170,
    radius: 1000,
    objectPosition: "center bottom",
  },
  {
    src: "https://framerusercontent.com/images/baJdObHdl41JUTbesF3D4RrNc.png?scale-down-to=1024&width=1333&height=2000",
    type: "image",
    top: 0,
    left: 610,
    w: 180,
    h: 360,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/3VWvud3XcY2dmltr3Beo5yVt2Ww.png?scale-down-to=1024&width=1334&height=2000",
    type: "image",
    top: 0,
    left: 810,
    w: 280,
    h: 360,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/RWLG27u831P829c6y5ENiVHxcY.png?scale-down-to=1024&width=2000&height=1334",
    type: "image",
    top: 0,
    left: 1110,
    w: 240,
    h: 240,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/qgUU7m5aptjTt15O7ZNbeeQeqI.png?scale-down-to=1024&width=1333&height=2000",
    type: "image",
    top: 0,
    left: 1370,
    w: 170,
    h: 170,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/assets/3WsDiyx7nipv4gd2MBDAt8dEp4.mp4",
    type: "video",
    top: 190,
    left: 1370,
    w: 170,
    h: 170,
    radius: 999,
  },
  {
    src: "https://framerusercontent.com/assets/DTYPOEBOJaPQ7FdTP6XEOxyBtLI.mp4",
    type: "video",
    top: 0,
    left: 1560,
    w: 360,
    h: 360,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/3nH2QFquP86gwW2E0WR6NRnU0.png?scale-down-to=1024&width=2000&height=1335",
    type: "image",
    top: 190,
    left: 1940,
    w: 170,
    h: 170,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/MSsRPAHWXEaMNyP7hY2lUuJMD5w.png?scale-down-to=1024&width=2000&height=1333",
    type: "image",
    top: 0,
    left: 2130,
    w: 280,
    h: 360,
    radius: 25,
  },
  {
    src: "https://framerusercontent.com/images/xBndNn3qTJZB8GYJmgGzY1qNV6E.png?scale-down-to=1024&width=1333&height=2000",
    type: "image",
    top: 0,
    left: 2430,
    w: 360,
    h: 360,
    radius: 1000,
    objectPosition: "50.5% 66.9%",
  },
  {
    src: "https://framerusercontent.com/assets/bLJ44FwEVP6F8ogwTjSngkbpOA.mp4",
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
  const isMobile = useIsMobile();

  return (
    <div className="pt-[100px] md:pt-[120px] pb-[40px] md:pb-[60px]">
      <p className="text-[28px] font-bold md:text-[48px] text-center">
        기록할 수록 가치가
      </p>
      <p className="text-[28px] font-bold md:text-[48px] text-center pb-8">
        쌓이는 웰니스 커뮤니티
      </p>
      <Image
        src="/logo.svg"
        alt="logo"
        width={190}
        height={60}
        className="mx-auto"
      />
      {isMobile && (
        <button
          type="button"
          className="bg-[#31d7cd] text-white px-5 py-3 rounded-full font-bold mx-auto block mt-8"
        >
          지금 다운로드
        </button>
      )}

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
