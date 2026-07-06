# Printzen.app

Mobile Print Service Android uygulamasının tanıtım sitesi + termal/termal
transfer yazdırma konularında içerik portalı.

## Teknoloji

- **[Astro](https://astro.build)** (statik site üretici, sıfır varsayılan JS)
- **Tailwind CSS** — CDN üzerinden (`?plugins=typography`), build adımı yok
- **Barındırma:** Vercel (statik çıktı, ücretsiz katman)
- **Domain/DNS:** Cloudflare (bkz. `INFRASTRUCTURE.md`)

## Dil Yapısı (i18n)

Site iki dilde: İngilizce (varsayılan) ve Türkçe.

- **İngilizce sayfalar önek almaz:** `/`, `/guides`, `/terms` ...
- **Türkçe sayfalar `/tr/` önekiyle:** `/tr/`, `/tr/guides`, `/tr/terms` ...

Her sayfa **ayrı, tek dilde statik bir HTML dosyası** olarak üretilir — eski
"tek URL + CSS ile göster/gizle" yaklaşımı SEO için terk edildi (Google'ın
önerdiği `hreflang` + ayrı URL yöntemine geçildi, bkz. `astro.config.mjs`
`i18n` bloğu).

Her sayfa çiftinde:
- `<link rel="canonical">` — kendi URL'i
- `<link rel="alternate" hreflang="en"|"tr"|"x-default">` — karşılıklı bağlantı
- Nav'daki dil butonu artık JS toggle değil, karşı dildeki **gerçek sayfa linki**

Yeni bir sayfa eklerken diğer dildeki karşılığını da eklemeyi unutma —
`src/utils/i18n.ts`'deki `getAlternatePath()` fonksiyonu URL eşlemesini
otomatik yapar, sen sadece iki dosyayı da oluşturman yeterli.

## İçerik Yönetimi (Content Collections)

`src/content/` altında iki koleksiyon (bkz. `src/content/config.ts`):

### `printers` (data koleksiyonu, YAML)
Yazıcı uyumluluk veritabanı girişleri (`/printers`, `/tr/printers`). Her
dosya bir yazıcı modeli: marka, sınıf (mobile/desktop/industrial), bağlantı
tipi, komut dili, baskı türü, Mobile Print Service tarafından destek
durumu. `notes` alanı `{en, tr}` olarak iki dilli.

### `guides` (content koleksiyonu, Markdown)
Kurulum rehberleri (`/guides/[slug]`, `/tr/guides/[slug]`).
`src/content/guides/en/` ve `src/content/guides/tr/` altında **aynı dosya
adıyla** eşleştirilmiş çiftler halinde tutulur — örn.
`en/android-bluetooth-printer-setup.md` +
`tr/android-bluetooth-printer-setup.md`. Slug, klasör önekinden
(`en/`, `tr/`) arındırılarak üretilir.

Yeni rehber eklemek için: iki dilde de aynı dosya adıyla birer `.md`
oluştur, frontmatter'da `title`, `description`, `printerClass`,
(opsiyonel) `brand`, `publishDate` doldur.

## SEO

- **Sitemap:** `@astrojs/sitemap` ile otomatik üretilir (`/sitemap-index.xml`).
  ⚠️ Paket sürümü **3.2.1'e sabit** — daha yeni sürümler (3.3+) Astro 6 için
  build edilmiş, bu projedeki Astro 4 ile build hatası veriyor.
- **robots.txt:** `public/robots.txt`, sitemap'e referans veriyor
- **Structured data (JSON-LD):** `Organization` (sitewide, `BaseLayout.astro`),
  `Article` (rehber sayfalarında)
- **Open Graph / Twitter Card:** `BaseLayout.astro`'da, her sayfanın
  `title`/`description` prop'undan otomatik üretilir
- **Eksik:** Sosyal paylaşım için özel bir OG görseli (1200×630) yok — şu an
  paylaşımlarda görsel önizleme çıkmaz, ileride eklenmeli

## Sayfa Yapısı

```
src/pages/
  index.astro              (EN ana sayfa)
  terms.astro / privacy.astro / refund.astro
  guides/index.astro       (EN rehber listesi)
  guides/[slug].astro      (EN rehber detay — content collection'dan otomatik üretilir)
  printers/index.astro     (EN yazıcı veritabanı)
  activate.astro           (Türkçe özel: uygulama lisans aktivasyon deep-link sayfası, dil çiftlemesi yok)
  tr/
    index.astro / terms.astro / privacy.astro / refund.astro
    guides/index.astro / guides/[slug].astro
    printers/index.astro
```

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ üretir
npm run preview   # build çıktısını lokal sunar
```

## Deploy Akışı

`master` branch = production (`printzen.app`), Vercel otomatik deploy eder.
Yeni özellikler için ayrı branch aç → Vercel preview URL'inde kontrol et →
`master`'a merge et. Büyük altyapı değişiklikleri (ör. Astro migration,
i18n routing) tek seferlik, kapsamlı doğrulama sonrası merge edilir; küçük
içerik eklemeleri (yeni rehber/yazıcı) doğrudan küçük branch'lerle
aşamalı olarak canlıya alınabilir.

Detaylı altyapı (DNS, Play Billing, vs.) için bkz. `INFRASTRUCTURE.md`.
Portal içerik planı için bkz. `PLAN.md`.
