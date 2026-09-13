import {
  Camera,
  Gamepad2,
  Laptop,
  Satellite,
  Smartphone,
  Watch,
  RadioTower,
  type LucideIcon,
} from "lucide-react";

/**
 * - "tr-garantili": Türkiye garantili
 * - "yurtdisi": Yurt dışı kayıtlı
 * - "ikisi-mevcut": Aynı modelin her iki seçeneği de mevcut, detay telefonla teyit edilir
 */
export type KayitTipi = "tr-garantili" | "yurtdisi" | "ikisi-mevcut";

export interface TelefonModeli {
  marka: string;
  model: string;
  kayitTipi: KayitTipi;
}

export const YENI_TELEFONLAR: TelefonModeli[] = [
  { marka: "Apple", model: "iPhone 18 Pro", kayitTipi: "ikisi-mevcut" },
  { marka: "Apple", model: "iPhone 18 Pro Max", kayitTipi: "ikisi-mevcut" },
  { marka: "Apple", model: "iPhone Ultra", kayitTipi: "yurtdisi" },
  { marka: "Samsung", model: "Galaxy S26", kayitTipi: "tr-garantili" },
  { marka: "Samsung", model: "Galaxy S26+", kayitTipi: "tr-garantili" },
  { marka: "Samsung", model: "Galaxy S26 Ultra", kayitTipi: "ikisi-mevcut" },
  { marka: "Xiaomi", model: "Xiaomi 17", kayitTipi: "tr-garantili" },
  { marka: "Xiaomi", model: "Xiaomi 17 Pro", kayitTipi: "tr-garantili" },
  { marka: "Xiaomi", model: "Xiaomi 17 Ultra", kayitTipi: "yurtdisi" },
];

export interface IkinciElKategori {
  etiket: string;
  baslik: string;
  aciklama: string;
  icon: LucideIcon;
  kayitTipi?: KayitTipi;
}

export const IKINCI_EL_KATEGORILERI: IkinciElKategori[] = [
  {
    etiket: "2.El",
    baslik: "2.El Telefonlar",
    aciklama: "Kontrol edilmiş, farklı marka ve modellerde 2.el telefonlar.",
    icon: Smartphone,
    kayitTipi: "ikisi-mevcut",
  },
  {
    etiket: "2.El",
    baslik: "2.El Notebook / Laptop",
    aciklama: "İş ve günlük kullanım için test edilmiş 2.el bilgisayarlar.",
    icon: Laptop,
  },
  {
    etiket: "2.El",
    baslik: "2.El Oyun Konsolları",
    aciklama: "Popüler oyun konsollarında kontrol edilmiş 2.el fırsatlar.",
    icon: Gamepad2,
  },
  {
    etiket: "2.El",
    baslik: "2.El Akıllı Saatler",
    aciklama: "Farklı markalarda test edilmiş 2.el akıllı saat seçenekleri.",
    icon: Watch,
  },
];

export interface KurulumHizmeti {
  baslik: string;
  aciklama: string;
  icon: LucideIcon;
}

export const KURULUM_HIZMETLERI: KurulumHizmeti[] = [
  {
    baslik: "Güvenlik Kamerası Kurulumu",
    aciklama:
      "Ev ve işyeriniz için ihtiyaca uygun güvenlik kamerası sistemi kurulumu ve sonrasında teknik destek.",
    icon: Camera,
  },
  {
    baslik: "Uydu Kurulumu",
    aciklama:
      "Uydu alıcı sistemlerinin satışı, kurulumu ve kanal ayarlarında uçtan uca destek.",
    icon: Satellite,
  },
  {
    baslik: "Anten Kurulumu",
    aciklama:
      "Anten sistemlerinin kurulumu ve sinyal optimizasyonu ile kesintisiz çekim.",
    icon: RadioTower,
  },
];
