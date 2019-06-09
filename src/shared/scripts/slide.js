import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 700,
  simulateTouch: false,
  autoplay: {
    delay: 7000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  breakpoints: {
    450: {
      loop: false,
      simulateTouch: true,
      freeMode: true,
      slidesPerView: 1.3,
      centeredSlides: true
    }
  }
};

const swiperInit = () => {
  const swiper = new Swiper('.swiper-container', options);
  const $$swiper = document.querySelector('.swiper-wrapper');
  const $$buttonRight = document.querySelector('#js-button-right');
  const $$buttonLeft = document.querySelector('#js-button-left');

  if ($$swiper) {
    $$buttonRight.addEventListener('click', () => {
      swiper.slideNext();
      return false;
    });
    $$buttonLeft.addEventListener('click', () => {
      swiper.slidePrev();
      return false;
    });
  }

  return swiper;
};

export default swiperInit;
