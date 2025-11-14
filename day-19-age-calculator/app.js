const birthInput = document.getElementById("birth-date");
const calculateBtn = document.getElementById("calculate-btn");

const messageEl = document.getElementById("message");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function calculateAge() {
  const birthValue = birthInput.value;

  if (!birthValue) {
    messageEl.textContent = "Lütfen doğum tarihini seç.";
    return;
  }

  const birthDate = new Date(birthValue);
  const today = new Date();

  if (birthDate > today) {
    messageEl.textContent = "Gelecekte bir tarih seçemezsin 🙂";
    return;
  }

  messageEl.textContent = "";

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthIndex = (today.getMonth() - 1 + 12) % 12;
    const yearOfPrevMonth =
      prevMonthIndex === 11 ? today.getFullYear() - 1 : today.getFullYear();
    const daysInPrevMonth = daysInMonth(yearOfPrevMonth, prevMonthIndex);

    days += daysInPrevMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  yearsEl.textContent = years;
  monthsEl.textContent = months;
  daysEl.textContent = days;
}

calculateBtn.addEventListener("click", calculateAge);

birthInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateAge();
  }
});
