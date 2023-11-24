const btnEl = document.querySelector(".btn");
const contEl = document.querySelector(".container");
const contEl2 = document.querySelector(".container2");
const iconEl = document.querySelector(".icon");
const videoEl = document.querySelector(".video");

btnEl.addEventListener("click", () => {
  contEl2.classList.remove("active");
  contEl.classList.add("active");
});

iconEl.addEventListener("click", () => {
  contEl2.classList.add("active");
  contEl.classList.remove("active");
  videoEl.currentTime = 0;
  videoEl.pause();
});
