const container = document.querySelector(".body-container");
const btns = document.querySelectorAll("button");
const contents = document.querySelectorAll(".content-in");

container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  console.log(id);

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });

    e.target.classList.add("live");

    contents.forEach((content) => {
      content.classList.remove("live");
    });

    const contentEl = document.getElementById(id);
    contentEl.classList.add("live");
  }
});
