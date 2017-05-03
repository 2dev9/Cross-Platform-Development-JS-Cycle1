require("dotenv").config();

var express = require("express");
//var dotenv = require("dotenv");

var app = express();

//app.use(dotenv);

app.get("/", (request, response)=>{
	response.json({
		"user":process.env.DB_USER,
		"pass": process.env.DB_PASS
	});
	response.end();
});

app.listen(8080);
console.log("Server is running");