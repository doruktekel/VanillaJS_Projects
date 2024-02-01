const monthEl = document.querySelector(".header h1");
const allEl = document.querySelector(".header h3");
const daysEl = document.querySelector(".days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const monthNow = date.getMonth();
monthEl.innerHTML = months[monthNow];
allEl.innerHTML = date.toDateString();

const totalDays = new Date(new Date().getFullYear(), monthNow + 1, 0).getDate();
const firstDays = new Date(new Date().getFullYear(), monthNow, 1).getDay() - 1;

for (let i = firstDays; i > 0; i--) {
  daysEl.innerHTML += `<div class="unseen"></div>`;
}
for (let i = 1; i <= totalDays; i++) {
  if (i === new Date().getDate()) {
    daysEl.innerHTML += `<div class="today">${i}</div>`;
  } else daysEl.innerHTML += `<div>${i}</div>`;
}
