const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const dotButton = document.querySelector("[data-dot]");
const previousOperandText = document.getElementById("previous-operand");
const currentOperandText = document.getElementById("current-operand");

let currentOperand = "0";
let previousOperand = "";
let operation = null;
let justCalculated = false;

function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operation = null;
  justCalculated = false;
  updateDisplay();
}

function deleteDigit() {
  if (justCalculated) {
    currentOperand = "0";
    justCalculated = false;
  } else {
    if (currentOperand.length === 1) {
      currentOperand = "0";
    } else {
      currentOperand = currentOperand.slice(0, -1);
    }
  }
  updateDisplay();
}

function appendNumber(number) {
  if (justCalculated) {
    // Sonuçtan sonra sayı girerse yeni sayı yaz
    currentOperand = number;
    justCalculated = false;
  } else if (currentOperand === "0") {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
  updateDisplay();
}

function appendDot() {
  if (justCalculated) {
    currentOperand = "0.";
    justCalculated = false;
    updateDisplay();
    return;
  }

  if (!currentOperand.includes(".")) {
    currentOperand += ".";
    updateDisplay();
  }
}

function chooseOperation(op) {
  if (currentOperand === "Hata") return;

  if (previousOperand && !justCalculated) {
    compute();
  }

  previousOperand = currentOperand;
  operation = op;
  currentOperand = "0";
  justCalculated = false;
  updateDisplay();
}

function compute() {
  if (!operation || previousOperand === "") return;

  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  let computation;

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "−":
    case "-":
      computation = prev - current;
      break;
    case "×":
    case "*":
      computation = prev * current;
      break;
    case "÷":
    case "/":
      if (current === 0) {
        currentOperand = "Hata";
        previousOperand = "";
        operation = null;
        updateDisplay();
        justCalculated = true;
        return;
      }
      computation = prev / current;
      break;
    case "%":
      computation = prev % current;
      break;
    default:
      return;
  }

  currentOperand = formatResult(computation);
  previousOperand = "";
  operation = null;
  justCalculated = true;
  updateDisplay();
}

function formatResult(num) {
  const rounded = Math.round(num * 1_000_000) / 1_000_000;
  return rounded.toString();
}

function updateDisplay() {
  currentOperandText.textContent = currentOperand;

  if (operation && previousOperand !== "") {
    previousOperandText.textContent = `${previousOperand} ${operation}`;
  } else {
    previousOperandText.textContent = "";
  }
}

/* Event Listeners */

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.textContent.trim());
  });
});

dotButton.addEventListener("click", appendDot);

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    chooseOperation(btn.dataset.operator);
  });
});

equalsButton.addEventListener("click", compute);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteDigit);

window.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key >= "0" && key <= "9") {
    appendNumber(key);
  } else if (key === "." || key === ",") {
    appendDot();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    chooseOperation(key);
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    compute();
  } else if (key === "Backspace") {
    deleteDigit();
  } else if (key === "Escape") {
    clearAll();
  }
});

updateDisplay();
