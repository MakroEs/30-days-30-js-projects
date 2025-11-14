const textInput = document.getElementById("text-input");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const message = document.getElementById("message");

const charCountSpan = document.getElementById("char-count");
const charNoSpaceCountSpan = document.getElementById("char-nospace-count");
const wordCountSpan = document.getElementById("word-count");
const sentenceCountSpan = document.getElementById("sentence-count");
const readingTimeSpan = document.getElementById("reading-time");

function metniAnalizEt() {
  const text = textInput.value;

  const charCount = text.length;

  const textNoSpaces = text.replace(/\s/g, "");
  const charNoSpaceCount = textNoSpaces.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const wordCount = text.trim() ? words.length : 0;

  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  const sentenceCount = sentences.length;

  let readingTimeSeconds = 0;
  if (wordCount > 0) {
    const seconds = wordCount / 3.3;
    readingTimeSeconds = Math.round(seconds);
  }

  charCountSpan.textContent = charCount;
  charNoSpaceCountSpan.textContent = charNoSpaceCount;
  wordCountSpan.textContent = wordCount;
  sentenceCountSpan.textContent = sentenceCount;
  readingTimeSpan.textContent = readingTimeSeconds + " sn";
}

textInput.addEventListener("input", metniAnalizEt);

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  metniAnalizEt();
  message.textContent = "Metin temizlendi.";
});

copyBtn.addEventListener("click", async () => {
  const text = textInput.value;

  if (!text.trim()) {
    message.textContent = "Kopyalanacak bir metin yok.";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    message.textContent = "Metin panoya kopyalandı ";
  } catch (err) {
    message.textContent = "Kopyalama sırasında bir hata oluştu.";
  }
});

metniAnalizEt();
