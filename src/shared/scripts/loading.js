import { images } from '../../constants/images';
import { TweenLite } from 'gsap';

const loading = () => {
  const loads = []; // 画像を読み込むpromiseを追加していく

  // 画像を先読み
  images.forEach(r => {
    const image = new Image();
    const load = new Promise(resolve => {
      image.src = r;
      image.onload = () => resolve('成功');
    });

    loads.push(load);
  });

  Promise.all(loads).then(values => {
    console.log(values);
    console.log(TweenLite);
  });
};

export default loading;
