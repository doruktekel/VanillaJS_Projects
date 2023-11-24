const contEl = document.querySelector(".container");

const generateColorCode = () => {
  const alp = "0123456789abcdef";
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    let charIndex = Math.floor(Math.random() * alp.length);
    let char = alp[charIndex];
    colorCode += char;
  }

  colorCode = "#" + colorCode;
  return colorCode;
};

const generateColorCont = () => {
  for (let i = 0; i < 30; i++) {
    const div = document.createElement("div");
    div.classList.add("color-container");
    contEl.appendChild(div);
  }
};
generateColorCont();

const colorContEls = document.querySelectorAll(".color-container");

const textNcolor = () => {
  colorContEls.forEach((item) => {
    let newColor = generateColorCode();
    item.style.backgroundColor = newColor;
    item.innerHTML = newColor;
  });
};
textNcolor();
