const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.map((kit) => {
  const buttonEl = document.createElement("button");
  containerEl.appendChild(buttonEl);
  buttonEl.classList.add("btn");
  buttonEl.innerHTML = kit;
  buttonEl.style.backgroundImage = "url(images/" + kit + ".png)";

  const audioEl = document.createElement("audio");
  containerEl.appendChild(audioEl);
  audioEl.src = "./sounds/" + kit + ".mp3";
  buttonEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      buttonEl.style.transform = "scale(0.9)";
    }
    setTimeout(() => {
      buttonEl.style.transform = "scale(1)";
    }, 100);
  });
});
