const gunIsimleri = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const ayIsimleri = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const timeDisplay = document.getElementById("time-display");
const dateDisplay = document.getElementById("date-display");

function ikiHaneliSayi(sayi) {
  return sayi.toString().padStart(2, "0");
}

function saatiGuncelle() {
  const simdi = new Date();

  const saat = simdi.getHours();
  const dakika = simdi.getMinutes();
  const saniye = simdi.getSeconds();

  const gun = simdi.getDate();
  const ay = simdi.getMonth();
  const yil = simdi.getFullYear();
  const gunIndex = simdi.getDay();

  const zamanMetni = `${ikiHaneliSayi(saat)}:${ikiHaneliSayi(
    dakika
  )}:${ikiHaneliSayi(saniye)}`;

  const tarihMetni = `${gun} ${ayIsimleri[ay]} ${yil} ${gunIsimleri[gunIndex]}`;

  timeDisplay.textContent = zamanMetni;
  dateDisplay.textContent = tarihMetni;

  timeDisplay.style.transform = "scale(1.04)";
  setTimeout(() => {
    timeDisplay.style.transform = "scale(1)";
  }, 150);
}

saatiGuncelle();

setInterval(saatiGuncelle, 1000);
