// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
function findLongestWord(array) {
  if (array.length === 0) {
    return 0;
  }

  let longestWord = "";
  array.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  });

  //return the longest word
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  //   //with .reduce
  //   const total = array.reduce((accumulator, currentElement) => {
  //     return currentElement + accumulator;
  //   }, 0);
  //   return total;

  //With a forEach
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arrOfNums) {
  if (arrOfNums.length === 0) {
    return 0;
  }
  return sumNumbers(arrOfNums) / arrOfNums.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, searchWord) {
  //Junior solution
  if (arrayOfWords.length === 0) {
    return null;
  }
  return arrayOfWords.includes(searchWord);

  //Adrians solution
  //   return !arrayOfWords.length
  //     ? null
  //     : arrayOfWords.some((word) => word === searchWord);
}
