const countupEls = document.querySelectorAll(".count");

countupEls.forEach((countupEl) => {
  const finalValue = parseInt(countupEl.dataset.target, 10);
  const animationTime = 2000; // Adjust animation duration (milliseconds)

  let current = 0;
  const intervalId = setInterval(() => {
    if (current <= finalValue) {
      countupEl.textContent = current;
      current += 10; // Adjust increment step
    } else {
      clearInterval(intervalId);
    }
  }, animationTime / (finalValue / 10)); // Adjust based on increment step
});
