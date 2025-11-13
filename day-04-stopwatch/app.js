const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let baslangicZamani = null;
let gecenSure = 0;
let intervalId = null;
let calisiyorMu = false;
function ikiHaneli(sayi) {
  return sayi.toString().padStart(2, "0");
}

function sureyiFormatla(ms) {
  const toplamSaniye = Math.floor(ms / 1000);
  const dakika = Math.floor(toplamSaniye / 60);
  const saniye = toplamSaniye % 60;

  const salise = Math.floor((ms % 1000) / 10);

  return `${ikiHaneli(dakika)}:${ikiHaneli(saniye)}.${ikiHaneli(salise)}`;
}

function ekraniGuncelle() {
  timeDisplay.textContent = sureyiFormatla(gecenSure);

  timeDisplay.style.transform = "scale(1.03)";
  setTimeout(() => {
    timeDisplay.style.transform = "scale(1)";
  }, 80);
}

startBtn.addEventListener("click", function () {
  if (calisiyorMu) return;

  calisiyorMu = true;
  baslangicZamani = Date.now() - gecenSure;

  intervalId = setInterval(() => {
    gecenSure = Date.now() - baslangicZamani;
    ekraniGuncelle();
  }, 10);
});

stopBtn.addEventListener("click", function () {
  if (!calisiyorMu) return;

  calisiyorMu = false;
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function () {
  calisiyorMu = false;
  clearInterval(intervalId);
  gecenSure = 0;
  ekraniGuncelle();
});

ekraniGuncelle();
