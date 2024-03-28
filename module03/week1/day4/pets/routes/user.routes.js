const router = require("express").Router();
const UserModel = require("../models/User.model");
//all the routes go here :)

//******************post route to create a new user*************/(Mohammed)
router.post("/create-a-user", (req, res) => {
  UserModel.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//****************get route to get all users ***************/ (Raul)
router.get("/get-all-users", (req, res) => {
  UserModel.find()

    .then((allUsers) => {
      console.log(allUsers);
      res.status(200).json(allUsers);
    })

    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

//**************put route to update a user **************/(Michael)
router.put("/update-a-user/:userID", async (req, res) => {
  //   const userID = req.params.userID;
  const { userID } = req.params;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userID, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(500).json({ errorMessage: "User not found" });
    } else {
      res
        .status(200)
        .json({ message: "User updated successfully", updatedUser });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "User not found" });
    console.log("User not found");
  }
});
//****************delete route to delete a user  ***************/(Mariana)
router.delete("/delete/:id", (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      if (!deletedUser) {
        res.status(500).json({ message: "that's a mistake!💀✨👀🪠💪" }); //best error message ever
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "that's a mistake!💀✨👀🪠💪" }); //best error message ever
    });
});
module.exports = router;

// why are you breaking my code
// :((((( )))))just wanted to give you some more motivation
