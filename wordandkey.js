'use strict';
function wordAndKey(arr1, arr2) {
  const wordAndKey = [];
  wordAndKey[0] = arr1;
  const keys = [];
  for (let i = 0; i < Math.ceil(arr1.length / arr2.length); i++) {
    for (let i = 0; i < arr2.length; i++) {
      keys.push(arr2[i]);
    }
  }
  wordAndKey[1] = keys;
  if (wordAndKey[1].length > wordAndKey[0].length) {
    wordAndKey[1].splice(wordAndKey[0].length,
      wordAndKey[1].length - wordAndKey[0].length);
  }
  return wordAndKey;
}
module.exports = wordAndKey;
