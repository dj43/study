$(document).ready(function () {
  let currentIndex = 0;
  const images = $(".carousel-images img");
  const totalImages = images.length;

  function updateCarousel() {
    const offset = -currentIndex * 800; // Image width is 800px
    $(".carousel-images").css("transform", `translateX(${offset}px)`);
  }

  $(".next-btn").click(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  $(".prev-btn").click(function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });
});
