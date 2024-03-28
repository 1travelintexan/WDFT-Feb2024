const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const RecipeModel = require("./models/Recipe.model");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipes", (req, res) => {
  RecipeModel.create(req.body)
    .then((newRecipe) => {
      console.log("recipe created", newRecipe);
      res.status(201).json(newRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", (req, res) => {
  RecipeModel.find()
    .then((allRecipes) => {
      console.log("all the recipes", allRecipes);
      res
        .status(200)
        .json({ message: "here are the recipes you asked for", allRecipes });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipes/:recipeId", async (req, res) => {
  //   const recipeId = req.params.recipeId;
  const { recipeId } = req.params;
  //with async and await
  try {
    const foundRecipe = await RecipeModel.findById(recipeId);
    res
      .status(200)
      .json({ message: "here are the one recipe you asked for", foundRecipe });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipes/:id", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(202).json({ message: "Recipe updated ", updatedRecipe });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipes/:deleteId", async (req, res) => {
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(
      req.params.deleteId
    );
    res.status(204).end();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// Start the server
app.listen(3000, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
