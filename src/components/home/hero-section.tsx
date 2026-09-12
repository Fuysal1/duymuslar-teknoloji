"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Satellite, Smartphone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="text-sm font-medium text-brand">
          Duymuşlar Teknoloji
        </span>
        <h1 className="text-balance mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          Telefonundan güvenlik sistemine, teknolojinin her adımında yanınızda.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          Telefon &amp; elektronik satışı, 2.el cihaz alım-satımı, güvenlik
          kamerası kurulumu ve uydu &amp; anten çözümlerinde tek adres.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/hizmetler"
            className={cn(
              buttonVariants(),
              "h-12 rounded-full bg-brand px-8 text-base text-brand-foreground hover:bg-brand/90"
            )}
          >
            Hizmetlerimizi İnceleyin
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative mx-auto mt-16 flex h-48 max-w-2xl items-center justify-center overflow-hidden rounded-3xl bg-surface-alt sm:mt-20 sm:h-56"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
        <div className="relative flex items-center gap-8 text-ink-muted/70 sm:gap-12">
          <Smartphone className="size-7 sm:size-9" strokeWidth={1.25} />
          <Camera className="size-8 sm:size-10" strokeWidth={1.25} />
          <Satellite className="size-7 sm:size-9" strokeWidth={1.25} />
        </div>
        <span className="absolute bottom-4 text-xs text-ink-muted/60">
          Ürün görseli yakında eklenecek
        </span>
      </motion.div>
    </section>
  );
}
