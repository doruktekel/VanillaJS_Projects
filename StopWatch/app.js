const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let timer;
let hour = 0;
let minute = 0;
let second = 0;

const padTime = (value) => {
  return value > 9 ? value : "0" + value;
};

const displayTimer = () => {
  const displayTimerValue =
    padTime(hour) + ":" + padTime(minute) + ":" + padTime(second);

  timerEl.innerHTML = displayTimerValue;
};

const updateTimer = () => {
  second++;
  if (second > 60) {
    minute++;
    second = 0;
    if (minute > 60) {
      hour++;
      minute = 0;
    }
  }
  displayTimer();
};

const start = () => {
  timer = setInterval(updateTimer, 1000);
  startEl.disabled = true;
  stopEl.disabled = false;
};
const stop = () => {
  clearInterval(timer);
  startEl.disabled = false;
  stopEl.disabled = true;
};
const reset = () => {
  hour = 0;
  minute = 0;
  second = 0;
  startEl.disabled = false;
  stopEl.disabled = false;
  clearInterval(timer);
  displayTimer();
};

startEl.addEventListener("click", start);
stopEl.addEventListener("click", stop);
resetEl.addEventListener("click", reset);
