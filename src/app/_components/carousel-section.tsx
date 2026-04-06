"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/ui/carousel";

type FeatureSlide = {
  id: number;
  type: "feature";
  title: string;
  description: string;
  imgUrl: string;
};

type SummarySlide = {
  id: number;
  type: "summary";
  description: string;
  highlightText: string;
  imgUrl: string;
};

type Slide = FeatureSlide | SummarySlide;

const SLIDES: Slide[] = [
  {
    id: 0,
    type: "feature",
    title: "FEED",
    description: "나만의 취향으로\n피드를 채우고",
    imgUrl:
      "https://framerusercontent.com/images/FojPtLIgqdUHXyw2ce5xTNOx46s.png?width=2000&height=1333",
  },
  {
    id: 1,
    type: "feature",
    imgUrl:
      "https://framerusercontent.com/assets/5YbfQxciL1k8vnfwiQrySK3X0.mp4",
    title: "CHALLENGE",
    description: "함께 도전하며\n성취감을 얻고",
  },
  {
    id: 2,
    type: "feature",
    imgUrl:
      "https://framerusercontent.com/images/mF1AANHUNoWCxdGrsYWBgeTOiw.png?width=626&height=418",
    title: "SHOPPING",
    description: "챌린지 리워드로\n구매하는 쇼핑까지",
  },
  {
    id: 3,
    type: "summary",
    imgUrl:
      "https://framerusercontent.com/images/3kYcVoFVSKUmX7toeew4QZabEn4.png?width=2000&height=1333",
    description: "나의 일상이\n가치가 되는 ",
    highlightText: "마이피",
  },
];

const isVideo = (url: string) => /\.(mp4|webm|ogg)(\?|$)/i.test(url);

function MobileSlideCard({
  imgUrl,
  className,
  title,
  description,
}: {
  imgUrl: string;
  className?: string;
  title: string;
  description: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className ?? ""}`}>
      {isVideo(imgUrl) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <span className="absolute top-0 left-0 bg-[#31D7CD] px-4 py-2 text-lg font-black text-white">
        {title}.
      </span>
      <p className="absolute bottom-10 left-0 right-0 whitespace-pre-line px-6 text-center text-[32px] font-bold leading-[140%] text-white">
        {description}
      </p>
    </div>
  );
}

function SummarySlideCard({
  imgUrl,
  className,
  description,
  highlightText,
}: {
  imgUrl: string;
  className?: string;
  description: string;
  highlightText: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gray-200 ${className ?? ""}`}
    >
      {isVideo(imgUrl) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="whitespace-pre-line px-6 text-center text-[32px] font-bold leading-[140%] text-white">
          {description}
          <span className="text-[#31D7CD]">{highlightText}</span>
        </p>
      </div>
    </div>
  );
}

function DotIndicators() {
  const { api } = useCarousel();
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            i === selected ? "bg-white opacity-100" : "bg-white opacity-50"
          }`}
          onClick={() => api?.scrollTo(i)}
        />
      ))}
    </div>
  );
}

function MobileCarousel() {
  return (
    <div className="md:hidden">
      <Carousel opts={{ align: "center", containScroll: false }}>
        <div className="relative">
          <CarouselContent className="-ml-4">
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="basis-[85%] pl-4">
                {slide.type === "summary" ? (
                  <SummarySlideCard
                    imgUrl={slide.imgUrl}
                    className="aspect-[3/5]"
                    description={slide.description}
                    highlightText={slide.highlightText}
                  />
                ) : (
                  <MobileSlideCard
                    imgUrl={slide.imgUrl}
                    className="aspect-[3/5]"
                    title={slide.title}
                    description={slide.description}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute bottom-[14px] left-0 right-0 z-10 flex justify-center">
            <div className="pointer-events-auto">
              <DotIndicators />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

function DesktopFeatureCard({
  imgUrl,
  className,
  title,
  description,
}: {
  imgUrl: string;
  className?: string;
  title: string;
  description: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className ?? ""}`}>
      {isVideo(imgUrl) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/55" />
      <span className="absolute top-0 left-0 bg-[#4DD9B4] px-5 py-3 text-xl font-black text-white">
        {title}.
      </span>
      <p className="absolute bottom-[25%] left-0 right-0 mx-auto max-w-[360px] whitespace-pre-line text-white text-[40px] font-bold text-center leading-snug break-keep">
        {description}
      </p>
    </div>
  );
}

function DesktopSummaryCard({
  imgUrl,
  className,
  description,
  highlightText,
}: {
  imgUrl: string;
  className?: string;
  description: string;
  highlightText: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className ?? ""}`}>
      {isVideo(imgUrl) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={imgUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <p className="max-w-[360px] whitespace-pre-line text-white text-[40px] font-bold text-center leading-snug break-keep">
          {description}
          <span className="text-[#31D7CD]">{highlightText}</span>
        </p>
      </div>
    </div>
  );
}

function DesktopCarousel() {
  return (
    <div className="hidden md:block overflow-hidden">
      <Carousel opts={{ align: "center", containScroll: false }}>
        <div className="relative">
          <CarouselContent className="-ml-5">
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="basis-[65%] pl-5">
                {slide.type === "summary" ? (
                  <DesktopSummaryCard
                    imgUrl={slide.imgUrl}
                    className="aspect-[2/1]"
                    description={slide.description}
                    highlightText={slide.highlightText}
                  />
                ) : (
                  <DesktopFeatureCard
                    imgUrl={slide.imgUrl}
                    className="aspect-[2/1]"
                    title={slide.title}
                    description={slide.description}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-[3%]">
            <div className="pointer-events-auto flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/80 hover:bg-white border-0 cursor-pointer" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/80 hover:bg-white border-0 cursor-pointer" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default function CarouselSection() {
  return (
    <section className="bg-white py-16">
      <MobileCarousel />
      <DesktopCarousel />
    </section>
  );
}
