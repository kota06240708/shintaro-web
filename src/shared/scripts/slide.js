import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 500,
  allowClick: false,
  simulateTouch: false,
  autoplay: {
    delay: 10000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  }
};

const swiperInit = () => {
  const swiper = new Swiper('.swiper-container', options);
  const $$buttonRight = document.querySelector('#js-button-right');
  const $$buttonLeft = document.querySelector('#js-button-left');

  $$buttonRight.addEventListener('click', () => {
    swiper.slideNext();
    return false;
  });
  $$buttonLeft.addEventListener('click', () => {
    swiper.slidePrev();
    return false;
  });

  console.log(swiper);

  console.log(swiper);

  return swiper;
};

export default swiperInit;
