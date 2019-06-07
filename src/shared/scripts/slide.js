import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 500,
  simulateTouch: false,
  autoplay: {
    delay: 10000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  breakpoints: {
    450: {
      loop: false,
      freeMode: true,
      slidesPerView: 1.3,
      centeredSlides: true,
      simulateTouch: false
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

  console.log(swiper);

  return swiper;
};

export default swiperInit;
