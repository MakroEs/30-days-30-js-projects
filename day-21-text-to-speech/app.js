const textInput = document.getElementById("text-input");
const speakBtn = document.getElementById("speak-btn");
const messageEl = document.getElementById("message");

const rateInput = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");

const pitchInput = document.getElementById("pitch");
const pitchValue = document.getElementById("pitch-value");

rateInput.addEventListener("input", () => {
  rateValue.textContent = rateInput.value;
});

pitchInput.addEventListener("input", () => {
  pitchValue.textContent = pitchInput.value;
});

function speakText() {
  const text = textInput.value.trim();

  if (!text) {
    messageEl.textContent = "Lütfen okunacak bir metin gir.";
    return;
  }

  messageEl.textContent = "";

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = parseFloat(rateInput.value);
  utterance.pitch = parseFloat(pitchInput.value);

  speechSynthesis.speak(utterance);
}

speakBtn.addEventListener("click", speakText);

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") speakText();
});
