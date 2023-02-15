function initCarousel() {
  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");

  let currentSlide = 0;
  const maxSlides = 3;

  carouselArrowLeft.style.display = 'none';
  const carouselInner = document.querySelector(".carousel__inner");

  carouselArrowRight.addEventListener('click', () => {
    currentSlide++;
    carouselArrowLeft.style.display = '';
    if (currentSlide === maxSlides) {
      carouselArrowRight.style.display = 'none'
    }
    carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * currentSlide}px)`;
  });

  carouselArrowLeft.addEventListener('click', () => {
    currentSlide--;
    carouselArrowRight.style.display = '';
    if (currentSlide === 0) {
      carouselArrowLeft.style.display = 'none'
    }
    carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * currentSlide}px)`;
  });
}
