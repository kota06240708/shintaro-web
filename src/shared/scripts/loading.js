import { images } from '../../constants/images';
import { TweenLite } from 'gsap';

const loading = () => {
  const loads = []; // 画像を読み込むpromiseを追加していく
  const $$loading = document.getElementById('js-loading');
  const $$main = document.getElementById('js-main');

  // 画像を先読み
  images.forEach(r => {
    const image = new Image();
    const load = new Promise(resolve => {
      image.src = r;
      image.onload = () => resolve();
    });

    loads.push(load);
  });

  Promise.all(loads).then(() => {
    $$main.style.display = 'block';

    TweenLite.to($$loading, 0.4, {
      delay: 0.4,
      autoAlpha: 0
    });
  });
};

export default loading;
