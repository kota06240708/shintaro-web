import swiper from '../shared/scripts/slide';
import typing from '../shared/scripts/typing/text';
import bg from '../shared/scripts/typing/bg';
import pjax from '../shared/scripts/pjax';

const subTitle = 'weird x avant_garde = beuatiful';

/**
 * @classdesc - 全ての処理をここで管理
 */
class Index {
  constructor() {
    this.$$typing = document.querySelector('#js-typing');
    this.$$topTitle = document.querySelector('#js-top-text');
    this.$$globalTitle = document.querySelector('#js-global-title');

    // グローバルのタイピングのアニメーションを格納
    this.typingGlobal = typing([subTitle], this.$$typing);

    // topのタイトルのタイピングのアニメーションを格納
    this.typingTop = typing([subTitle], this.$$topTitle);

    this.bgAnimation = bg(); // 背景アニメーションを格納

    this.time = -1; // mousemoveのタイム管理

    // bind系
    this.onBgToggleBind = this.onBgToggle.bind(this);
    this.resetBind = this.resetTyping.bind(this);
    this.onRisizeBind = this.onRisize.bind(this);

    // ブレイクポイント
    this.breakPoint = 450;
    this.breakHeight = 500;
  }

  init() {
    swiper(); // スライドを発火
    pjax(); // pjaxを発火
    this.typingGlobal; // グローバルのタイピングのアニメーションを発火
    this.typingTop; // topのタイトルのタイピングのアニメーションを発火
    this.onListerner(); // eventListernerを発火
    this.bgAnimation.stop();
  }

  // eventListernerをここで定義
  onListerner() {
    window.addEventListener('resize', this.onRisizeBind); // リサイズイベント
    this.checkHeight();

    // pcの時のみ発火
    if (window.innerWidth > this.breakPoint) {
      this.$$globalTitle.addEventListener('click', this.resetBind); // グローバルタイトルをリセットさせる

      // マウスのイベント
      document.addEventListener('mousemove', this.onBgToggleBind);
    }
  }

  // リサイズイベント
  onRisize() {
    let w = window.innerWidth;

    this.checkHeight();

    if (w <= this.breakPoint) {
      // 時間をリセット
      window.clearTimeout(this.time);

      document.removeEventListener('click', this.resetBind);

      // マウスのイベントをクリア
      document.removeEventListener('mousemove', this.onBgToggleBind);
    } else {
      // マウスのイベントを発火
      document.addEventListener('mousemove', this.onBgToggleBind);

      this.$$globalTitle.addEventListener('click', this.resetBind);
    }
  }

  checkHeight() {
    let h = window.innerHeight;

    if (h < this.breakHeight) {
      this.$$typing.style.display = 'none';
    } else {
      this.$$typing.style.display = 'block';
    }
  }

  // グローバルのタイトルをリセット
  resetTyping() {
    this.typingGlobal.reset();
    this.bgAnimation.reset();
  }

  // 背景のアニメーションを制御
  onBgToggle() {
    window.clearTimeout(this.time); // マウスが動いている時はクリア
    if (this.bgAnimation.pause.status) this.bgAnimation.start(); // アニメーションが止まってる時のみ発火
    this.time = window.setTimeout(() => this.bgAnimation.stop(), 100); // マウスが動いてない場合、アニメーションを止める
  }
}

(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const index = new Index();
    index.init();
  });
})();
