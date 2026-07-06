# Printzen.app — Portal Dönüşüm Planı

Mevcut tek sayfalık ürün landing sayfasını, termal/termal-transfer yazdırma alanında
detaylı bir içerik portalına dönüştürme planı.

## Kapsam

**Dahil:** Termal + termal transfer yazdırma. Üç yazıcı sınıfı: Mobil, Masaüstü, Endüstriyel.
Odak: **etiket yazdırma**. İkincil: **fiş (receipt/ESC-POS) yazdırma** — mevcut mobil
üründen geliyor.

**Hariç (şimdilik):** Ofis/lazer/inkjet yazdırma, 3D baskı.

> Not: Yeni konu başlıkları çıktıkça bu listeye eklenecek.

## Teknoloji

- Astro (statik/SEO odaklı, içerik koleksiyonları ile blog/rehber yönetimi)
- Barındırma: Vercel (mevcut, ücretsiz katmanda başla — gerçek trafik verisi gelince
  VPS/Pro kararı tekrar değerlendirilecek)
- Cloudflare DNS zaten önde (CDN/cache faydası)

## Ürün Tarafı (mevcut, sadeleştirilecek)

- Ana sayfa, Fiyatlandırma, İndir (Play Store)
- Sürüm notları / Changelog
- Geliştirici Dokümantasyonu — HTTP API (`/print`, `/status`) referansı

## Portal Bölümleri

### 1. Yazıcı Uyumluluk Veritabanı
Sınıf (Mobil / Masaüstü / Endüstriyel) × marka × bağlantı tipi (BT/WLAN/USB/Ethernet)
× komut dili filtresiyle aranabilir liste.

### 2. Kurulum Rehberleri
- Mobil: Android app akışı (BT/WLAN/USB eşleştirme)
- Masaüstü/Endüstriyel: Windows sürücü kurulumu + ZPL/TSPL komut gönderimi

### 3. Etiket Bilgi Bankası
- DPI seçimi (203 / 300 / 600)
- Thermal direct vs thermal transfer (ribbon: wax / resin / wax-resin)
- Gap sensör vs black-mark sensör
- Etiket boyutu standartları (kargo, barkod, gıda)

### 4. Fiş Yazdırma (Receipt)
ESC/POS tabanlı, mevcut mobil ürünle doğrudan bağlantılı, POS/perakende senaryosu.

### 5. Kullanım Senaryoları
Perakende (fiş) · Lojistik/kargo (etiket) · Depo/envanter (etiket) ·
Gıda üretim (ribbon dayanıklılık) · Sağlık (numune etiketi)

### 6. Sorun Giderme / SSS
Sınıfa özel hata sayfaları: ribbon sıkışması, etiket hizalama, kafa temizliği
(endüstriyel), BT bağlantı kopması (mobil), vb.

### 7. Terimler Sözlüğü
ZPL, EPL, TSPL, ESC/POS, CPCL, ribbon türleri, DPI ve benzeri terimler.

### 8. Yazıcı Karşılaştırma Aracı
Sınıflar arası + marka/model karşılaştırma tablosu.

## Sosyal Medya Bağlantıları

Printzen.app için tüm hesaplar yeni açılacak. Header/footer'a linkler eklenecek.

- LinkedIn (B2B/kurumsal içerik)
- YouTube (kurulum videoları / demo içerik)
- X / Twitter
- Instagram

**TODO: hesaplar açıldıkça kullanıcı adları buraya eklenecek.**

## Sıradaki Adım

Site haritası (sayfa listesi + URL yapısı) çıkarılacak, ardından Astro migrasyonuna
başlanacak.
