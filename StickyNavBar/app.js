const navbar = document.querySelector(".navbar");
const botContainer = document.querySelector(".bot-container");

window.addEventListener("scroll", () => {
  const vertical = window.scrollY;
  const top = botContainer.offsetTop;

  vertical > top - navbar.offsetHeight
    ? navbar.classList.add("active")
    : navbar.classList.remove("active");
});
