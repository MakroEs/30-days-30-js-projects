function rastgeleRenkUret() {
  let hex = "#";
  const harfler = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    hex += harfler[Math.floor(Math.random() * 16)];
  }
  return hex;
}

const colorCode = document.getElementById("color-code");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  const yeniRenk = rastgeleRenkUret();

  colorCode.textContent = yeniRenk;

  document.body.style.backgroundColor = yeniRenk;

  colorCode.style.transform = "scale(1.2)";
  setTimeout(() => {
    colorCode.style.transform = "scale(1)";
  }, 150);
});
