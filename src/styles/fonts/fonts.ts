import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    // woff2 파일들 (더 압축률이 좋음)
    {
      path: "./woff2/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./woff2/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
    // woff 파일들 (fallback)
    {
      path: "./woff/Pretendard-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./woff/Pretendard-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});
