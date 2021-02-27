
/* スクロール関連 */
let mysiteContent = document.querySelector('#content');
/* 対象のIDを入れる箱*/
let arrayId = new Array();
arrayId.push(document.querySelectorAll('.mysiteContent_subtitle'));
arrayId.push(document.querySelectorAll('.mysiteContent_text'));

// 一番最初に表示する際、表示領域に入っているか判断
disp_text(arrayId);

/**
 * [disp_text description]
 * @param  {[type]} arrayId [description]
 */
function disp_text(arrayId) {
  //取得したIDを1つずつ検査する
  arrayId.forEach(function(targetId){
    dispJudgment(targetId);
  });
}

/**
 * 取得したIDに対して任意のクラスに追加する
 * @param  {[type]} targetId [発火させるID]
 */
function dispJudgment(targetId) {
  for(let i = 0; i < targetId.length; i++) {
    //  DOMRect オブジェクト(矩形・方形を管理するための機能を備えたインターフェイス)の取得
    //  topの位置を取得
    const rect = targetId[i].getBoundingClientRect().top;
    let scroll;
    // クロスブラウザの対応
    // Window#scrollYを対応していない可能性があるため
    if('pageYOffset' in window) {
      scroll = window.pageYOffset;
    }
    else {
      scroll = window.document.scrollTop;
    }
    // offset：ある位置を基準とする相対的な距離などを表す数値
    const offset = scroll + rect;
    // 現在のブラウザの高さ
    const windowHeight = window.window.innerHeight;
    //150は表示する高さ調整のために使用
    if (0 > offset - windowHeight + 150) {
      // クラス名の分割
      let targetSplit = targetId[i].className.split(" ");
      //　クラスNameから発火用アニメーションクラスを追加する
      switch(targetSplit[0]) {
        case 'mysiteContent_subtitle' :
          targetId[i].classList.add('subtitle_Animatin');
          break;
        case 'mysiteContent_text' :
          targetId[i].classList.add('text_Animatin');
          break;
      }
    }
  }
}


/*表示領域にtitleが出てきたらアニメーションを発火させるクラスを追加*/
mysiteContent.addEventListener('scroll', () => {
  arrayId.forEach(function(targetId){
    // 同じクラス分回す
    for(let i = 0; i < targetId.length; i++) {
      //  DOMRect オブジェクト(矩形・方形を管理するための機能を備えたインターフェイス)の取得
      //  topの位置を取得
      const rect = targetId[i].getBoundingClientRect().top;
      let scroll;
      // クロスブラウザの対応
      // Window#scrollYを対応していない可能性があるため
      if('pageYOffset' in window) {
        scroll = window.pageYOffset;
      }
      else {
        scroll = window.document.scrollTop;
      }
      // offset：ある位置を基準とする相対的な距離などを表す数値
      const offset = scroll + rect;
      // 現在のブラウザの高さ
      const windowHeight = window.window.innerHeight;
      //150は表示する高さ調整のために使用
      if (scroll > offset - windowHeight + 150) {
        // クラス名の分割
        let targetSplit = targetId[i].className.split(" ");
        //　クラスNameから発火用アニメーションクラスを追加する
        //console.log(targetId[i].className);
        switch(targetSplit[0]) {
          case 'mysiteContent_subtitle' :
            targetId[i].classList.add('subtitle_Animatin');
            break;
          case 'mysiteContent_text' :
            targetId[i].classList.add('text_Animatin');
            break;
        }
      }
    }
  });
})
