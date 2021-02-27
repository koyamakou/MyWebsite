import * as svgLoadModule from './loadSvg.js';

let loadingBorder
let loadingButterfly
let loadingButterflyRever

export async function LoadAnimation(target, svgPath){
  // 非同期処理となっているため、Promiseで渡す。
  return await svgLoadModule.load(target, svgPath, function(){
    const targetId = document.querySelectorAll(target)[0];
    // svgのPathの長さを取得する際は、 pathタグ<path/>からgetTotalLength()を使用して取得する
    const svgPath = targetId.childNodes[1].childNodes[5].childNodes[1];
    const svgPathLength = svgPath.getTotalLength();
    //console.log(svgPathLength);

    let animationTL = anime.timeline({
      easing: 'easeInOutCirc',
      direction: 'alternate',
      loop: true,
      autoplay: false
    })
    animationTL
    .add({
      targets: svgPath,
      strokeDashoffset: [anime.setDashoffset, svgPathLength/1.21],
      duration: 10000,
    });
    animationTL.play();
    return animationTL;
  });

};

export function boderLoading() {
  const targetId = document.querySelectorAll('.middleLading')[0];

  //console.log(targetId);
  var animetionLading = anime.timeline({
    easing: 'easeInOutCirc',
    direction: 'alternate',
    duration: 1600,
    loop: true,
    autoplay: false
  });

  animetionLading
  .add({
    targets: targetId.children[0],
    scaleX : 0
  })
  .add({
    targets: targetId.children[3],
    scaleY : 0
  })
  .add({
    targets: targetId.children[2],
    scaleX : 0
  })
  .add({
    targets: targetId.children[1],
    scaleY : 0
  });
  animetionLading.play();
  return animetionLading;
}

/**
 * LoadingAnimetionの停止
 * @param  {[type]} loadingBorder         [description]
 * @param  {[type]} loadingButterfly      [description]
 * @param  {[type]} loadingButterflyRever [description]
 * @return {[type]}                       [description]
 */
export function stopLoad(loadingBorder, loadingButterfly, loadingButterflyRever) {
  //console.log(loadingButterfly);
  loadingBorder.pause();
  loadingButterfly.pause();
  loadingButterflyRever.pause();

  // CSSで指定して、loading画面を非表示する
  const targetId = document.querySelectorAll('#loading')[0];
  targetId.style.display = 'none';
  targetId.style.zIndex = '-1';
}


///////LadingAnimatin////////////
( async() => {
  loadingBorder = boderLoading();
  // SVGが読み込間れるまで、awaitで待たせる
  await LoadAnimation('#TopRight', '../images/butterfly.svg').then((value) => {
    loadingButterfly = value;
  });
  // SVGが読み込間れるまで、awaitで待たせる
  await LoadAnimation('#ButtomLeft', '../images/butterfly_reversal.svg').then((value) => {
    loadingButterflyRever = value;
  });
  // 1.5秒間loding画面の表示
  window.setTimeout(function(){
    window.addEventListener('load', stopLoad(loadingBorder, loadingButterfly, loadingButterflyRever));
  }, 1000);
})();
