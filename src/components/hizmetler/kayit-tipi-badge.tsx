import { Badge } from "@/components/ui/badge";
import type { KayitTipi } from "@/data/urunler";

const KAYIT_TIPI_STYLES: Record<KayitTipi, { label: string; className: string }> = {
  "tr-garantili": {
    label: "Türkiye Garantili",
    className: "bg-green-100 text-green-700",
  },
  yurtdisi: {
    label: "Yurt Dışı Kayıtlı",
    className: "bg-amber-100 text-amber-800",
  },
  "ikisi-mevcut": {
    label: "İkisi de mevcut, detay için arayın",
    className: "bg-surface-alt text-ink-muted",
  },
};

export function KayitTipiBadge({ kayitTipi }: { kayitTipi: KayitTipi }) {
  const { label, className } = KAYIT_TIPI_STYLES[kayitTipi];
  return <Badge className={className}>{label}</Badge>;
}
