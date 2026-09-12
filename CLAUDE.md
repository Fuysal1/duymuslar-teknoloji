# Duymuşlar Teknoloji — Proje Rehberi

Bu dosya, bu projede çalışırken senin (Claude Code) her oturumda otomatik
okuman gereken kurallardır. Buradaki kararlardan sapma; tutarlılık en
önemli önceliktir.

## Firma
- **Ad:** Duymuşlar Teknoloji
- **Sektör:** Telefon ağırlıklı elektronik/teknoloji satışı, 2.el cihaz
  alım-satımı, güvenlik kamerası kurulumu, uydu & anten kurulum ve satışı.
- **Ton:** Güven veren, profesyonel ama soğuk değil. Teknik konuları
  sade ve anlaşılır anlat, jargon kullanma.
- **Dil:** Sadece Türkçe.

## Tasarım Dili — "Apple tarzı" minimalizm
Referans: apple.com'un sunum mantığı (kendi tasarımımızı, kendi
içeriğimizle üretiyoruz — Apple'ın logosu, marka varlıkları veya
telif hakkı olan görselleri asla kullanılmayacak).

- **Bol negatif alan (whitespace).** Bölümler arası nefes payı bırak,
  sıkışık görünmesin.
- **Büyük, kaliteli görsel/ürün odağı.** Her ana bölümde tek bir güçlü
  görsel veya ürün vurgusu olsun, çok fazla eleman üst üste binmesin.
- **Sade tipografi.** Tek bir sans-serif font ailesi (örn. Inter veya
  Geist), az sayıda font ağırlığı (regular/medium/semibold).
- **Yumuşak scroll/geçiş animasyonları.** Abartılı değil, ince ve akıcı
  (fade-in, hafif translate). Framer Motion kullanılabilir.
- **Renk paleti (varsayılan — logo geldiğinde güncellenecek):**
  - Zemin: `#FFFFFF` (açık) / `#0A0A0A` (koyu bölümler)
  - Metin: `#1D1D1F` (Apple'ın kullandığı tona yakın nötr koyu gri)
  - Vurgu rengi: `#0071E3` (elektrik mavisi — CTA butonları, linkler)
  - Nötr gri tonlar: `#F5F5F7`, `#86868B`
- **Butonlar:** Yuvarlak köşeli (pill/rounded-full), net CTA metinleri
  ("Hemen İncele", "Teklif Al", "Bize Ulaşın").

## Sayfa Yapısı
1. **Ana Sayfa** — Hero (güçlü görsel + tek cümlelik değer önermesi),
   ardından 4 hizmet alanına kısa vitrin bölümleri, güven unsurları
   (yıl deneyimi, müşteri sayısı vb. varsa), kapanışta CTA.
2. **Hakkımızda** — Firma hikayesi, neden Duymuşlar Teknoloji, ekip/
   mağaza fotoğrafı için görsel alanı.
3. **Hizmetler** — Dört net alt başlık halinde:
   - Telefon & Elektronik Satış
   - 2.El Cihaz Alım-Satım
   - Güvenlik Kamerası Kurulumu
   - Uydu & Anten Kurulum/Satış
4. **İletişim** — Adres, telefon, harita gömme alanı, basit iletişim
   formu.

## Teknik Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui bileşenleri (buton, kart, form, accordion vb. için)
- Framer Motion (scroll animasyonları için)
- Görseller: gerçek ürün/mağaza fotoğrafı yoksa yer tutucu (placeholder)
  kullan, temini konusunda kullanıcıya sor — sahte marka logosu/gerçek
  ürün görseli uydurma.

## Çalışma Kuralları
- Yeni bir bileşen gerektiğinde önce shadcn MCP ile ara/kur, sıfırdan
  yazma.
- Kullandığın kütüphane API'lerinden emin değilsen Context7 MCP ile
  güncel dokümantasyonu çek.
- Bir sayfayı bitirdiğinde Playwright MCP ile tarayıcıda aç, düzeni ve
  responsive görünümü (mobil + masaüstü) kontrol et.
- Metinleri (başlık, açıklama) taslak olarak sen yaz, ama kullanıcıya
  "bu metinleri firma onaylamalı" diye hatırlat.
