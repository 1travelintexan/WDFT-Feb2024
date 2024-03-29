//******************* .map() *************/
const numbersArray = [1, 2, 3, 4, 5];
const newNumsArray = numbersArray.map((currentElement) => {
  //   console.log("current element", currentElement, "with the index of", index);
  return currentElement * 3;
});
//logging the new nums array, after the .map method
// console.log(numbersArray);
// console.log(newNumsArray);
const users = [
  { name: "Ragnar", age: 3, person: false },
  { name: "Timo", age: 9, person: false },
  { name: "Luna", age: 8, person: false },
  { name: "Joshua", age: 37, person: true },
  { name: "Gloria", age: 21, person: true },
  { name: "Michael", age: 19, person: true },
];

const allUsersNames = users.map((user) => {
  return user.name;
});
//oneliner version for .map
const oneLinerOfNames = users.map((e) => e.name);
console.log("all names", oneLinerOfNames);

// console.log("maybe friends", maybeFriends);

//******************************.filter()****************/
//.filter expects you to return true or false
// this filters out all the people
const animals = users.filter((currentUser) => {
  if (currentUser.person === false) {
    return currentUser;
  }
});
const oneLinerOfAnimals = users.filter((currentUser) => !currentUser.person);
// console.log("non people", oneLinerOfAnimals);

//filtering out all users that have an odd indexes
const youngOnes = users.filter((currentUser, userIndex) => {
  //   console.log("inside the filter", currentUser, "with the index of", userIndex);
  if (currentUser.age < 10) {
    return true;
  }
});
// console.log("young people", youngOnes);

//**************************.reduce() ***************/
const reduceArray = [55, 100, 22, 22, 1, 20];
const cart = [
  { title: "dog bone", price: 20 },
  { title: "dog bed", price: 70 },
  { title: "dog collar", price: 33 },
  { title: "jacket", price: 23 },
  { title: "toy", price: 5 },
  { title: "dog jacket", price: 23 },
];
//.reduce takes two parameters, one is the callback function and the other is the initial value of the accumulator
const total = reduceArray.reduce((accumulator, currentElement) => {
  console.log("inside the reduce, acc", accumulator);
  console.log("inside the reduce, current element", currentElement);
  return accumulator + currentElement;
}, 0);

// sum all the prices using .reduce and then apply a 10% discount
const newTotal = cart.reduce((acc, currentElement) => {
  if (currentElement.price) {
    return acc + Number(currentElement.price);
  } else {
    return acc;
  }
}, 0);
console.log("new total", newTotal);
//*******************.sort() *******************/
// console.log("before reverse", cart);
//sorting a complex array with objects
//sorting by the price ascending and if the price is the same then we sort alphabetically by the title
// cart.sort((a, b) => {
//   if (a.price > b.price) {
//     return 1;
//   } else if (a.price < b.price) {
//     return -1;
//   } else {
//     //checking the titles to sort alphabetically
//     if (a.title > b.title) {
//       return 1;
//     } else if (a.title < b.title) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// });

//an example for finding the character code of a letter
// console.log("character code for b", "b".charCodeAt(0));

//oneliner version for ascending
// reduceArray.sort((a, b) => a - b);
//oneliner version for descending
// reduceArray.sort((a, b) => b - a);
//
// reduceArray.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

//****************************.reverse()********************* */
cart.reverse();
// console.log("after reverse", cart);

//************************making a DEEP copy of an array ************/
const deepCopyOfCart = JSON.parse(JSON.stringify(cart));
