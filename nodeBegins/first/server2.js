var http = require("http");

function onRequest(request, response) {
  console.log("Request recieved");
  response.writeHead(200, { "Content-Type" : "text/plain" });
  response.write("Howdy folks");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started");

// onRequest is our callback here

// Event driven asynchronous server-side JavaScript with callbacks in action!!! :DDDDD
