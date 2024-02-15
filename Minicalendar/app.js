const getById = (item) => {
  return document.getElementById(item);
};

const monthEl = getById("month");
const weekdayEl = getById("week-day");
const monthdayEl = getById("month-day");
const yearEl = getById("year");

const calendar = new Date();

monthEl.innerHTML = calendar.toLocaleString("eng", { month: "long" });
weekdayEl.innerHTML = calendar.toLocaleString("eng", { weekday: "long" });
monthdayEl.innerHTML = calendar.getDate();
yearEl.innerHTML = calendar.getFullYear();
