const choiceButtons = document.querySelectorAll(".choice-btn");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const drawScoreEl = document.getElementById("draw-score");
const playerMoveEl = document.getElementById("player-move");
const computerMoveEl = document.getElementById("computer-move");
const resultTextEl = document.getElementById("result-text");
const resetBtn = document.getElementById("reset-btn");

const choicesMap = {
  rock: { emoji: "✊", label: "Taş" },
  paper: { emoji: "📄", label: "Kağıt" },
  scissors: { emoji: "✂️", label: "Makas" },
};

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  const keys = Object.keys(choicesMap);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function getResult(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function updateScores(result) {
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  } else {
    drawScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  drawScoreEl.textContent = drawScore;
}

function setResultText(result) {
  resultTextEl.classList.remove("result-win", "result-lose", "result-draw");

  if (result === "win") {
    resultTextEl.textContent = "Tebrikler, bu eli sen kazandın! 🎉";
    resultTextEl.classList.add("result-win");
  } else if (result === "lose") {
    resultTextEl.textContent = "Bu eli bilgisayar kazandı. Tekrar dene! 😈";
    resultTextEl.classList.add("result-lose");
  } else if (result === "draw") {
    resultTextEl.textContent = "Berabere! İkiniz de iyisiniz. 🤝";
    resultTextEl.classList.add("result-draw");
  }
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  playerMoveEl.textContent = `${choicesMap[playerChoice].emoji} ${choicesMap[playerChoice].label}`;
  computerMoveEl.textContent = `${choicesMap[computerChoice].emoji} ${choicesMap[computerChoice].label}`;

  updateScores(result);

  setResultText(result);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;

  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  drawScoreEl.textContent = "0";

  playerMoveEl.textContent = "-";
  computerMoveEl.textContent = "-";

  resultTextEl.textContent = "Haydi başlamak için bir seçim yap! 👇";
  resultTextEl.classList.remove("result-win", "result-lose", "result-draw");
}

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    playRound(choice);
  });
});

resetBtn.addEventListener("click", resetGame);

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "r") playRound("rock");
  if (key === "p") playRound("paper");
  if (key === "s") playRound("scissors");
});
