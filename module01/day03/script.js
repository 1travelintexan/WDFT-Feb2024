//This is a single line comment
/*This 
is 
a 
multiple 
line 
comment */

console.log("This is our first log");
// const , let , and var (never use var)
// this is declaring a variable
let studentName;
// this is assigning a variable
studentName = "daniel";
// reassigning the variable to what we want
studentName = studentName[0].toUpperCase() + studentName.slice(1);
// always give a const a value
const petName = "Ragnar";

// the .length property on strings
const ragnarsLength = petName.length;
// console.log("the length", ragnarsLength);
// let ourString = `Let's "talk" about strings, and my pet ${petName}`;
let ourOldStyleString = "let's talk about strings, and my pet" + " " + petName;
// console.log("here is our first letter of our student name", studentName);

const doesItHave = petName.includes("Rag");
const indexOfR = petName.indexOf("z");
// console.log("includes method", typeof doesItHave);
// console.log("indexOf method", indexOfR);

// NUMBERS!!!

let myAge = "37.9";
// to string method
let myNewAge = (myAge + 10).toString();
// convert a string that is a number to type of number
//Number( string inside here)
//parseInt(string inside here)
//+ in front of a string that is a number
const myAgeAsANumber = parseInt(myAge);
let mathEx = Math.pow(2, 3);
// console.log("Math object", mathEx);
// console.log("my actual age", myAge);
// console.log("my age as a number", myAgeAsANumber);

//Math.random
const randomNumber = Math.random();
console.log(randomNumber);
let petName2 = "Reaper";
const randomLetterIndex = Math.floor(Math.random() * petName2.length);
console.log("our random letter", petName2[randomLetterIndex]);
