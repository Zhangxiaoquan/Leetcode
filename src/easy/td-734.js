/**
 * 利用hashmap的想法来完成，通过两边遍历O(n)的复杂度完成匹配这样的空间使用率为O(n)
 * 如果这个题有个变种，就是可以为空那怎么做
 */

 /**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
  let map = {};
  if (words1.length !== words2.length) {
    return false;
  }
  for (let i = 0; i < pairs.length; i++) {
    let firstWord = pairs[i][0];
    let secondWord = pairs[i][1];
    if (!map[firstWord]) {
      map[firstWord] = {};
    }
    if (!map[secondWord]) {
      map[secondWord] = {}
    }
    // 在es6的基础上可以采用 new Set()
    map[firstWord][secondWord] = 'in';
    map[secondWord][firstWord] = 'in';
  }
  let maxWords = words2.length > words1.length ? words2 : words1;
  let minWords = words2.length > words1.length ? words1 : words2;
  let maxIndex = 0;
  let minIndex = 0;
  while (minIndex < minWords.length &&  maxIndex < maxWords.length) {
    if (minWords[minIndex] === maxWords[maxIndex]) {
      maxIndex++;
      minIndex++;
      continue;
    }
    if ((map[minWords[minIndex]] && map[minWords[minIndex]][maxWords[maxIndex]]) || (map[maxWords[maxIndex]] && map[maxWords[maxIndex]][minWords[minIndex]])) {
      maxIndex ++;
      minIndex ++;
      continue;
    }
    return false;
  }
  if (maxIndex === maxWords.length && minIndex === minWords.length) {
    return true;
  }
  return false;
};

module.exports = areSentencesSimilar;