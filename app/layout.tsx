import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Practice Typescript",
  description: "Practice Next js with Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <Header />
        <main className="h-[94vh] max-h-[94vh] overflow-y-auto bg-neutral-900 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
