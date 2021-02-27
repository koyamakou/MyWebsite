

/**
 * [load description]
 * @param       {[String]} targetTag [Id or class]
 * @param       {[String]} svgPath   [SvgFilePath]
 * @constructor
 */
export function load(targetTag, svgPath, callback) {
  return new Promise(resolve => {
    const targetId = document.querySelectorAll(targetTag)[0];

    // DOMParser インターフェイス
    const xmlParser = new DOMParser();
    let xmlDom;
    // XHR
    const xhr = new XMLHttpRequest();
    let responseXml;
    let responseData;
    // result
    let result;

    xhr.onreadystatechange = function() {
      switch (xhr.readyState) {
        case 0:
          // 未初期化状態.
          break;
        case 1:
          // データ送信中.
          break;
        case 2:
          // 応答待ち.
          break;
        case 3:
          // データ受信中.
          break;
        case 4:
          // データ受信完了.
          if (xhr.status == 200 || xhr.status == 304) {
            responseXml = xhr.responseXML;
            // 要素自身<svg>を含めるためouterHTMLを使用
            responseData = responseXml.rootElement.outerHTML;
            xmlDom = xmlParser.parseFromString(responseData, 'image/svg+xml');
            // htmlに追加
            targetId.appendChild(xmlDom.childNodes[0]);
            //console.log(responseXml);
            result = true;
          } else {
            responseXml = 'error HttpStatus：' + xhr.status;
            //console.log(responseXml);
            result = false;
          }
          break;
        default:
          result = false;
      }
    }

    xhr.open('GET', svgPath, true);
    xhr.send(null);
    xhr.onload = function () {
      let retrunValue = callback();
      resolve(retrunValue);
    }
  })
}
