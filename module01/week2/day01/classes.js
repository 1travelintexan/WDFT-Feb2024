//general class
class Animal {
  constructor(name, species, numberOfLegs) {
    this.name = name;
    this.species = species;
    this.numberOfLegs = numberOfLegs;
  }
  //all animals can take a nap
  takeANap() {
    console.log("zzzzzzz");
  }
}

//class Cat
class Cat extends Animal {
  constructor(name, species, numberOfLegs, age, color) {
    super(name, species, numberOfLegs);
    this.age = age;
    this.color = color;
  }
  sayMeow() {
    console.log("meoooowwww....");
  }
}

//Class Dog
class Dog extends Animal {
  constructor(name, species, numberOfLegs, age, size) {
    super(name, species, numberOfLegs);
    this.age = age;
    this.size = `${size}kg`;
    this.treats = ["bone", "egg", "Hypo treat", "biscut"];
    //remove method from parent
    //this.takeANap = undefined;
  }
  takeANap() {
    console.log("SNOORRIINNNGGG!!!!");
  }
  sayWoof() {
    console.log(`${this.name} says woof!`);
  }
  addTreat(nameOfTreat) {
    this.treats.push(nameOfTreat);
  }
  giveTreat(nameOfTreat) {
    const indexOfTreat = this.treats.indexOf(nameOfTreat);
    if (indexOfTreat >= 0) {
      this.treats.splice(indexOfTreat, 1);
    } else {
      console.log("they dont have that treat");
    }
  }
  //example to show how the keyword 'this' acts inside of a class
  logThis() {
    console.log("this in a class", this);
  }
}

//creating a new instance of the class dog
const Luna = new Cat("Luna", "cat", 4, 7, "White");
console.log("Luna", Luna);
Luna.sayMeow();
Luna.takeANap();
const Ragnar = new Dog("Ragnar", "dog", 4, 3, 28);
console.log("Ragnar", Ragnar);
Ragnar.takeANap();
//using the methods
// Ragnar.addTreat("Bone");
// Ragnar.addTreat("egg");
// // console.log(Ragnar);
// const Timo = new Dog("Timo", 9, 4);
// Timo.addTreat("Bone");
// // console.log(Timo);
// Timo.giveTreat("Hypo treat");
// console.log(Timo);
// Timo.giveTreat("steak");

//when inside an object, refers to the object that 'this' is in
// Ragnar.logThis();

/************* this ****************/
//When globally scoped, this refers to the window object
console.log("This globally scoped", this);

//Inside a function, this refers
function logThis() {
  console.log("this inside a function, with the function", this);
}
const logThisWithArrow = () => {
  console.log("this inside a function, with arrow function", this);
};
logThis();
logThisWithArrow();
/****************************/

// console.log("He is Ragnar", Ragnar);
// console.log("He is Timo", Timo);
//invoke the method inside the class
// Ragnar.sayWoof();
// Timo.sayWoof();
