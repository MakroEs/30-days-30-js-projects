const moodInput = document.getElementById("mood-input");
const analyzeBtn = document.getElementById("analyze-btn");
const emojiEl = document.getElementById("emoji");
const statusEl = document.getElementById("status");
const messageEl = document.getElementById("message");

const moodMap = {
  happy: ["mutlu", "iyi", "harika", "süper", "pozitif", "şahane", "güzel"],
  sad: ["üzgün", "kötü", "berbat", "moralsiz", "kederli"],
  angry: ["sinirli", "kızgın", "öfke", "gergin"],
  tired: ["yorgun", "bitkin", "uykum var", "enerjim yok"],
  excited: ["heyecanlı", "sabırsız", "coşkulu"],
};

const moodEmojis = {
  happy: { emoji: "😄", text: "Mutlu görünüyorsun!" },
  sad: { emoji: "😢", text: "Biraz üzgün gibisin." },
  angry: { emoji: "😡", text: "Sinirli görünüyorsun." },
  tired: { emoji: "🥱", text: "Biraz yorgun gibisin." },
  excited: { emoji: "🤩", text: "Çok heyecanlısın!" },
  unknown: { emoji: "🤔", text: "Duygunu tam anlayamadım." },
};

function analyzeMood() {
  const text = moodInput.value.trim().toLowerCase();

  if (text.length === 0) {
    messageEl.textContent = "Lütfen nasıl hissettiğini yaz.";
    return;
  }

  messageEl.textContent = "";

  let moodFound = "unknown";

  for (const mood in moodMap) {
    if (moodMap[mood].some((word) => text.includes(word))) {
      moodFound = mood;
      break;
    }
  }

  emojiEl.textContent = moodEmojis[moodFound].emoji;
  statusEl.textContent = moodEmojis[moodFound].text;
}

analyzeBtn.addEventListener("click", analyzeMood);
moodInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") analyzeMood();
});
