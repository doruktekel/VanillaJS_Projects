const quSel = (selector) => {
  return document.querySelector(selector);
};

const hourEl = quSel(".hour"),
  minuteEl = quSel(".minute"),
  secondEl = quSel(".second");

const ampmEl = document.querySelector(".ampm");

setInterval(() => {
  let newDate = new Date();

  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  const firstLine = (time) => {
    if (time < 10) {
      return (time = "0" + time);
    }
    return time;
  };
  hourEl.innerHTML = firstLine(hour);
  minuteEl.innerHTML = firstLine(minute);
  secondEl.innerHTML = firstLine(second);

  ampmEl.innerHTML = hour < 12 ? "AM" : "PM";
}, 1000);
