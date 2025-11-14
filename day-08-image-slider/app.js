const slaytlar = [
  {
    image: "https://picsum.photos/id/1015/800/450",
    title: "Dağ Manzarası",
    description: "Sakin bir dağ vadisinde gün batımı manzarası.",
  },
  {
    image: "https://picsum.photos/id/1016/800/450",
    title: "Orman Yolu",
    description: "Ağaçlarla çevrili huzurlu bir yürüyüş yolu.",
  },
  {
    image: "https://picsum.photos/id/1025/800/450",
    title: "Köpek Dostumuz",
    description: "Meraklı bakışlarıyla poz veren sevimli bir köpek.",
  },
  {
    image: "https://picsum.photos/id/1035/800/450",
    title: "Şehir Işıkları",
    description: "Gece vakti parlayan modern bir şehir silüeti.",
  },
];

const slideImage = document.getElementById("slide-image");
const slideTitle = document.getElementById("slide-title");
const slideDescription = document.getElementById("slide-description");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsContainer = document.getElementById("dots-container");

let mevcutIndex = 0;
let dots = [];

function dotlariOlustur() {
  dotsContainer.innerHTML = "";
  dots = [];

  slaytlar.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.dataset.index = index;

    dot.addEventListener("click", function () {
      slaytiGoster(index);
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

function slaytiGoster(index) {
  if (index < 0) {
    index = slaytlar.length - 1;
  } else if (index >= slaytlar.length) {
    index = 0;
  }

  mevcutIndex = index;
  const aktifSlayt = slaytlar[mevcutIndex];

  slideImage.src = aktifSlayt.image;
  slideImage.alt = aktifSlayt.title;
  slideTitle.textContent = aktifSlayt.title;
  slideDescription.textContent = aktifSlayt.description;

  dots.forEach((dot, i) => {
    if (i === mevcutIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", function () {
  slaytiGoster(mevcutIndex - 1);
});

nextBtn.addEventListener("click", function () {
  slaytiGoster(mevcutIndex + 1);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    slaytiGoster(mevcutIndex - 1);
  }
  if (e.key === "ArrowRight") {
    slaytiGoster(mevcutIndex + 1);
  }
});

dotlariOlustur();
slaytiGoster(0);
