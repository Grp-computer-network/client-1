  const carousel = document.getElementById('carousel');
  const slides = carousel.children;
  const totalSlides = slides.length;
  let index = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * (slides[0].offsetWidth + 16)}px)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Optional: Auto slide every 3 seconds
  setInterval(() => {
    nextSlide();
  }, 3000);
