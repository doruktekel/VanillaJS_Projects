const imgEl = document.querySelector(".img-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
  addNewPhotos();
});

const addNewPhotos = () => {
  for (let i = 0; i < 5; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgEl.appendChild(newImg);
  }
};
