const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    const aktifOlan = document.querySelector(".accordion-item.active");
    if (aktifOlan && aktifOlan !== item) {
      aktifOlan.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
