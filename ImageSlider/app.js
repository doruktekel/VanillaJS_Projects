const sliderEl = document.querySelector(".slider");

const nextEl = document.querySelector(".right");
const prevEl = document.querySelector(".left");

const allImg = document.querySelectorAll("img");

let currentImg = 1;

nextEl.addEventListener("click", () => {
  currentImg++;
  upgradeImage();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  upgradeImage();
});

const upgradeImage = () => {
  if (currentImg > allImg.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = allImg.length;
  }
  sliderEl.style.transform = `translateX(-${500 * (currentImg - 1)}px)`;
};

const repeatAuto = () => {
  setInterval(() => {
    currentImg++;
    upgradeImage();
  }, 3000);
};

repeatAuto();
