const http = require("http");
const PORT = process.env.PORT || 5001;

//Create a server with the variable we created with the http package
const server = http.createServer((req, res) => {
  console.log("someone is trying to talk to my server", req.url);
  if (req.url === "/about") {
    res.write("Hello there from the about page");
    res.end();
  } else {
    res.write("404 not found");
    res.end();
  }
});

//make the server listen to port
server.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});
