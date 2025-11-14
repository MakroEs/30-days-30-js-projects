# Gün 19 – Yaş Hesaplayıcı (Age Calculator)

Bu proje, **30 Gün / 30 JavaScript Projects** serimin 19. gün projesidir.  
Amaç: Kullanıcının doğum tarihine göre, bugüne göre **tam yaşını (yıl / ay / gün)** hesaplayan basit bir araç geliştirmektir.

---

## 🎯 Proje Özeti

Bu yaş hesaplayıcı:

- Kullanıcıdan;
  - Doğum tarihini (`input type="date"`)
    alır
- “Hesapla” butonuna basıldığında;
  - Bugünkü tarihe göre:
    - Kaç **yıl**
    - Kaç **ay**
    - Kaç **gün**
      yaşında olduğunu hesaplar
- Gelecekte bir tarih seçilirse uyarı verir
- Enter tuşu ile de hesaplama yapılabilir

Uygulama tamamen **HTML + CSS + Vanilla JavaScript** ile geliştirilmiştir.

---

## 🖼️ Ekran Görüntüsü

`assets` klasöründe yer alır:

![Ekran Görüntüsü](./assets/image.png)

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
  - `input type="date"` ile tarih seçimi
- **CSS3**
  - Kart tasarımı
  - Grid yapısıyla sonuç kutucukları
- **JavaScript**
  - `Date` objesi ile tarih hesaplama
  - Yıl / ay / gün farkını bulma
  - Ay ve gün için “borç alma” mantığı:
    - Gün negatifse önceki aydan gün alma
    - Ay negatifse önceki yıldan ay alma
  - Fonksiyonlar:
    - `daysInMonth(year, monthIndex)` ile ayın gün sayısını bulma

---

## 📁 Proje Yapısı

```text
day-19-age-calculator/
│── index.html
│── style.css
│── app.js
└── assets/
     └── screenshot.png
```
