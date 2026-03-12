# Printzen Infrastructure

## Genel Bakış

```
Kullanıcı → printzen.app (Cloudflare → Vercel)
Satın alma → Paddle checkout → webhook → fly.io license server → Resend email
Destek → support@printzen.app (Cloudflare Email Routing → Gmail)
```

---

## 1. Domain — Cloudflare

**Registrar:** IHS (ihsdns.com)
**DNS Yönetimi:** Cloudflare
**Nameservers:** `crystal.ns.cloudflare.com`, `kellen.ns.cloudflare.com`

### DNS Kayıtları (Cloudflare)

| Type  | Name                  | Content                          | Açıklama             |
|-------|-----------------------|----------------------------------|----------------------|
| A     | printzen.app          | 76.76.21.21                      | Vercel               |
| CNAME | www                   | cname.vercel-dns.com             | Vercel www           |
| MX    | printzen.app          | route1/2/3.mx.cloudflare.net     | Email Routing        |
| MX    | send                  | feedback-smtp.us-east-1.amazonses.com | Resend SPF      |
| TXT   | printzen.app          | v=spf1 include:_spf.mx.clo...   | Cloudflare SPF       |
| TXT   | resend._domainkey     | p=MIGfMA0GCSqGSIb...            | Resend DKIM          |
| TXT   | send                  | v=spf1 include:amazonses...     | Resend SPF           |
| TXT   | _dmarc                | v=DMARC1; p=none;               | DMARC                |
| TXT   | cf2024-1._domainkey   | v=DKIM1; h=sha256...            | Cloudflare DKIM      |

### Email Routing
- `support@printzen.app` → Gmail'e yönlendirildi

---

## 2. Website — Vercel

**Repo:** github.com/Mustafa-Colak/printzen-website
**Branch:** master (auto-deploy)
**URL:** https://printzen.app

### Dosyalar
- `index.html` — Ana sayfa + Paddle checkout
- `terms.html` — Kullanım Şartları
- `privacy.html` — Gizlilik Politikası
- `refund.html` — İade Politikası

---

## 3. Ödeme — Paddle Billing

**Dashboard:** https://vendors.paddle.com
**Durum:** Live (hesap onaylandı)
**printzen.app:** Domain Approved ✓

### Ürünler & Fiyatlar

| Plan     | Fiyat | Cihaz | Price ID                          | Product ID                        |
|----------|-------|-------|-----------------------------------|-----------------------------------|
| Basic    | $15   | 1     | pri_01kkgzak9b6yvvs7t2ajdtk2ay   | pro_01kkgz546dmg49tgn981vnt8eh   |
| Standard | $49   | 5     | pri_01kkgzd07mp4hw2c39apyfxqhs   | pro_01kkgz546dmg49tgn981vnt8eh   |
| Business | $89   | 10    | pri_01kkgzn5q0r7fkyctf2t6cgvwa   | pro_01kkgz546dmg49tgn981vnt8eh   |

### Webhook
- **URL:** `https://license-server-mps.fly.dev/webhook/paddle`
- **Events:** transaction.completed, subscription.activated/resumed/past_due/paused/canceled
- **Secret:** fly.io secret `PADDLE_WEBHOOK_SECRET`

### API Key
- **Name:** license-server
- **Expires:** 2026-12-31 (90 gün)
- **Permissions:** Customers → Read
- **Key:** fly.io secret `PADDLE_API_KEY`

### Client-side Token
- **Token:** `live_a232701421a84ae13568067ed6e`
- **Kullanım:** index.html `Paddle.Initialize()`

---

## 4. License Server — fly.io

**App:** license-server-mps
**URL:** https://license-server-mps.fly.dev
**Repo:** c:\edev\license-server
**DB:** SQLite (`/data/licenses.db`)

### Endpoints

| Method | Path                        | Açıklama                    |
|--------|-----------------------------|-----------------------------|
| POST   | /webhook/paddle             | Paddle ödeme webhook        |
| POST   | /webhook/lemonsqueezy       | (eski, kullanılmıyor)       |
| GET    | /api/license/activate       | Lisans aktivasyonu          |
| GET    | /api/license/verify         | Lisans doğrulama            |
| GET    | /api/release/latest         | Güncelleme kontrolü         |
| GET    | /admin/*                    | Admin paneli                |
| GET    | /health                     | Health check                |

### fly.io Secrets

| Secret                  | Açıklama                        |
|-------------------------|---------------------------------|
| ADMIN_API_KEY           | Admin panel API key             |
| PADDLE_API_KEY          | Paddle API key (Customers:Read) |
| PADDLE_WEBHOOK_SECRET   | Paddle webhook imza secret      |
| RESEND_API_KEY          | Resend SMTP API key             |
| EMAIL_FROM              | MobilePrint <noreply@printzen.app> |

### Deploy
```bash
cd c:\edev\license-server
fly deploy
```

---

## 5. Email — Resend

**Dashboard:** https://resend.com
**Domain:** printzen.app (DKIM doğrulaması devam ediyor — DNS propagation sonrası tamamlanacak)
**SMTP:** smtp.resend.com:465, user=resend, pass=RESEND_API_KEY
**From:** `MobilePrint <noreply@printzen.app>`
**Subject:** `{ProductName} — Your License Key`

---

## 6. Android App — Google Play / GitHub Releases

**Package:** com.mobileprint.service
**Releases:** c:\edev\mobile-print-service-android\releases\
**Current:** v2.2.7

### Lisans Aktivasyonu (Uygulama)
- Ayarlar → Lisans → Anahtar gir
- License server: `https://license-server-mps.fly.dev`

---

## Akış: Satın Alma → Lisans

```
1. Kullanıcı printzen.app'te "Buy Now" tıklar
2. Paddle.js overlay açılır (kredi kartı, PayPal, Apple Pay)
3. Ödeme tamamlanınca Paddle webhook gönderir → /webhook/paddle
4. License server:
   a. Paddle API'den customer email alır
   b. License key üretir (XXXX-XXXX-XXXX-XXXX)
   c. SQLite'a kaydeder
   d. Resend SMTP ile email gönderir
5. Kullanıcı email'deki key'i uygulamaya girer
6. Uygulama /api/license/activate çağırır
7. Server key'i aktif eder, device kaydeder
```
