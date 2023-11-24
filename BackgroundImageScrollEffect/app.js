const bgEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  bgchange();
});

const bgchange = () => {
  bgEl.style.opacity = 1 - window.pageYOffset / 1000;
  bgEl.style.backgroundSize = 100 + window.pageYOffset / 12 + "%";
};
