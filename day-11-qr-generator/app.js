const qrInput = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const message = document.getElementById("message");
const qrResult = document.getElementById("qr-result");
const qrImage = document.getElementById("qr-image");

function generateQR(text) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    text
  )}`;
}

generateBtn.addEventListener("click", () => {
  const value = qrInput.value.trim();

  if (!value) {
    message.textContent = "Lütfen bir metin veya URL girin.";
    qrResult.classList.add("hidden");
    return;
  }

  message.textContent = "";
  qrImage.src = generateQR(value);
  qrResult.classList.remove("hidden");
});

qrInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateBtn.click();
  }
});
