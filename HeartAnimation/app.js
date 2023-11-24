const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  let x = e.offsetX + "px";
  let y = e.offsetY + "px";

  let span = document.createElement("span");

  span.style.left = x;
  span.style.top = y;

  const size = Math.random() * 100 + "px";

  span.style.width = size;
  span.style.height = size;
  body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 2000);
});
