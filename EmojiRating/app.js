const starsEl = document.querySelectorAll(".fa-star");
const facesEl = document.querySelectorAll(".face");
const faceBg = ["red", "orange", "lightblue", "lightgreen", "green"];

starsEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

const updateRating = (index) => {
  starsEl.forEach((star, i) => {
    if (index + 1 > i) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  facesEl.forEach((face) => {
    face.style.transform = `translateX(-${index * 50}px) `;
    face.style.color = faceBg[index];
  });
};
