const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const swapBtn = document.getElementById("swap-btn");

const messageEl = document.getElementById("message");
const resultAmountEl = document.getElementById("result-amount");
const resultCurrencyEl = document.getElementById("result-currency");
const rateInfoEl = document.getElementById("rate-info");

const rates = {
  TRY: 1,
  USD: 0.03,
  EUR: 0.028,
  GBP: 0.024,
};

function formatNumber(num) {
  return num.toFixed(2);
}

function convert() {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    messageEl.textContent = "Lütfen geçerli bir tutar gir.";
    return;
  }

  if (!rates[from] || !rates[to]) {
    messageEl.textContent = "Seçilen para birimi desteklenmiyor.";
    return;
  }

  messageEl.textContent = "";

  const tryAmount = amount / rates[from];
  const converted = tryAmount * rates[to];

  resultAmountEl.textContent = formatNumber(converted);
  resultCurrencyEl.textContent = to;

  const rate = rates[to] / rates[from];
  rateInfoEl.textContent = `1 ${from} ≈ ${formatNumber(rate)} ${to}`;
}

convertBtn.addEventListener("click", convert);

[amountInput, fromSelect, toSelect].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      convert();
    }
  });
});

swapBtn.addEventListener("click", () => {
  const from = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = from;
  convert();
});
``;
