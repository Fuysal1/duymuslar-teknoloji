import { Phone } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TELEFON_HREF } from "@/lib/constants";
import { KURULUM_HIZMETLERI } from "@/data/urunler";

export function InstallServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Kurulum Hizmetleri
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Yerinde keşif ve kuruluma kadar uçtan uca destek veriyoruz.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {KURULUM_HIZMETLERI.map((hizmet) => (
          <Card
            key={hizmet.baslik}
            className="flex h-full flex-col rounded-3xl bg-white p-2 shadow-none"
          >
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10">
                <hizmet.icon
                  className="size-6 text-brand"
                  strokeWidth={1.5}
                />
              </div>
              <CardTitle className="mt-4 text-lg font-semibold text-ink">
                {hizmet.baslik}
              </CardTitle>
              <CardDescription className="text-[15px] leading-relaxed text-ink-muted">
                {hizmet.aciklama}
              </CardDescription>
            </CardHeader>
            <div className="mt-auto px-(--card-spacing) pt-2">
              <a
                href={TELEFON_HREF}
                className={cn(
                  buttonVariants(),
                  "h-10 w-full gap-2 rounded-full bg-brand text-sm text-brand-foreground hover:bg-brand/90"
                )}
              >
                <Phone className="size-4" />
                Teklif Al
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
