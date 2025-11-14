const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");

const messageEl = document.getElementById("message");
const bmiValueEl = document.getElementById("bmi-value");
const bmiStatusEl = document.getElementById("bmi-status");

function clearStatusClasses() {
  bmiStatusEl.classList.remove(
    "status-underweight",
    "status-normal",
    "status-overweight",
    "status-obese"
  );
}

function getBmiStatus(bmi) {
  if (bmi < 18.5) {
    return { text: "Zayıf", className: "status-underweight" };
  } else if (bmi < 25) {
    return { text: "Normal", className: "status-normal" };
  } else if (bmi < 30) {
    return { text: "Fazla Kilolu", className: "status-overweight" };
  } else {
    return { text: "Obez", className: "status-obese" };
  }
}

function calculateBMI() {
  const height = parseFloat(heightInput.value); // cm
  const weight = parseFloat(weightInput.value); // kg

  if (isNaN(height) || height <= 0) {
    messageEl.textContent = "Lütfen geçerli bir boy gir. (cm cinsinden)";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    messageEl.textContent = "Lütfen geçerli bir kilo gir. (kg cinsinden)";
    return;
  }

  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  bmiValueEl.textContent = bmi.toFixed(1);

  const status = getBmiStatus(bmi);
  clearStatusClasses();
  bmiStatusEl.textContent = status.text;
  bmiStatusEl.classList.add(status.className);

  messageEl.textContent = "";
}

calculateBtn.addEventListener("click", calculateBMI);

[heightInput, weightInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
  });
});
