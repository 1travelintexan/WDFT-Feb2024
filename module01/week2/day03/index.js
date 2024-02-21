//making sure the js file is connected to the html
const body = document.querySelector("body");
const startButton = document.querySelector("#start-game");
//Getting into how to hide screens for your game
const splashScreen = document.querySelector("#splash-screen");
const gameScreen = document.querySelector("#game-screen");
const gameoverScreen = document.querySelector("#gameover-screen");
const playerInput = document.querySelector("#player-input");
let playerName = "";

//this is a getElementbyid example
const h1Element = document.getElementById("heading");
//always log the element to make sure you have it
console.log("our h1 element", h1Element);
//then you can change it
h1Element.innerText = "Our splash Screen";

//*************querySelector example***********/
//this is for a class
const h2Element = document.querySelector(".h2");
console.log("here is my h2 element", h2Element);
//change the color with the style property of the element
h2Element.style.color = "rgb(188, 43, 123)";
//in the js file, everything is camelCase!
h2Element.style.backgroundColor = "blue";

//this is for a tag
const pTagElement = document.querySelector("p");
pTagElement.style.color = "red";

//hiding the other two screens
gameScreen.style.display = "none";
gameoverScreen.style.display = "none";

//creating a html element with js
const ourNewH2 = document.createElement("h2");
ourNewH2.innerText = "Wow look we just created this!";
//adding a class to the element that just created and appended to the div
//setAttribute takes two parameters, first the name of the attribute and second the value of that attribute
ourNewH2.setAttribute("class", "some-cool-class");
ourNewH2.setAttribute("card-name", "Shazas example");

//adding another class to list of classes
ourNewH2.classList.add("another-cool-class");
//removing a class fromm the list
ourNewH2.classList.remove("some-cool-class");
//this adds the new element to the DOM
splashScreen.appendChild(ourNewH2);

//adding an event listener to a button
startButton.addEventListener("click", () => {
  startGame();
  getPlayerName();
});

function startGame() {
  console.log("clicked");
  //first hide the start screen
  splashScreen.style.display = "none";
  //second show the game screen
  gameScreen.style.display = "block";
}
function getPlayerName() {
  console.log(playerInput.value);
  playerName = playerInput.value;
  //create a element, change the innerText of that element and the append it to the DOM
  const playerElement = document.createElement("h2");
  playerElement.innerText = `Let's go ${playerName}!!!`;
  gameScreen.insertBefore(playerElement, h2Element);
}
//lets flicker the background color
// let bgColor = "aqua";
// setInterval(() => {
//   if (bgColor === "aqua") {
//     body.style.background = "red";
//     bgColor = "red";
//   } else {
//     body.style.background = "aqua";
//     bgColor = "aqua";
//   }
// }, 1000);
