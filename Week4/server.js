var http = require("http");
var movies = require("./movies.js");

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.write("Hello world!");
	res.end();
});

server.listen(8080);