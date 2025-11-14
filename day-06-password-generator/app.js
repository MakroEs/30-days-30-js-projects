const passwordOutput = document.getElementById("password-output");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");

const lengthRange = document.getElementById("length-range");
const lengthValue = document.getElementById("length-value");

const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const symbolsCheckbox = document.getElementById("symbols-checkbox");

const message = document.getElementById("message");

const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sayilar = "0123456789";
const semboller = "!@#$%&*?-_";

lengthRange.addEventListener("input", function () {
  lengthValue.textContent = lengthRange.value;
});

function rastgeleKarakterSec(karakterSeti) {
  const rastgeleIndex = Math.floor(Math.random() * karakterSeti.length);
  return karakterSeti[rastgeleIndex];
}

function sifreUret() {
  const uzunluk = parseInt(lengthRange.value, 10);

  let aktifSetler = [];

  if (lowercaseCheckbox.checked) aktifSetler.push(kucukHarfler);
  if (uppercaseCheckbox.checked) aktifSetler.push(buyukHarfler);
  if (numbersCheckbox.checked) aktifSetler.push(sayilar);
  if (symbolsCheckbox.checked) aktifSetler.push(semboller);

  if (aktifSetler.length === 0) {
    message.textContent = "Lütfen en az bir karakter türü seç.";
    passwordOutput.value = "";
    return;
  }

  let sifre = "";

  aktifSetler.forEach((set) => {
    sifre += rastgeleKarakterSec(set);
  });

  while (sifre.length < uzunluk) {
    const rastgeleSet =
      aktifSetler[Math.floor(Math.random() * aktifSetler.length)];
    sifre += rastgeleKarakterSec(rastgeleSet);
  }

  sifre = sifre
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordOutput.value = sifre;
  message.textContent = "Yeni şifre oluşturuldu.";
}

generateBtn.addEventListener("click", sifreUret);

copyBtn.addEventListener("click", async function () {
  const text = passwordOutput.value.trim();

  if (!text) {
    message.textContent = "Önce bir şifre üretmelisin.";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    message.textContent = "Şifre panoya kopyalandı ";
  } catch (err) {
    message.textContent = "Kopyalama sırasında bir hata oluştu.";
  }
});
