var express = require("express");
var app = express();

// Create the router object
var router = express.Router();

// Router middleware to log all routes hit
router.use(function(req,res,next){
  next();
});

// Provide all the routes

// Index Page
// for the / route it to the homepage
router.get("/",function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});

// Anything not defined should get a 404 error
router.get("*",function(req,res){
  res.sendFile(__dirname + "/public/404.html");
});

app.use("/",router);


// Start up the port
app.listen(3000,function(){
  console.log("Live at port 3000");
});
