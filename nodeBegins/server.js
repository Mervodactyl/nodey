var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

 // requires the http that ships with node, and is accessible through the variable http which we've created

// then calls one of the functions the http module offers ie. 'createServer'

// the function within 'createSever(function())' is whats known as an anonymous function

// that returns an object which has a method named 'listen', it also takes a numeric value which indicates the port number our http server is going to listen on
