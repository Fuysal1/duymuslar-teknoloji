"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ShieldCheck,
  Satellite,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Telefon & Elektronik Satış",
    description:
      "Güncel akıllı telefon ve elektronik ürün yelpazesiyle ihtiyacınıza uygun modeli birlikte seçelim.",
  },
  {
    icon: ArrowLeftRight,
    title: "2.El Cihaz Alım-Satım",
    description:
      "Eski cihazınızı adil bir değerle değerlendirin veya güvenle kontrol edilmiş 2.el cihazlar edinin.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik Kamerası Kurulumu",
    description:
      "Ev ve işyeriniz için ihtiyaca uygun güvenlik kamerası sistemleri kurulum ve sonrası destekle.",
  },
  {
    icon: Satellite,
    title: "Uydu & Anten Kurulum/Satış",
    description:
      "Uydu ve anten sistemlerinin satışı, kurulumu ve ayarlarında uçtan uca teknik destek sağlıyoruz.",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Tek çatı altında dört alanda hizmet
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          İhtiyacınız ne olursa olsun, doğru çözümü bulmak için yanınızdayız.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <Card className="h-full rounded-3xl bg-white p-2 shadow-none transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10">
                  <service.icon className="size-6 text-brand" strokeWidth={1.5} />
                </div>
                <CardTitle className="mt-4 text-lg font-semibold text-ink">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[15px] leading-relaxed text-ink-muted">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
