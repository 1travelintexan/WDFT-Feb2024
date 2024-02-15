//functions with the 'function' keyword and with the arrow syntax
//this is declaring a function
// function addNumbers(num1, num2) {
//   const sum = num1 + num2;
//   console.log("here is the sum", sum);
//   return sum;
//   //anything after the return doesn't get executed
//   console.log("this wont work");
// }
// //this is invoking('calling') the function
// const result = addNumbers(3, 4);
// console.log(result);

// //with arrow function
// const subtractNums = (pizza1, pizza2) => {
//   return pizza1 - pizza2;
// };
// //oneliner version of arrow function
// const multiplyNums = (a, b) => a * b;

// //invoking an arrow function
// const total = subtractNums(10, 5);
// console.log("here is our total", total);
// const multTotal = multiplyNums(2, 4);
// console.log(multTotal);

/********************************************** */
// Arrays
// const pets = ["Ragnar"];
// //arrrays have a length
// console.log("our pet array length", pets.length);
// //the push method
// pets.push("Luna", "Reaper", "Buddy");
// console.log("after push", pets);
// //unshift (add something to the front of the array)
// pets.unshift("Timo");
// console.log("after unshift", pets);
// //pop method to remove the last element
// pets.pop();
// console.log("after pop", pets);
// //shift method removes the first element
// pets.shift();
// console.log("after shift", pets);
// //splice to remove the second element
// //splice takes up to 3 parameters, starting index, delete count, something you want to add
// pets.splice(0, 1, "Timo", "Joshua", "Caro");
// console.log("after splice", pets);
// //if we dont know the index
// const indexOfJosh = pets.indexOf("Joshua");
// pets.splice(indexOfJosh, 1);
// console.log("after removing Josh", pets);

//***************************** */
//.forEach() takes one parameter that has to be a function
//forEach never returns anything
//function(){} is the same as ()=>{}
// const arr = [1, 2, 3, 4, 5];
// const evens = [];
// const odds = [];
// let total = 0;
// arr.forEach((currentElement, index, wholeArray) => {
//   if (currentElement % 2 === 0) {
//     evens.push(currentElement);
//   } else {
//     odds.push(currentElement);
//   }
//   //   console.log("current element", currentElement, "with the index of", index);
//   //   total += currentElement;
//   //   console.log("Our third argument", wholeArray);
//   //   //this will never be returned
//   //   return "hello";
// });
// console.log("evens and odds", evens, odds);
// let str = ["djalkjasldf"];
// str.split().forEach((e) => console.log(e));

//functions that do something important
//function that takes one parameter and that will be an array
//then uses a .forEach method to iterate over the array and
//adds all numbers in an array return the sum
const robsArray = [2, 4, 6, 8];

const addArray = (array) => {
  let total = 0;
  array.forEach((currentElement) => {
    total += currentElement;
  });
  console.log("total inside the function", total);
  return total;
};
//invoking the function
const robsTotal = addArray(robsArray);
console.log("Robs total", robsTotal);

//function that takes an array of strings, and returns the longest string
const arrayOfStrings = ["Texas", "Portugal", "Spain", "France"];
function longestWord(array) {
  //making a variable that is only used in this function
  let theLongestWord = "";
  array.forEach((currentWord) => {
    if (currentWord.length > theLongestWord.length) {
      theLongestWord = currentWord;
    }
  });
  return theLongestWord;
}
//calling the function
const ourLongestWord = longestWord(arrayOfStrings);
console.log("here is the longest word", ourLongestWord);
