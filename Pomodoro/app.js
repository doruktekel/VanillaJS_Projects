const getElById = (item) => {
  return document.getElementById(item);
};

let timerEl = getElById("timer"),
  startEl = getElById("start"),
  stopEl = getElById("stop"),
  resetEl = getElById("reset"),
  inputEl = getElById("input"),
  gifEl = getElById("gif");

let intervalEl, minute, second, time;

const musicURL = "./clock.mp3";

const playMusic = () => {
  const audio = new Audio(musicURL);
  audio.play();
};

const setTime = () => {
  time = inputEl.value;
};

const minuteSecond = () => {
  minute = Math.floor(time / 60);
  second = time % 60;
  roundDigit();
};

const displayDigit = () => {
  timerEl.innerHTML = minute + " : " + second;
};

const roundDigit = () => {
  minute < 10 && (minute = "0" + minute);
  second < 10 && (second = "0" + second);
};

const startFunc = () => {
  intervalEl = setInterval(() => {
    gifEl.style.display = "none";
    time--;
    minuteSecond();
    displayDigit();
    if (time === 0) {
      clearInterval(intervalEl);
      playMusic();
      gifEl.style.display = "block";
    }
  }, 1000);
};
const stopFunc = () => {
  clearInterval(intervalEl);
};
const resetFunc = () => {
  clearInterval(intervalEl);
  time = 0;
  minuteSecond();
  displayDigit();
};

startEl.addEventListener("click", startFunc);
stopEl.addEventListener("click", stopFunc);
resetEl.addEventListener("click", resetFunc);
inputEl.addEventListener("input", setTime);
