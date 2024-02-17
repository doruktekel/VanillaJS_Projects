const videoEl = document.querySelector(".video");
const btnEl = document.querySelector(".btn");
const iconEl = document.querySelector(".fa-solid");
const preloaderEl = document.querySelector(".preloader");

btnEl.addEventListener("click", () => {
  iconEl.classList.toggle("fa-pause");
  iconEl.classList.toggle("fa-play");

  if (iconEl.classList.contains("fa-play")) {
    videoEl.pause();
  } else videoEl.play();
});

window.addEventListener("load", () => {
  preloaderEl.style.zIndex = -2;
});
