import type { Metadata } from "next";
import "@/styles/globals.css";
import { pretendard } from "@/styles/fonts/fonts";

export const metadata: Metadata = {
  title: "myfee",
  description: "라이프스타일 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
