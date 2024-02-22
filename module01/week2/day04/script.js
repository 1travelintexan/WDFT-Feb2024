//global variables
let dog = "Ragnar";
const owner = "Joshua";

if (2 === 2) {
  console.log("our global variables", dog, owner);
}
//function scope variables
const getFood = () => {
  const food = "salmon";
  return food;
};
//block level scope
if (5 > 2) {
  let blockVariable = "this is not going to work";
}
// console.log(blockVariable);
//food variable is not accessible outside of the function
// console.log(food);

// console.log(country);
var country = "Italy";

var language = "English";
// if (10 === 10) {
//   var language = "French";
//   console.log("inside the if", language);
// }
// console.log("outside", language);
//function hoisting ex
const add = () => {
  console.log("add function");
  return 4;
};
// add();

//**********************reference vs value*************/
let num = 10;
let num2 = num;
// num2 = 20;
// console.log("num", num, "num2", num2);
// console.log(num === num2);
// const arr = [1, 2, 3, [4, 5, 6]];
// //this is a real deep copy
// const trueDeepCopy = JSON.parse(JSON.stringify(arr));
// const clone = structuredClone(arr);
// trueDeepCopy.push(7, 8, 9);
// const arr2 = [...arr];
// arr2.push(4);
// console.log(arr, clone);

//***********************setTimeout example***************/
//setTimeout runs ONCE after the amount time that you give it passes
//it takes two parameters, a callback function and a time in milliseconds
let user;
// setTimeout(() => {
//   console.log("this is my setTimeout");
//   const whaYouWrote = prompt(
//     "hey! there is special discount now!!!, put your name"
//   );
//   user = whaYouWrote;
//   console.log("this is the user", user);
// }, 3000);

//************************setInterval example**************/
const h1Element = document.getElementById("heading");
let time = 0;
// let intervalId = setInterval(() => {
//   time++;
//   h1Element.innerText = "You have been on my page for ... " + time + " seconds";
//   console.log("the time is,", time);
//   if (time >= 5) {
//     clearInterval(intervalId);
//     alert("horray you made it to 5!");
//   }
// }, 1000);

//create a start button that starts counting, and a stop and clear button
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timeElement = document.getElementById("time");
let intervalId;
startBtn.addEventListener("click", () => {
  console.log("start button clicked");
  intervalId = setInterval(() => {
    time += 1;
    //this visually updates the webpage with the new time value
    timeElement.innerText = time;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  console.log("stop button clicked");
  clearInterval(intervalId);
  time = 0;
  //this visually updates the webpage with the new time value
  timeElement.innerText = time;
});
