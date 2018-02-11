'use strict';
function vigenerSquare() {
  const square = [];
  for (let i = 0; i < 26; i++) {
    square[i] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let g = 0; g < i; g++) {
      square[i].push(square[i].shift());
    }
  }
  return square;
}
module.exports = vigenerSquare;
