const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const quoteCategoryEl = document.getElementById("quote-category");
const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");
const messageEl = document.getElementById("message");

const quotes = [
  {
    text: "Başlamak için mükemmel olmak zorunda değilsin, ama mükemmel olmak için başlamak zorundasın.",
    author: "Zig Ziglar",
    category: "Motivasyon",
  },
  {
    text: "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
    author: "Robert Collier",
    category: "Başarı",
  },
  {
    text: "Boşa harcanan bugün, dün ölenlerin dün çok istedikleri yarındı.",
    author: "Anonim",
    category: "Farkındalık",
  },
  {
    text: "Düşündüğün şeyi söylersen, söylediğin şeyi yaparsan, hayatında bütünlük oluşur.",
    author: "Sokrates",
    category: "Felsefe",
  },
  {
    text: "Ne düşünüyorsan osun. Ne düşünürsen, o olursun.",
    author: "Buddha",
    category: "Zihin",
  },
  {
    text: "En karanlık gece bile sona erer ve güneş doğar.",
    author: "Victor Hugo",
    category: "Umud",
  },
];

let lastIndex = -1;

function getRandomQuoteIndex() {
  if (quotes.length === 1) return 0;

  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);

  lastIndex = index;
  return index;
}

function showRandomQuote() {
  const index = getRandomQuoteIndex();
  const quote = quotes[index];

  quoteTextEl.textContent = `"${quote.text}"`;
  quoteAuthorEl.textContent = `- ${quote.author}`;
  quoteCategoryEl.textContent = quote.category;

  messageEl.textContent = "";
}

async function copyQuote() {
  const quoteText = quoteTextEl.textContent.trim();
  const authorText = quoteAuthorEl.textContent.trim();
  const fullText = `${quoteText} ${authorText}`;

  if (!quoteText) return;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(fullText);
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = fullText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    messageEl.style.color = "#4ade80";
    messageEl.textContent = "Alıntı panoya kopyalandı! ✅";
  } catch (error) {
    messageEl.style.color = "#fca5a5";
    messageEl.textContent = "Kopyalama sırasında bir hata oluştu.";
  }
}

newQuoteBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", copyQuote);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showRandomQuote();
  }
  if (e.key.toLowerCase() === "c" && (e.ctrlKey || e.metaKey)) {
    copyQuote();
  }
});

showRandomQuote();
