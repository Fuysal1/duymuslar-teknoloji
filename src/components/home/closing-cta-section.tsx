"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ClosingCtaSection() {
  return (
    <section className="bg-surface-dark py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Doğru teknoloji kararını birlikte verelim
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Sorularınızı yanıtlamak ve size en uygun çözümü sunmak için
          buradayız.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/iletisim"
            className={cn(
              buttonVariants(),
              "h-12 rounded-full bg-brand px-8 text-base text-brand-foreground hover:bg-brand/90"
            )}
          >
            Bize Ulaşın
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
