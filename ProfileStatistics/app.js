const countEls = document.querySelectorAll(".count");

countEls.forEach((countEl) => {
  countEl.innerHTML = "0";

  const increaseEl = () => {
    let currentEl = +countEl.innerHTML;
    const overEl = countEl.getAttribute("data-count");
    let step = overEl / 26;
    currentEl = Math.floor(step + currentEl);

    if (currentEl < step) {
      countEl.innerHTML = currentEl;
      setTimeout(increaseEl, 100);
    } else {
      countEl.innerHTML = overEl;
    }
  };
  increaseEl();
});
