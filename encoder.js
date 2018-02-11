'use strict';

const vigenerSquare = require('./vigenersquare.js');
const ciphermatrix = vigenerSquare();
const wordAndKey = require('./wordandkey.js');

function encoder(word, key) {
  const wordArr = word.split('');
  const keyArr = key.split('');
  const arr = wordAndKey(wordArr, keyArr);
  const cipher = [];
  for (let i = 0; i < wordArr.length; i++) {
    cipher.push(ciphermatrix[ciphermatrix[0].indexOf(arr[0][i])]
    [ciphermatrix[0].indexOf(arr[1][i])]);
  }
  const result = cipher.join('');
  console.log(result);
  return result;
}
encoder('smartpunch', 'paint');
