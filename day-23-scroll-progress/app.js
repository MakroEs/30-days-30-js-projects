const progressBar = document.getElementById("progress-bar");
const backToTopBtn = document.getElementById("back-to-top");

function updateProgressBar() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = docHeight === 0 ? 0 : (scrollTop / docHeight) * 100;

  progressBar.style.width = `${scrollPercent}%`;

  if (scrollTop > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("load", updateProgressBar);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
