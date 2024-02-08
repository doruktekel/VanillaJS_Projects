const query = (item) => {
  return document.querySelector(item);
};

const perEl = query(".per");
const frontEl = query(".front");

let px = 0;

const loading = () => {
  perEl.innerHTML = px + "%";
  frontEl.style.width = px + "%";
  px++;

  if (px < 101) {
    setTimeout(() => {
      loading();
    }, 20);
  }
};

loading();
