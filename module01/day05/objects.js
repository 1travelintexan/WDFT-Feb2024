const hogwarts = {
  student: "Harry",
  magical: true,
  houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
  teachers: ["snape", "Dumbuldor", "Mc gonagal"],
  numberOfStudents: 365,
  address: {
    street: "123 Magical Way",
    city: "London",
    postCode: "98765",
  },
  sayHello: function () {
    console.log("hello from Hogwarts");
  },
};
//using a function inside an object
// hogwarts.sayHello();

//adding a new key value pair to an object
hogwarts["quidditchPlayer"] = true;
// console.log(hogwarts);

// console.table(hogwarts.address);
//accessing nested objects inside hogwarts
const whereTeachersLive = `${hogwarts.teachers[2]} lives at ${hogwarts.address.street}`;
// console.log(whereTeachersLive);

//using the dot notation
// console.log("hogwarts", hogwarts);
// console.log("with the dot notation", hogwarts.houses);
// console.log("with square brackets", hogwarts["student"]);
//with dynamic values
//const example = "student";
// console.log("dynamic ex", hogwarts[example]);
//deleting a key - values
// delete hogwarts.teachers;
// //reassign a value
// // hogwarts.teachers = "Snape";
// console.log("hogwarts", hogwarts);
// //in operator
// console.log("students" in hogwarts);
//make an array of all the keys inside the object
// const ourKeys = Object.keys(hogwarts);
// console.log("Our keys", ourKeys);
// const ourValues = Object.values(hogwarts);
// console.log("Our Values", ourValues);

// // For in loop only for objects
// for (let keys in hogwarts) {
//   //   console.log("keys in the loop", keys);
//   console.log("values inside the loop", hogwarts[keys]);
// }
