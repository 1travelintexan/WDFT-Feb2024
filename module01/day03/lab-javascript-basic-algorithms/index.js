// Iteration 1: Names and Input
const hacker1 = "Joahua";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Joahua";
console.log(`The navigator's name is ${hacker2}`);
const longest = "";
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
  longest = hacker1;
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
  longest = hacker2;
} else {
  console.log(
    ` Wow, you both have equally long names, ${hacker1.length} characters!`
  );
  longest = hacker1;
}
// Iteration 3: Loops
// 3.1 drivers name capitalized and with spaces
let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName.trim());

//in reverse
let backwardsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  backwardsName += hacker2[i];
}
console.log(backwardsName);

//lexigraphical order
let compare = hacker1.localeCompare(hacker2);
console.log("compare", compare);
if (compare < 0) {
  console.log("Drivers name goes first");
} else if (compare > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
