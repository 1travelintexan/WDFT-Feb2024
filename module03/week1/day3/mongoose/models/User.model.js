const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
