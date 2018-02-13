'use strict';

const vigenerSquare = require('./vigenersquare.js');
const ciphermatrix = vigenerSquare();
const wordAndKey = require('./wordandkey.js');

function decoder(cipher, key) {
  const cipherArr = cipher.toLowerCase().split('');
  const keyArr = key.toLowerCase().split('');
  const arr = wordAndKey(cipherArr, keyArr);
  const uncipher = [];
  for (let i = 0; i < cipherArr.length; i++) {
    uncipher.push(ciphermatrix[0]
      [ciphermatrix[ciphermatrix[0].indexOf(arr[1][i])].indexOf(arr[0][i])]);
  }
  const result = uncipher.join('');
  console.log(result);
  return result;
}
decoder('hmiemeuvpa', 'paint'); // smartpunch
