const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const continueClock = () => {
  let timeZone = new Date();
  let hour = timeZone.getHours();
  let minute = timeZone.getMinutes();
  let second = timeZone.getSeconds();

  hourEl.style.transform = `rotate(${(hour / 12) * 360}deg)`;
  minuteEl.style.transform = `rotate(${(minute / 60) * 360}deg)`;
  secondEl.style.transform = `rotate(${(second / 60) * 360}deg)`;
};

setInterval(continueClock, 1000);
