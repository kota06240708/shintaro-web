// 現在のページを確認する
const checkLocation = () => {
  const $$menus = document.querySelectorAll('.header-menus');

  // currenクラスが振られていたら外す。
  $$menus.forEach(r => {
    if (r.classList.contains('current')) {
      r.classList.remove('current');
    }
  });

  const path = location.pathname;
  const pathName = path.replace(/\//g, ''); // /の部分を全て削除
  const currentMenu = document.querySelector(`.header-menus-${pathName}`);

  if (currentMenu !== null) currentMenu.classList.add('current');
};

export default checkLocation;
