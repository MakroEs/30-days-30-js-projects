const billInput = document.getElementById("bill-amount");
const tipInput = document.getElementById("tip-percent");
const peopleInput = document.getElementById("people-count");
const calculateBtn = document.getElementById("calculate-btn");

const message = document.getElementById("message");
const tipTotalSpan = document.getElementById("tip-total");
const totalAmountSpan = document.getElementById("total-amount");
const perPersonSpan = document.getElementById("per-person");

function formatTL(amount) {
  return "₺" + amount.toFixed(2);
}

function hesapla() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value, 10);

  if (isNaN(bill) || bill <= 0) {
    message.textContent = "Lütfen geçerli bir hesap tutarı gir.";
    return;
  }

  if (isNaN(tipPercent) || tipPercent < 0) {
    message.textContent = "Lütfen geçerli bir bahşiş yüzdesi gir.";
    return;
  }

  if (isNaN(people) || people <= 0) {
    message.textContent = "Kişi sayısı en az 1 olmalı.";
    return;
  }

  const tipTotal = (bill * tipPercent) / 100;
  const totalAmount = bill + tipTotal;
  const perPerson = totalAmount / people;

  tipTotalSpan.textContent = formatTL(tipTotal);
  totalAmountSpan.textContent = formatTL(totalAmount);
  perPersonSpan.textContent = formatTL(perPerson);

  message.textContent = "";
}

calculateBtn.addEventListener("click", hesapla);

[billInput, tipInput, peopleInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      hesapla();
    }
  });
});
