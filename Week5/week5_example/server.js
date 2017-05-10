//to use Environment variables
require("dotenv").config();

var express = require("express");

var app = express();

app.get("/", (request, response)=>{
	console.log(process.env.NODE_ENV);
	if(process.env.NODE_ENV == "dev"){
		response.json({
			"user":process.env.DB_USER,
			"pass": process.env.DB_PASS
		});
	}else{
		response.json({
			"user": "Does not exist.",
			"password": "Does not exist."
		});
	}

	response.end();
});

app.listen(process.env.PORT || 8000);
console.log("Server is running");