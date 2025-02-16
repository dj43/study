document.addEventListener("DOMContentLoaded", () => {
  var currentIndex = 0;
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const images = document.querySelectorAll(".carousel-images img");
  const size = images[0].clientWidth;

  prevBtn.addEventListener("click", () => {
    counter++;
  });

  nextBtn.addEventListener("click", () => {});
});
