var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	hbs = require("hbs"),
	User = require("./user"),
	app = express();

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", function(req,res){
	User.findOne({"username":req.body.username}, function(err, user){
		if(err){
			console.log(err);
		}else{
			someUser = user;
			res.redirect("/data");
		}
	});
});

app.get("/signup", function(req, res){
	res.render("signup");
});

app.post("/signup", function(req,res){
	new User({
		username:req.body.username,
		password: req.body.password
	}).save(function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/login");
		}
	});
});

app.get("/data", function(req, res){
	res.render("data");
});

mongoose.connect("mongodb://localhost/user")

app.listen(8080, function(){
	console.log("The server runneth!");
});