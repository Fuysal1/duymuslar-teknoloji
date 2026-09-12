import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/icon.png ve src/app/favicon.ico: marka rengi + "D" harfinden
// oluşan geçici monogram favicon. Gerçek logo geldiğinde bu iki dosyayı
// onunla değiştir.
export const metadata: Metadata = {
  title: "Duymuşlar Teknoloji",
  description:
    "Telefon & elektronik satış, 2.el cihaz alım-satım, güvenlik kamerası ve uydu & anten kurulumu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
