"use client";

import { useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const APPSTORE_URL =
  "https://apps.apple.com/app/myfee/id6742517498";
const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.myfee.app";

export default function Header() {
  const isMobile = useIsMobile();

  const handleDownload = useCallback(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    window.open(isIOS ? APPSTORE_URL : PLAYSTORE_URL, "_blank");
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 py-3 flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={96} height={23} />
        {isMobile && (
          <button
            type="button"
            onClick={handleDownload}
            className="bg-black text-white px-4 py-2 rounded-full font-bold text-sm"
          >
            다운로드
          </button>
        )}
      </div>
    </header>
  );
}
