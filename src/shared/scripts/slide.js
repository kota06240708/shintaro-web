import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 500,
  allowClick: false,
  touchRatio: 0.5,
  paginationClickable: false,
  autoplay: {
    delay: 10000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
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
