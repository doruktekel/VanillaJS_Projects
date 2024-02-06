const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (e) => {
  containerEl.innerHTML = `<div class="mousex">
  <h1 class="x-header">MOVEMENT (X)</h1>
  <h2 class="x-content">${e.pageY}</h2>
</div>
<div class="mousey">
  <h1 class="y-header">MOVEMENT (Y)</h1>
  <h2 class="y-content">${e.pageX}</h2>
</div>`;
});
