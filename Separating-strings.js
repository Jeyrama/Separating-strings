/*
Create a function that takes a string and separates it into a sequence of letters.
Examples:
  sepStr("Just Live Life Man")
  [['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']]);

The function should separate each word into individual letters, 
with the first word in the sentence having its letters in 
the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the 
place once the word has already been mapped out. 
(See the last element in the last part of the array.)
*/


// Solution

function sepStr(arr) {
  let words = arr.split(/\s+/),
     length = Math.max(...words.map(w => w.length)),
     result = [];

  for(let i = 0; i < length; i++) {
    result.push(words.map(w => w[i] || ''));
  }
  return result;
}

// or

function sepStr(str) {
  let sepArr = [];
  let words = str.split(' ');
  
  // find longest word to know how many times to repeat cycle
  let longestLen = 0;
  for (let word of words) {
    if (word.length > longestLen) {
      longestLen = word.length;
    }
  }
  
  // iterate over the array of words however many times to get every letter of the longest word
  for (let i = 0; i < longestLen; i++) {
    // make a new array for each row / index
    let rowStr = [];
    for (let word of words) {
      // if haven't gone past the length of a word, add the letter at that index to the array and remove it from the word
      if (word[i] !== undefined) {
        rowStr.push(word[i]);
      } else {
        // if we have gone past the length of a word, push in an empty string
        rowStr.push('');
      }
    }
    // add the array of letters to the whole array
    sepArr.push(rowStr);
  }
  
  return sepArr;
}