const countupEls = document.querySelectorAll(".count");

countupEls.forEach((countupEl) => {
  const finalValue = parseInt(countupEl.dataset.target);
  const animationTime = 2000; // Adjust animation duration (milliseconds)

  let current = 2000;
  const intervalId = setInterval(() => {
    if (current <= finalValue) {
      countupEl.textContent = current;
      current += 1; // Adjust increment step
    } else {
      clearInterval(intervalId);
    }
  }, animationTime / (finalValue / 10)); // Adjust based on increment step
});

const div = document.getElementById("div");
const div1 = document.getElementById("div1");

div1.addEventListener("click", () => {
  if (div.classList.value == "absolute flex-col gap-5 top-10 bg-white p-3 hidden") {
    div.classList.remove("hidden")
    div.classList.add("flex")
  } else {
    div.classList.remove("flex")
    div.classList.add("hidden")
  }
})