import { Smartphone } from "lucide-react";
import { ShowcaseCard } from "@/components/hizmetler/showcase-card";
import { KayitTipiNotu } from "@/components/hizmetler/kayit-tipi-notu";
import { YENI_TELEFONLAR } from "@/data/urunler";

export function PhoneShowcaseSection() {
  return (
    <section
      id="one-cikan-modeller"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Öne Çıkan Modeller
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Güncel model yelpazesinden bir seçki — fiyat ve stok bilgisi için
            bizi arayın.
          </p>
        </div>
        <KayitTipiNotu />
      </div>

      <div className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {YENI_TELEFONLAR.map((telefon) => (
          <ShowcaseCard
            key={telefon.model}
            eyebrow={telefon.marka}
            title={telefon.model}
            icon={Smartphone}
            kayitTipi={telefon.kayitTipi}
            ctaLabel="Fiyat & Stok İçin Ara"
          />
        ))}
      </div>
    </section>
  );
}
