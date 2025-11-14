const toggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

let tema = localStorage.getItem("tema") || "light";

document.body.className = tema;
ikonVeMetniGuncelle();

toggleBtn.addEventListener("click", function () {
  tema = tema === "light" ? "dark" : "light";

  document.body.className = tema;

  localStorage.setItem("tema", tema);

  ikonVeMetniGuncelle();
});

function ikonVeMetniGuncelle() {
  if (tema === "light") {
    themeIcon.textContent = "🌙";
    themeText.textContent = "Gece Modu";
  } else {
    themeIcon.textContent = "☀️";
    themeText.textContent = "Gündüz Modu";
  }
}
