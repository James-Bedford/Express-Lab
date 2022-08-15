//const { response } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");
let app = express();
let date = new Date();
const bodyParser = require("body-parser");

/*Custom middleware */
/*
app.use((request, response, next) => {
  console.log("Request from browser to connect to server. ");
  console.log(request.originalUrl);
  console.log("Request granted");
  //Log information to logfile.
  fs.appendFileSync("log.txt", `${request.url}\n`);
  fs.appendFileSync("log.txt", `${request.ip}\n`);
  fs.appendFileSync("log.txt", `Server and browser connected at ${date}\n`);
  next();
}); */
//end custom middleware
/*  original lab task 
app.get("/", (request, response) => {
  response.send("Hello test");
});  */

/*
app.get("/", (request, response) => {
  // response.send("Hello from the web server side...");
  //open index.html
  response.sendFile(path.join(__dirname, "../public/index.html"));

  // response;
});
*/
//app.use(path.join(__dirname, "../public/index.html"));

//Use post to send information to webpage
//app.use(express.static(path.join(__dirname, "..public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/contact-form", (request, response) => {
  console.log(request.body.email);
  console.log(request.body.name);
  console.log(request.body.message);

  response.send("Info sent");
});
app.use(express.static(path.join(__dirname, "../public")));
app.listen(3007);
