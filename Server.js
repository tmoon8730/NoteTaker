var express = require("express");
var app = express();

// Create the router object
var router = express.Router();

// Setup app stuff
app.set('view engine','pug');
app.use("/",router);


// Router middleware to log all routes hit
router.use(function(req,res,next){
  next();
});

// Provide all the routes

// Index Page
// for the / route it to the homepage
router.get("/",function(req,res){
  //res.sendFile(__dirname + "/public/index.html");
  res.render(__dirname + "/views/index.pug", {title: "Home"});
});

// About Page
router.get("/about",function(req,res){
  res.render(__dirname + "/views/about.pug", {title: "About"});
});
// Anything not defined should get a 404 error
router.get("*",function(req,res){
  res.sendFile(__dirname + "/public/404.html");
});




// Start up the port
app.listen(3000,function(){
  console.log("Live at port 3000");
});
