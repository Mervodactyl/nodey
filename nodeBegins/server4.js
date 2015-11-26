var http = require("http");
var url = require("url");

function startServer() {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathName; // can now distinguish requests based on the url requested
    console.log("Request for " + pathName + " recieved");
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.write("Fourth server up and running");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server online");
}

exports.startServer = startServer;
