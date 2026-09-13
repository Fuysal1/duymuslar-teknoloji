"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function FeaturedProductSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    setIsDesktop(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.05]);
  const parallaxY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -20]);

  return (
    <section ref={sectionRef} className="bg-surface-dark py-16 sm:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-balance max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          iPhone 18 Serisi şimdi bizde
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          En yeni Apple deneyimini hemen keşfedin.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={isDesktop ? { scale: parallaxScale, y: parallaxY } : undefined}
          className="mt-12 w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/iphone.jpg"
            alt="iPhone 18 Serisi"
            width={1440}
            height={688}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 inline-flex">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <Link
              href="/hizmetler#one-cikan-modeller"
              className={cn(
                buttonVariants(),
                "h-12 rounded-full bg-brand px-8 text-base text-brand-foreground shadow-lg shadow-brand/20 transition-shadow hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/40"
              )}
            >
              Fiyat Bilgisi Al
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
