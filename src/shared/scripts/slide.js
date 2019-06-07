import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 10000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  }
};

const swiper = () => {
  const mySwiper = new Swiper('.swiper-container', options);

  return mySwiper;
};

export default swiper;
