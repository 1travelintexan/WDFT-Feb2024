// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5005;
const morgan = require("morgan");
const PetModel = require("./models/Pet.model");
const UserModel = require("./models/User.model");
// connect to the DB
mongoose
  .connect("mongodb://127.0.0.1:27017/SomeCoolPets")
  .then(() => {
    console.log("successfully connected to the DB!");
  })
  .catch((err) => console.log("there was an error connecting to the DB", err));
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

//create a pet in the DB
const Ragnar = {
  name: "Ragnar",
  age: 3,
  breed: "dog",
  owner: "6603feb6b463ccc062ed2945",
};
const Luna = { name: "Luna", age: 8, breed: "cat" };
const Timo = { name: "Timo", age: 9, breed: "dog" };
const arrayOfPets = [Ragnar, Luna, Timo];

//user example
// UserModel.create({ name: "Joshua" })
//   .then((createdUser) => {
//     console.log("The user was created", createdUser);
//   })
//   .catch((err) => console.log(err));
// *****************.insertMany method********************
const insertManyPets = async () => {
  try {
    const createdPets = await PetModel.insertMany(arrayOfPets);
    console.log("We created many pets", createdPets);
  } catch (err) {
    console.log("there was an error", err);
  }
};
// insertManyPets();
// .create method creates a document inside the DB based on the model
// PetModel.create(Luna)
//   .then((createdPet) => {
//     console.log("The pet was created", createdPet);
//   })
//   .catch((err) => console.log(err));
//**************find a pet in the DB with the .find method************
// PetModel.find({ breed: "dog" })
//   .then((foundDogs) => {
//     console.log("the dogs that were found are ", foundDogs);
//   })
//   .catch((err) => console.log(err));
// ******************.findOne method***************
// PetModel.findOne({ name: "Timo" })
//   .then((foundDog) => {
//     console.log("Timo is here", foundDog);
//   })
//   .catch((err) => console.log(err));
//*************find by id************** */
PetModel.findById("6603fef9773163f239ed5a35")
  .populate("owner")
  .then((foundDogById) => {
    console.log("By the Id", foundDogById);
  })
  .catch((err) => console.log(err));
//find and update a pet
//************findbyIdandUpdate ***************/
// PetModel.findByIdAndUpdate(
//   "6603ed2bef0d428e8f7a6405",
//   { name: "Loki", age: 10000 },
//   //this line returns the new information, by default it will the return the old info
//   { new: true }
// )
//   .then((updatedDog) => {
//     console.log("updated by the Id", updatedDog);
//   })
//   .catch((err) => console.log(err));

//**********update one method*********** */
// PetModel.updateOne({ name: "Luna" }, { age: 100000 })
//   .then((updatedDog) => {
//     console.log("updated by the Id", updatedDog);
//   })
//   .catch((err) => console.log(err));
//delete a pet
// PetModel.findByIdAndDelete("6603ed2bef0d428e8f7a6405")
//   .then((deleteDog) => {
//     console.log("deleted by the id", deleteDog);
//   })
//   .catch((err) => console.log(err));
// ******************ROUTES*****************
//routes with a parameters
app.get("/:petName", (req, res) => {
  const params = req.params;
  //grab the query from the route
  const queries = req.query;
  const { location, feelingBetter } = req.query;
  console.log("parmas", params);
  console.log("queries", queries, location, feelingBetter);
});

app.get("/about/:userId", (req, res) => {
  //grab the variable out of the parameters
  //   const userId = req.params.userId;
  //most common is to deconstruct
  const { userId } = req.params;
  console.log("made it to the about route", userId, req.params);
});

//example of a post route
app.post("/create-a-pet", (req, res) => {
  console.log("here is the req body", req.body);
  PetModel.create(req.body)
    .then((newDog) => {
      console.log("new dog added", newDog);
      res.json({ newDog, message: "Your dog was created!" });
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log("listening and working");
});
