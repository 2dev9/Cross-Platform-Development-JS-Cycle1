var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

//Go to the route hello to make a get request
app.get("/hello", (request, respond)=>{

	//format a JSON response
	respond.json({
		"hello":"Hello Adam",
		"syntax":"Some Syntax"
	});

	//end the response so that the server can keep running
	respond.end();
});


app.post("/hello", (request, respond)=>{
	console.log(request.body);//any sent data will be in request.body

	respond.end();

});


app.listen(8080);
console.log("Server is running!");