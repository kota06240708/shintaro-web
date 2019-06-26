import { images } from '../../constants/images';

const loading = () => {
  const loads = [];

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
  });
};

export default loading;
