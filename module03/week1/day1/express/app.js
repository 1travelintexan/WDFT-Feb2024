// make a variable of express from the package
const express = require("express");
//invoke the express variable to have access to all the methods
const app = express();
const PORT = process.env.PORT || 5001;

//using the morgan package
const logger = require("morgan");

//this is our first middleware!
//app.use( )
app.use(logger("dev"));
//letting our server accept json objects
app.use(express.json());
//telling our server where the static files are
app.use(express.static("public"));

//*****************routes*********************
//syntax for get route app.get('/some-route', (request, response)=>{   } )
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/profile", (req, res) => {
  //sending html back as a response
  //the special variable for the absolute path to where are currently
  console.log("absolute path", __dirname);
  res.sendFile(__dirname + "/views/profile.html");
});

//listen to a port for your app, takes a port number and a callback function
app.listen(PORT, () => {
  console.log("We are running on port ", PORT);
});
