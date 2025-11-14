# Gün 24 – Random Quote Generator (Rastgele Alıntı Üretici)

Bu proje, **30 Gün / 30 JavaScript Projects** serimin 24. günüdür.

Amaç: Kullanıcının tek tıkla rastgele ilham verici alıntılar görebildiği, alıntıları panoya kopyalayabildiği basit bir alıntı üretici aracı geliştirmektir.

---

## 🎯 Özellikler

- İçerisinde metin, yazar ve kategori bilgisi bulunan sabit bir alıntı listesi
- “Yeni Alıntı” butonuna basıldığında listedeki alıntılardan rastgele birini gösterme
- Aynı alıntının üst üste iki kez gelmesini engelleme
- Alıntı metnini ve yazar bilgisini tek tıkla panoya kopyalama
- Kategori bilgisini rozet (badge) şeklinde gösterme
- Klavye kısayolları:
  - `Enter` → Yeni alıntı
  - `Ctrl + C` (veya `Cmd + C`) → Geçerli alıntıyı kopyala

---

## 🖼️ Ekran Görüntüsü

`assets` klasöründe yer alır:

![Ekran Görüntüsü](./assets/image.png)

---

## 🛠️ Kullanılan Teknolojiler

- HTML5
  - Başlık, alıntı metni, yazar ve buton yapıları
- CSS3
  - Kart tabanlı modern arayüz tasarımı
  - Kategori rozeti (badge) tasarımı
  - Buton stilleri ve temel tipografi
- JavaScript
  - Sabit alıntı listesi (dizi içinde nesneler)
  - Rastgele index seçimi (`Math.random`, `Math.floor`)
  - Son gösterilen index’i tutarak tekrar eden alıntıyı engelleme
  - `navigator.clipboard.writeText` ile panoya kopyalama (fallback ile)
  - DOM manipülasyonu ile metin, yazar ve kategori alanlarını dinamik güncelleme
  - Klavye event’leri ile kısayol desteği

---

## 📁 Proje Yapısı

```text
day-24-random-quote/
│── index.html
│── style.css
│── app.js
└── assets/
     └── screenshot.png
```
