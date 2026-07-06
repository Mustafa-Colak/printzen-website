---
title: "Zebra Yazıcıda ZPL ile Etiket Yazdırma (Windows)"
description: "Zebra masaüstü etiket yazıcılarında ZPL komut dili nasıl çalışır, Windows'tan doğrudan ZPL göndermenin yolları nelerdir?"
printerClass: desktop
brand: Zebra
publishDate: 2026-07-06
translationKey: zebra-zpl-label-printing
---

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
