const iconListEl = document.querySelectorAll(".icon");
const result = document.querySelector(".result");
const yScoreEl = document.querySelector(".yscore");
const cScoreEl = document.querySelector(".cscore");

let yScore = 0;
let cScore = 0;

// nodelist donen yapilarda sadece foreach item gibi metodlar kullanilabilir ,  eger map , filter, reduce vb metodlari kullanmak istiyorsak nodelisti bir arraye donusturmemiz gerekir. Bunun icinde Array.from() yada destructurin kullanmaliyiz. [...x] gibi

const computerChoose = () => {
  const iconArr = [...iconListEl].map((icon) => icon.id);
  const randomnUMBER = Math.floor(Math.random() * iconArr.length);
  const computerChoose = iconArr[randomnUMBER];
  return computerChoose;
};

const compare = (yChoose, cChoose) => {
  if (yChoose === cChoose) {
    result.innerHTML = "= Result is tie =";
  } else if (
    (yChoose === "rock" && cChoose === "scissor") ||
    (yChoose === "scissor" && cChoose === "paper") ||
    (yChoose === "paper" && cChoose === "rock")
  ) {
    result.innerHTML = "= You WONNN :) =";
    yScore++;
    yScoreEl.innerHTML = yScore;
  } else {
    result.innerHTML = "= You LOSEEE :( =";
    cScore++;
    cScoreEl.innerHTML = cScore;
  }
};

iconListEl.forEach((icon) => {
  icon.addEventListener("click", () => {
    selected(icon);
    compare(icon.id, computerChoose());
  });
});

const selected = (icon) => {
  icon.classList.add("selected");
  setTimeout(() => {
    icon.classList.remove("selected");
  }, 1000);
};
