import Typed from 'typed.js';

/**
 * テクストをタイピングさせて表示させる
 * @param {array} string - アニメションさせる文言を受け取る
 * @param {HTMLElement} el - タイピングさせるDOM
 */

const textTyping = (string, el) => {
  let time = -1;

  // タイピングのオプション
  const params = {
    strings: string,
    typeSpeed: 80,
    onComplete: () => {
      time = window.setTimeout(() => {
        return el.classList.add('glitch');
      }, 1000);
    },
    onReset: self => {
      window.clearTimeout(time);

      if (self.el.classList.contains('glitch')) {
        self.el.classList.remove('glitch');
      }
    }
  };

  if (el !== null) {
    const typed = new Typed(el, params);
    return typed;
  }
};

export default textTyping;
