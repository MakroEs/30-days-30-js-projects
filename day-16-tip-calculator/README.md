# Gün 16 – Bahşiş Hesaplayıcı (Tip Calculator)

Bu proje, **30 Gün / 30 JavaScript Projects** serimin 16. gün projesidir.  
Amaç: Hesap tutarı, bahşiş oranı ve kişi sayısına göre kişi başı ödenecek tutarı hesaplayan basit bir araç geliştirmektir.

---

## 🎯 Proje Özeti

Bu bahşiş hesaplayıcı:

- Kullanıcıdan;
  - Hesap tutarını (₺)
  - Bahşiş oranını (%)
  - Kişi sayısını
    alır
- “Hesapla” butonuna basıldığında;
  - **Toplam bahşiş** tutarını
  - **Toplam ödenecek** tutarı
  - **Kişi başı ödeme** miktarını  
    hesaplar ve ekranda gösterir
- Geçersiz veya eksik girişlerde kullanıcıya uyarı mesajı gösterilir
- Enter tuşu ile de hesaplama yapılabilir

Uygulama tamamen **HTML + CSS + Vanilla JavaScript** ile geliştirilmiştir.

---

## 🖼️ Ekran Görüntüsü

`assets` klasöründe yer alır:

![Ekran Görüntüsü](./assets/screenshot.png)

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3**
- **JavaScript**
- `parseFloat`, `parseInt` kullanımı
- Temel sayısal validasyon (NaN, min değerler)
- Hesaplama sonuçlarını DOM’a yazma
- Basit finansal formatlama (`toFixed(2)`)

---

## 📁 Proje Yapısı

```text
day-16-tip-calculator/
│── index.html
│── style.css
│── app.js
└── assets/
     └── screenshot.png
```
