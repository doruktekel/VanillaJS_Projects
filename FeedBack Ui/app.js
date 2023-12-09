const feedbacks = document.querySelectorAll(".feedbacks-child");
const btn = document.querySelector(".btn");
const contEl = document.querySelector(".container");

let text = " ";

feedbacks.forEach((feedback) => {
  feedback.addEventListener("click", () => {
    removeClass();
    addClass(feedback);
    text = feedback.querySelector("p").innerHTML;
  });
});

btn.addEventListener("click", () => {
  contEl.innerHTML = `<h1>welcome Feedback ui</h1>
  <p class="textfeed">Your ${text} feedback were received.</p>
  <h3> thans a lot for sharing your feedback :) </h3>
  `;
});

const removeClass = () => {
  feedbacks.forEach((feedback) => {
    feedback.classList.remove("active");
  });
};

const addClass = (feedback) => {
  feedback.classList.add("active");
};

removeClass();
