# Gün 18 – BMI (Vücut Kitle İndeksi) Hesaplayıcı

Bu proje, **30 Gün / 30 JavaScript Projects** serimin 18. gün projesidir.  
Amaç: Kullanıcının boy ve kilosuna göre **BMI (Body Mass Index / Vücut Kitle İndeksi)** değerini ve buna karşılık gelen kategoriyi hesaplayan basit bir araç geliştirmektir.

---

## 🎯 Proje Özeti

Bu BMI hesaplayıcı:

- Kullanıcıdan;
  - Boy (cm)
  - Kilo (kg)
    değerlerini alır
- “Hesapla” butonuna basıldığında;
  - **BMI değerini** hesaplar
  - Bu değere karşılık gelen **kategoriyi** gösterir:
    - Zayıf
    - Normal
    - Fazla Kilolu
    - Obez
- Geçersiz/eksik girişlerde kullanıcıya uyarı mesajı gösterilir
- Enter tuşu ile de hesaplama yapılabilir
- Duruma göre yazı rengi değişir (renkli görsel feedback)

> Kullanılan formül:  
> **BMI = kilo (kg) / boy² (m²)**

---

## 🖼️ Ekran Görüntüsü

`assets` klasöründe yer alır:

![Ekran Görüntüsü](./assets/screenshot.png)

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3**
- **JavaScript**
- `parseFloat` ile numeric input okuma
- Temel validasyon (NaN, min değer kontrolü)
- Matematiksel hesaplama:
  - cm → metre çevirme
  - BMI formülü ile hesaplama
- Duruma göre sınıf değiştirme:
  - `classList.add / remove` ile durum renkleri
- DOM manipülasyonu ile:
  - Sonuç ve hata mesajlarını ekrana yazma

---

## 📁 Proje Yapısı

```text
day-18-bmi-calculator/
│── index.html
│── style.css
│── app.js
└── assets/
     └── screenshot.png
```
