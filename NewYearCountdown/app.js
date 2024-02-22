const getElementByIdFunc = (item) => {
  return document.getElementById(item);
};

const daysEl = getElementByIdFunc("days");
const hoursEl = getElementByIdFunc("hours");
const minutesEl = getElementByIdFunc("minutes");
const secondsEl = getElementByIdFunc("seconds");

const newYearTime = new Date("Jan 1 , 2025 00:00:00").getTime();

const updateCountdown = () => {
  const nowTime = new Date().getTime();
  let gap = newYearTime - nowTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const days = hour * 24;

  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  daysEl.innerHTML = d;
  hoursEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondsEl.innerHTML = s;
  setTimeout(updateCountdown, 1000);
};

updateCountdown();
