

export function hamburgerButton () {

  let parentId;
  let targeChild;
  let targetHamburgerOpen = document.querySelectorAll('.HamburgerMenu')[0];
  let targetHamburgerClose = document.querySelectorAll('.wrapperAppearInsideMenu')[0];

  targetHamburgerOpen.addEventListener('click', () => {
    parentId = document.querySelectorAll('#header')[0];
    targeChild = parentId.getAttribute('data-drawer');
    console.log(targeChild);
    //カスタムデータの検証
    if (targeChild === 'close' || targeChild === '') {
      parentId.setAttribute('data-drawer', 'open');
      return ;
    }
  });

  targetHamburgerClose.children[3].childNodes[1].addEventListener('click', () => {
    parentId = document.querySelectorAll('#header')[0];
    targeChild = parentId.getAttribute('data-drawer');
    //カスタムデータの検証
    if (targeChild === 'open') {
      parentId.setAttribute('data-drawer', 'close');
      return ;
    }
  });
}



/*
export function hamburgerButton () {
  let targetHamburger = document.querySelectorAll('#header')[0];

  targetHamburger.addEventListener('click', () => {
    let targe = targetHamburger.getAttribute('data-drawer');
    //カスタムデータの検証
    if (targe === 'close' || targe === '') {
      targetHamburger.setAttribute('data-drawer', 'open');
    }
    else {
      targetHamburger.setAttribute('data-drawer', 'close');
    }
  });
}*/
