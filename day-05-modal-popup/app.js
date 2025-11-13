const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

function modalAc() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function modalKapat() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 250);
}

openBtn.addEventListener("click", modalAc);
closeBtn.addEventListener("click", modalKapat);

overlay.addEventListener("click", modalKapat);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalKapat();
  }
});
