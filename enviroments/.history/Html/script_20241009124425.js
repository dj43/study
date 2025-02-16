document.addEventListener("DOMContentLoaded", () => {
  var currentIndex = 0;
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const images = document.querySelectorAll(".carousel-images img");
  const carouselImages = document.querySelectorAll(".carousel-images");
  const size = images[0].clientWidth;

  prevBtn.addEventListener("click", () => {
    counter++;
    carouselImages.style.transform;
  });

  nextBtn.addEventListener("click", () => {});
});
