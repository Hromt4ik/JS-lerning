import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
    constructor(slides) {
      this.slides = slides;
      this.render();

      const carouselArrowRight = this.elem.querySelector(".carousel__arrow_right");
      const carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");

      this.currentSlide = 0;
      const maxSlides = slides.length - 1;

      carouselArrowLeft.style.display = 'none';
      const carouselInner = this.elem.querySelector(".carousel__inner");

      carouselArrowRight.addEventListener('click', () => {
        this.currentSlide++;
        carouselArrowLeft.style.display = '';
        if (this.currentSlide === maxSlides) {
          carouselArrowRight.style.display = 'none'
        }
        carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * this.currentSlide}px)`;
      });

      carouselArrowLeft.addEventListener('click', () => {
        this.currentSlide--;
        carouselArrowRight.style.display = '';
        if (this.currentSlide === 0) {
          carouselArrowLeft.style.display = 'none'
        }
        carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * this.currentSlide}px)`;
      });


    }


    render() {
      this.elem = createElement(` 
      <div class="carousel">
      <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(elem => `
            <div class="carousel__slide" data-id="${elem.id}">
              <img src="../../assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${elem.price.toFixed(2)}</span>
              <div class="carousel__title">${elem.name}</div>
              <button type="button" class="carousel__button">
                <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>`).join('')}
        </div>
      </div>`);

      this.elem.addEventListener('click', (event) => {
        if (event.target.closest('.carousel__button ')) {
          this.elem.dispatchEvent(new CustomEvent("product-add", { 
            detail: this.slides[this.currentSlide].id, 
            bubbles: true 
          }))
        }
      });

    }

  }
