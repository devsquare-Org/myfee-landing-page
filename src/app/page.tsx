"use client";

import CarouselSection from "@/app/_components/carousel-section";
import ChallengeSection from "@/app/_components/challenge-section";
import CtaSection from "@/app/_components/cta-section";
import FeedSection from "@/app/_components/feed-section";
import FooterSection from "@/app/_components/footer-section";
import HeroSection from "@/app/_components/hero-section";
import ShoppingSection from "@/app/_components/shopping-section";
import TagSection from "@/app/_components/tag-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TagSection />
      <CarouselSection />
      <FeedSection />
      <ChallengeSection />
      <ShoppingSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
