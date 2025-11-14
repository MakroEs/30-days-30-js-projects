const searchInput = document.getElementById("search-input");
const itemsList = document.getElementById("items-list");
const resultInfo = document.getElementById("result-info");
const noResult = document.getElementById("no-result");

const tumItemler = Array.from(document.querySelectorAll(".item"));
resultInfo.textContent = `Toplam ${tumItemler.length} kayıt`;

function filtrele() {
  const aranan = searchInput.value.trim().toLowerCase();

  let gorunenAdet = 0;

  tumItemler.forEach((item) => {
    const orijinalMetin = item.dataset.label;
    const kucukMetin = orijinalMetin.toLowerCase();

    if (!aranan) {
      item.classList.remove("hidden");
      item.innerHTML = orijinalMetin;
      gorunenAdet++;
      return;
    }

    if (kucukMetin.includes(aranan)) {
      item.classList.remove("hidden");
      gorunenAdet++;

      const regex = new RegExp(`(${aranan})`, "gi");
      const isaretli = orijinalMetin.replace(regex, "<mark>$1</mark>");
      item.innerHTML = isaretli;
    } else {
      item.classList.add("hidden");
      item.innerHTML = orijinalMetin;
    }
  });

  if (!aranan) {
    resultInfo.textContent = `Toplam ${tumItemler.length} kayıt`;
    noResult.classList.add("hidden");
  } else {
    resultInfo.textContent = `${gorunenAdet} sonuç bulundu`;
    if (gorunenAdet === 0) {
      noResult.classList.remove("hidden");
    } else {
      noResult.classList.add("hidden");
    }
  }
}

searchInput.addEventListener("input", filtrele);
