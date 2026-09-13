"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    </section>
  );
}
