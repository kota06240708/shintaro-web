import Typed from 'typed.js';
import data from '../../../../data/constants';

const bg = () => {
  const $$bg = document.getElementById('js-bg');

  const params = {
    strings: data.bgText,
    loop: true,
    fadeOut: true,
    typeSpeed: 30,
    backDelay: 100
  };

  const typed = new Typed($$bg, params);

  return typed;
};

export default bg;
