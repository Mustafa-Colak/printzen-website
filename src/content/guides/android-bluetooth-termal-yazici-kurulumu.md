---
title:
  en: "Bluetooth Thermal Printer Setup on Android"
  tr: "Android'de Bluetooth Termal Yazıcı Kurulumu"
description:
  en: "Connect your Android phone or tablet to a Bluetooth thermal printer and print receipts or labels from the system print dialog."
  tr: "Android telefon veya tabletinizi Bluetooth termal yazıcıya bağlayıp sistem yazdırma menüsünden fiş veya etiket basmayı öğrenin."
printerClass: mobile
publishDate: 2026-07-06
---

<div class="en">

Android's built-in Print Service framework lets any app (Chrome, Google Docs, e-commerce apps, etc.) print directly to a thermal printer once a print service is installed. This guide covers pairing a Bluetooth thermal printer with your Android device.

## 1. Pair the printer

Turn on the printer and pair it from Android's Bluetooth settings (Settings → Connected devices → Pair new device). Most thermal printers use a default pairing PIN of `0000` or `1234`.

## 2. Install a print service

A print service app (such as Mobile Print Service) is the bridge that tells Android "I can print to these devices." After installing it, confirm it's enabled under Settings → Printing.

## 3. Add the printer

Open the print service app and select your paired Bluetooth printer from the list. The connection protocol (e.g. ESC/POS) is usually auto-detected based on the printer brand.

## 4. Print from any app

Open the system print dialog from Chrome, Google Docs, or any app's share/print menu, and your printer will appear as an available option.

## Common issues

- **Printer doesn't show up** — make sure Bluetooth pairing completed and the print service is enabled in Settings.
- **Prints but output is garbled** — confirm the printer's command language (ESC/POS, SII SDK, etc.) is supported by the print service; an unsupported command language can corrupt text or barcodes.
- **Connection keeps dropping** — check Bluetooth range and make sure battery-saving modes aren't killing the connection.

</div>

<div class="tr">

Android'in yerleşik Print Service çerçevesi, bir yazdırma servisi kurulduğunda herhangi bir uygulamadan (Chrome, Google Docs, e-ticaret uygulamaları vb.) doğrudan termal yazıcıya baskı almanıza izin verir. Bu rehber, Bluetooth bağlantılı bir termal yazıcıyı Android cihazınıza tanıtma adımlarını anlatır.

## 1. Yazıcıyı eşleştirin

Yazıcıyı açın ve Android'in Bluetooth ayarlarından (Ayarlar → Bağlı cihazlar → Yeni cihaz eşle) yazıcıyı bulup eşleştirin. Çoğu termal yazıcıda varsayılan eşleştirme PIN'i `0000` veya `1234`'tür.

## 2. Yazdırma servisini kurun

Bir Print Service uygulaması (örneğin Mobile Print Service), Android'e "bu cihazlara yazdırabilirim" bilgisini veren köprüdür. Uygulamayı kurduktan sonra Ayarlar → Yazdırma bölümünden servisin etkin olduğunu doğrulayın.

## 3. Yazıcıyı ekleyin

Yazdırma servisi uygulamasını açıp eşleştirdiğiniz Bluetooth yazıcıyı listeden seçin. Yazıcı markasına göre bağlantı protokolü (örneğin ESC/POS) otomatik algılanır.

## 4. Herhangi bir uygulamadan yazdırın

Artık Chrome'da bir sayfayı, Google Dosyalar'da bir belgeyi veya herhangi bir uygulamanın paylaşım/yazdırma menüsünü kullanarak sistem yazdırma dialogunu açtığınızda yazıcınızı seçenekler arasında görebilirsiniz.

## Sık karşılaşılan sorunlar

- **Yazıcı listede görünmüyor** — Bluetooth eşleştirmesinin tamamlandığından ve yazdırma servisinin Ayarlar'da etkin olduğundan emin olun.
- **Baskı alınıyor ama bozuk çıkıyor** — yazıcının komut dilinin (ESC/POS, SII SDK vb.) yazdırma servisi tarafından desteklendiğinden emin olun; desteklenmeyen bir komut dili karakter/barkod bozulmalarına yol açabilir.
- **Bağlantı sık kopuyor** — Bluetooth menzili ve pil tasarrufu modlarının bağlantıyı kesmediğinden emin olun.

</div>
