const image = document.getElementById("image");
const lens = document.getElementById("lens");
const zoomResult = document.getElementById("zoom-result");

image.addEventListener("load", () => {
  zoomResult.style.backgroundImage = `url(${image.src})`;
});

if (image.complete) {
  zoomResult.style.backgroundImage = `url(${image.src})`;
}

function getCursorPos(e) {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}

function moveLens(e) {
  e.preventDefault();

  const pos = getCursorPos(e);
  let x = pos.x;
  let y = pos.y;

  const lensWidth = lens.offsetWidth;
  const lensHeight = lens.offsetHeight;

  x = x - lensWidth / 2;
  y = y - lensHeight / 2;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > image.width - lensWidth) x = image.width - lensWidth;
  if (y > image.height - lensHeight) y = image.height - lensHeight;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  const percentX = (x + lensWidth / 2) / image.width;
  const percentY = (y + lensHeight / 2) / image.height;

  const bgPosX = percentX * 100;
  const bgPosY = percentY * 100;

  zoomResult.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
}

function showZoom() {
  lens.style.display = "block";
  zoomResult.style.opacity = "1";
}

function hideZoom() {
  lens.style.display = "none";
}

image.addEventListener("mouseenter", showZoom);
image.addEventListener("mouseleave", hideZoom);
image.addEventListener("mousemove", moveLens);

image.addEventListener("touchstart", showZoom);
image.addEventListener("touchend", hideZoom);
image.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  moveLens(touch);
});
