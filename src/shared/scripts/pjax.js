import Barba from 'barba.js';
import { TweenMax } from 'gsap';
import slide from './slide';
import typing from './typing/text';

//  ページ遷移はここで行っています。
const pjax = () => {
  Barba.Pjax.start();
  Barba.Prefetch.init();

  const FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.loadOut()]).then(() => {
        return this.loadIn();
      });
    },
    loadOut: function() {
      const _this = this;

      return new Promise(resolve => {
        TweenMax.to(_this.oldContainer, 0.4, {
          opacity: 0,
          x: 100,
          ease: Power1.easeInOut,
          onComplete: () => resolve()
        });
      });
    },
    loadIn: function() {
      const _this = this;
      const $$newContainer = this.newContainer;

      // 古い要素がまだ残ってるので消す
      this.oldContainer.style.display = 'none';

      // visibility: hiddenになっているのでvisibleにする
      TweenMax.set($$newContainer, {
        opacity: 0,
        visibility: 'visible',
        x: -100
      });
      TweenMax.to($$newContainer, 0.4, {
        opacity: 1,
        x: 0,
        ease: Power1.easeInOut,
        onComplete: () => {
          _this.done();

          // ページ遷移が完了した後でswiperのdomを取得
          const $$swiper = document.querySelector('.swiper-wrapper');
          const $$topTitle = document.querySelector('#js-top-text');

          // swiperで使うdomがあるか確認
          if ($$swiper !== null) {
            slide(); // ある場合はswiperを発火
          }

          // topのタイトルが存在している時のみ発火
          typing(['weired x avant_garde = beuatiful'], $$topTitle);
        }
      });
    }
  });

  return (Barba.Pjax.getTransition = () => FadeTransition);
};

export default pjax;
