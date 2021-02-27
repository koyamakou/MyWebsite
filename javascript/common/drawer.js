export function hamburgerButton () {

  let parentId;
  let targeChild;
  let targetHamburgerOpen = document.querySelectorAll('.HamburgerMenu')[0];
  let targetHamburgerClose = document.querySelectorAll('.wrapperAppearInsideMenu')[0];

  targetHamburgerOpen.addEventListener('click', () => {
    parentId = document.querySelectorAll('#root')[0];
    targeChild = parentId.getAttribute('data-drawer');
    console.log(targeChild);
    //カスタムデータの検証
    if (targeChild === 'close' || targeChild === '') {
      parentId.setAttribute('data-drawer', 'open');
      return ;
    }
  });

  targetHamburgerClose.children[4].childNodes[1].addEventListener('click', () => {
    parentId = document.querySelectorAll('#root')[0];
    targeChild = parentId.getAttribute('data-drawer');
    //カスタムデータの検証
    if (targeChild === 'open') {
      parentId.setAttribute('data-drawer', 'close');
      return ;
    }
  });
}

// resizeイベントの取得
/*window.addEventListener('resize', () => {
  // あとは上記と同じスクリプトを実行
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--fullScreenHeight', `${vh}px`);
});*/
