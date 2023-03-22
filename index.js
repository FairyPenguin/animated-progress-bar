const progressBars = document.querySelectorAll(".column");

for (let progressBar of progressBars) {
  const circle = progressBar.querySelector(".circle");
  const percent = progressBar.querySelector(".percent");
  const progress = progressBar.querySelector(".progress");

  let progressPercent = 0;

  const startProgress = () => {
    progressPercent += 1;

    if (progressPercent <= progressBar.getAttribute("data-percent")) {
      circle.style.top = progressPercent + "%";
      progress.style.height = progressPercent + "%";
      percent.innerHTML = progressPercent + "%";
    }

    requestAnimationFrame(startProgress);
  };
  requestAnimationFrame(startProgress);
}
