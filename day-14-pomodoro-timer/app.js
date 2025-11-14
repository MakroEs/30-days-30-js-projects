const timeDisplay = document.getElementById("time-display");
const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const statusText = document.getElementById("status-text");
const modeButtons = document.querySelectorAll(".mode-btn");

let currentMode = "work"; //
let remainingSeconds = 25 * 60;
let intervalId = null;
let isRunning = false;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function setMode(mode, minutes) {
  currentMode = mode;
  remainingSeconds = minutes * 60;
  isRunning = false;
  clearInterval(intervalId);
  intervalId = null;
  startPauseBtn.textContent = "Başlat";

  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  if (mode === "work") {
    statusText.textContent = "Çalışma modundasın. Odaklanma zamanı 💪";
  } else {
    statusText.textContent = "Mola modundasın. Biraz nefes al ☕";
  }

  updateDisplay();
}

// Timer'ı başlat
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startPauseBtn.textContent = "Durdur";

  statusText.textContent =
    currentMode === "work"
      ? "Odaklan, süre akıyor... 🔥"
      : "Rahatla, mola zamanı 😌";

  intervalId = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      isRunning = false;
      remainingSeconds = 0;
      updateDisplay();

      if (currentMode === "work") {
        statusText.textContent = "Çalışma süresi bitti, mola zamanı! ☕";
      } else {
        statusText.textContent = "Mola bitti, tekrar çalışmaya hazırsın! 💼";
      }

      startPauseBtn.textContent = "Başlat";
      return;
    }

    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(intervalId);
  intervalId = null;
  startPauseBtn.textContent = "Başlat";
  statusText.textContent = "Zaman durduruldu. Devam etmek için tekrar başlat.";
}

function resetTimer() {
  const activeBtn = document.querySelector(".mode-btn.active");
  const minutes = parseInt(activeBtn.dataset.minutes, 10);

  isRunning = false;
  clearInterval(intervalId);
  intervalId = null;
  remainingSeconds = minutes * 60;
  startPauseBtn.textContent = "Başlat";

  if (currentMode === "work") {
    statusText.textContent =
      "Çalışma süresi sıfırlandı. Hazırsan tekrar başlat.";
  } else {
    statusText.textContent = "Mola süresi sıfırlandı.";
  }

  updateDisplay();
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.mode;
    const minutes = parseInt(btn.dataset.minutes, 10);
    setMode(mode, minutes);
  });
});

startPauseBtn.addEventListener("click", () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

setMode("work", 25);
