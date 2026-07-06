---
title:
  en: "Printing Labels with ZPL on a Zebra Printer (Windows)"
  tr: "Zebra Yazıcıda ZPL ile Etiket Yazdırma (Windows)"
description:
  en: "How ZPL works on Zebra desktop label printers, and how to send ZPL directly from Windows."
  tr: "Zebra masaüstü etiket yazıcılarında ZPL komut dili nasıl çalışır, Windows'tan doğrudan ZPL göndermenin yolları nelerdir?"
printerClass: desktop
brand: Zebra
publishDate: 2026-07-06
---

<div class="en">

Most of Zebra's desktop and industrial label printers use the **ZPL (Zebra Programming Language)** command language. ZPL is a plain-text command set — you describe the position, size, and content of text, barcodes, and lines on a label with commands.

## How ZPL works

A simple ZPL label looks like this:

```
^XA
^FO50,50^A0N,40,40^FDHello^FS
^XZ
```

- `^XA` / `^XZ` — start and end of the label
- `^FO50,50` — field position (x=50, y=50 dots)
- `^A0N,40,40` — font and size
- `^FD...^FS` — the text to print

## Ways to send ZPL from Windows

1. **Zebra Setup Utilities** — Zebra's official tool; installs the printer driver and can send raw ZPL commands directly to the printer for testing.
2. **Raw socket over the network** — Ethernet/Wi-Fi connected Zebra printers typically listen on port 9100; sending raw ZPL text over a socket to that port triggers printing.
3. **USB + printer driver** — once Zebra's Windows driver is installed, the printer is listed as a "generic/text only" or ZPL-compatible printer, and applications can print through that driver.

## Label size and DPI

Coordinates in ZPL commands are in **dots**, not millimeters — so the printer's DPI (203, 300, or 600) matters. For example, 1 inch = 203 dots at 203 DPI; the same ZPL code prints at a different physical size on a 300 DPI printer.

## Thermal direct vs thermal transfer

Some models like the ZD220 only work with heat-sensitive paper (thermal direct), while models like the GK420t and ZT411 can also print on plain labels using a ribbon (wax/resin) — thermal transfer. On ribbon-based models, you also need to enable ribbon mode in the printer settings in addition to the ZPL code.

> Note: Mobile Print Service does not currently support the ZPL command language — this guide is intended as general information about the ZPL/Zebra ecosystem.

</div>

<div class="tr">

Zebra'nın masaüstü ve endüstriyel etiket yazıcılarının büyük çoğunluğu **ZPL (Zebra Programming Language)** komut dilini kullanır. ZPL, düz metin tabanlı bir komut kümesidir — bir etiketin üzerindeki metin, barkod ve çizgilerin konumunu, boyutunu ve içeriğini komutlarla tarif edersiniz.

## ZPL nasıl çalışır

Basit bir ZPL etiketi şöyle görünür:

```
^XA
^FO50,50^A0N,40,40^FDMerhaba^FS
^XZ
```

- `^XA` / `^XZ` — etiket başlangıcı ve bitişi
- `^FO50,50` — alanın konumu (x=50, y=50 nokta)
- `^A0N,40,40` — yazı tipi ve boyutu
- `^FD...^FS` — yazdırılacak metin

## Windows'tan ZPL gönderme yolları

1. **Zebra Setup Utilities** — Zebra'nın resmi aracı; yazıcı sürücüsünü kurar ve ham ZPL komutlarını doğrudan yazıcıya test amaçlı gönderebilirsiniz.
2. **Ağ üzerinden ham soket bağlantısı** — Ethernet/Wi-Fi bağlantılı Zebra yazıcılar genellikle 9100 portunda dinler; bu porta ham ZPL metnini bir soket üzerinden göndermek yazdırma işlemini başlatır.
3. **USB + yazıcı sürücüsü** — Zebra'nın Windows sürücüsü kurulduğunda, sürücü bir "generic/text only" veya ZPL uyumlu yazıcı olarak listelenir; uygulamalar bu sürücü üzerinden yazdırabilir.

## Etiket boyutu ve DPI seçimi

ZPL komutlarındaki koordinatlar **nokta (dot)** cinsindendir, milimetre değil — bu yüzden yazıcının DPI değeri (203, 300 veya 600 DPI) önemlidir. Örneğin 203 DPI bir yazıcıda 1 inç = 203 nokta; aynı ZPL kodu 300 DPI bir yazıcıda farklı fiziksel boyutta basılır.

## Thermal direct vs thermal transfer

ZD220 gibi bazı modeller yalnızca ısıya duyarlı kağıtla (thermal direct) çalışırken, GK420t ve ZT411 gibi modeller ribbon (wax/resin) kullanarak sıradan etikete de basabilir (thermal transfer). Ribbon kullanan modellerde ZPL koduna ek olarak yazıcı ayarlarından ribbon modunun etkinleştirilmesi gerekir.

> Not: Mobile Print Service uygulaması şu anda ZPL komut dilini desteklemiyor — bu rehber, genel ZPL/Zebra ekosistemi hakkında bilgi vermek amaçlıdır.

</div>
