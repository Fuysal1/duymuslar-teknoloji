import { ShowcaseCard } from "@/components/hizmetler/showcase-card";
import { KayitTipiNotu } from "@/components/hizmetler/kayit-tipi-notu";
import { IKINCI_EL_KATEGORILERI } from "@/data/urunler";

export function SecondHandSection() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              2.El Fırsatları
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Kontrol edilmiş 2.el ürünlerde kategoriye göre fırsatları
              öğrenin.
            </p>
          </div>
          <KayitTipiNotu />
        </div>

        <div className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {IKINCI_EL_KATEGORILERI.map((kategori) => (
            <ShowcaseCard
              key={kategori.baslik}
              eyebrow={kategori.etiket}
              title={kategori.baslik}
              icon={kategori.icon}
              kayitTipi={kategori.kayitTipi}
              description={kategori.aciklama}
              note="Stok değişkenlik gösterir."
              ctaLabel="Stok İçin Ara"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
