const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.getElementById("reset-btn");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const previousGuessesEl = document.getElementById("previous-guesses");

const MIN = 1;
const MAX = 100;

let secretNumber;
let attempts;
let isGameOver;
let previousGuesses = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setMessage(text, type = "info") {
  messageEl.textContent = text;
  messageEl.className = "message " + type;
}

function updateUI() {
  attemptsEl.textContent = attempts;
  previousGuessesEl.textContent =
    previousGuesses.length > 0 ? previousGuesses.join(", ") : "-";
}

function handleGuess() {
  if (isGameOver) {
    setMessage("Oyun bitti. Yeniden başlatmak için butona tıkla.", "error");
    return;
  }

  const value = parseInt(guessInput.value, 10);

  if (isNaN(value)) {
    setMessage("Lütfen bir sayı gir.", "error");
    return;
  }

  if (value < MIN || value > MAX) {
    setMessage(`Lütfen ${MIN} ile ${MAX} arasında bir sayı gir.`, "error");
    return;
  }

  attempts++;
  previousGuesses.push(value);
  updateUI();

  if (value === secretNumber) {
    setMessage(
      `🎉 Tebrikler! ${attempts} denemede sayıyı buldun. (${secretNumber})`,
      "success"
    );
    isGameOver = true;
  } else if (value < secretNumber) {
    setMessage("Daha büyük bir sayı dene ⬆️", "info");
  } else {
    setMessage("Daha küçük bir sayı dene ⬇️", "info");
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = getRandomNumber(MIN, MAX);
  attempts = 0;
  isGameOver = false;
  previousGuesses = [];
  guessInput.value = "";
  setMessage("Başlamak için bir tahmin gir.", "info");
  updateUI();
  guessInput.focus();
}

guessBtn.addEventListener("click", handleGuess);

guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleGuess();
  }
});

resetBtn.addEventListener("click", resetGame);

resetGame();
