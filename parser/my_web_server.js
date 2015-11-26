var http = require("http");

http.createServer(function(request, respond) {
  respond.writeHead(200, { "Content-Type" : "text/plain" })
  respond.end("Hello world again");
}).listen(8080);

console.log("Server runnong at port 8080  ");
