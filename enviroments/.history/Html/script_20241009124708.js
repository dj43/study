document.addEventListener("DOMContentLoaded", () => {
  var currentIndex = 0;
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const images = document.querySelectorAll(".carousel-images img");
  const carouselImages = document.querySelector(".carousel-images");
  const size = images[0].clientWidth;

  prevBtn.addEventListener("click", () => {});

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    carouselImages.style.transform = `translate${-size * currentIndex}px`;
  });
});
