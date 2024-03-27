//grab the model method ane the schema from our package
const { model, Schema } = require("mongoose");

//first thing is to define the shape of document
const petSchema = new Schema({
  name: String,
  age: Number,
  breed: {
    type: String,
    enum: ["collie", "pitbull", "yorkie", "cat", "dog"],
    required: true,
  },
  owner: {
    //this is for the .populate in the future
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
//creating a model for the pet, the model needs a collection name and the shape of the documents
const PetModel = model("Pet", petSchema);
//allows us to require the pet model on different files
module.exports = PetModel;
