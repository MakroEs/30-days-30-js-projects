const targetTextEl = document.getElementById("target-text");
const inputArea = document.getElementById("input-area");
const timeLeftEl = document.getElementById("time-left");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const messageEl = document.getElementById("message");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const TEST_DURATION = 30; // saniye
let timeLeft = TEST_DURATION;
let timerId = null;
let isRunning = false;

let totalTyped = 0;
let correctTyped = 0;

const sentences = [
  "JavaScript ile küçük projeler yaparak pratik yapmak en iyi öğrenme yoludur.",
  "Temiz ve okunabilir kod yazmak, uzun vadede sana her zaman zaman kazandırır.",
  "Küçük adımlarla başla, düzenli tekrar et ve asla pes etme.",
  "Bir problemi çözmenin birden fazla yolu vardır, önemli olan mantığını anlamaktır.",
];

function getRandomSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

function setMessage(text, type = "info") {
  messageEl.textContent = text;
  messageEl.className = "message " + type;
}

function startTest() {
  if (isRunning) return;

  targetTextEl.textContent = getRandomSentence();
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();

  timeLeft = TEST_DURATION;
  timeLeftEl.textContent = timeLeft;

  totalTyped = 0;
  correctTyped = 0;
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0%";

  setMessage("Süre başladı, yazmaya devam et!", "info");

  isRunning = true;

  timerId = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endTest();
    }
  }, 1000);
}

function endTest() {
  clearInterval(timerId);
  isRunning = false;
  inputArea.disabled = true;

  const minutes = TEST_DURATION / 60;
  const words = inputArea.value.trim().split(/\s+/).filter(Boolean).length;
  const wpm = Math.round(words / minutes);

  const accuracy =
    totalTyped === 0 ? 0 : Math.round((correctTyped / totalTyped) * 100);

  wpmEl.textContent = isNaN(wpm) ? "0" : wpm;
  accuracyEl.textContent = accuracy + "%";

  setMessage(
    `Test bitti! WPM: ${wpmEl.textContent}, Doğruluk: ${accuracy}%`,
    "success"
  );
}

function resetTest() {
  clearInterval(timerId);
  isRunning = false;

  timeLeft = TEST_DURATION;
  timeLeftEl.textContent = timeLeft;

  totalTyped = 0;
  correctTyped = 0;
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0%";

  targetTextEl.textContent = getRandomSentence();
  inputArea.value = "";
  inputArea.disabled = true;

  setMessage('Başlamak için "Başlat" butonuna tıkla.', "info");
}

inputArea.addEventListener("input", () => {
  const target = targetTextEl.textContent;
  const typed = inputArea.value;

  totalTyped = typed.length;

  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) {
      correct++;
    }
  }
  correctTyped = correct;

  if (!isRunning && timeLeft === 0) return;
});

startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !isRunning) {
    startTest();
  }
});

resetTest();
