let sayac = 0;

const sayacDegeri = document.getElementById("counter-value");
const azaltBtn = document.getElementById("decrease-btn");
const sifirlaBtn = document.getElementById("reset-btn");
const arttirBtn = document.getElementById("increase-btn");

function sayaciGuncelle() {
  sayacDegeri.textContent = sayac;

  if (sayac > 0) {
    sayacDegeri.style.color = "#22c55e";
  } else if (sayac < 0) {
    sayacDegeri.style.color = "#ef4444";
  } else {
    sayacDegeri.style.color = "#e5e7eb";
  }

  sayacDegeri.style.transform = "scale(1.08)";
  setTimeout(() => {
    sayacDegeri.style.transform = "scale(1)";
  }, 120);
}

azaltBtn.addEventListener("click", function () {
  sayac = sayac - 1;
  sayaciGuncelle();
});

sifirlaBtn.addEventListener("click", function () {
  sayac = 0;
  sayaciGuncelle();
});

arttirBtn.addEventListener("click", function () {
  sayac = sayac + 1;
  sayaciGuncelle();
});

sayaciGuncelle();
