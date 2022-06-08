for (let n = 1; n <= 16; n = n + 1) {
  const piece01 = document.querySelector('.pos-1');

  //memo:1~16ランダムに数値を決めると、番号が被る場合がある
  piece01.style.order = parseInt(Math.random() * 16) + 1;

}