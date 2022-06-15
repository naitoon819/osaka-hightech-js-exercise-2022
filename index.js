//State相当の値を準備（今回の場合は配列）
var peaces = [
  6, 4, 3, 10,
  7, 1, 2, 5,
  9, 13, 12, 8,
  15, 14, 16, 11,
];

// Component 相当の関数を準備 (State => View にあたるもの)
function component() {
  for (let n = 0; n < 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + (n + 1));
  
    piece.style.order = peaces[n];
  }
}

// 初期化処理 (WIP: 全てのピースをランダムに配置する)
component();

//ピースがクリックしたときに実行する処理（関数）
function pieceClickHandler(event) {
    console.log('ピースがクリックされました');
    console.log(event,target);
}

//ピースのクリックを監視し、クリックされたらpieceClickHandlerを呼ぶ
for (let n = 1; n <= 15; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);
  
    piece.addEventListener('click', pieceClickHandler);
}