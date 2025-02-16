document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  function updateCarousel() {
    const offset = -currentIndex * 500; // Image width is 500px
    document.querySelector(
      ".carousel-images"
    ).style.transform = `translateX(${offset}px)`;
  }

  document.querySelector(".next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  document.querySelector(".prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });
});
