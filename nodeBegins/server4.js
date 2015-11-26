var http = require("http");
var url = require("url");

function startServer() {
  function onRequest(require, respond) {
    var pathName = url.parse(request.url).pathName; // can now distinguish requests based on the url requested
    console.log("Request for " + pathName + " recieved");
    respond.writeHead(200, { "Content-Type" : "text/plain" });
    respond.write("Fourth server up and running");
    respond.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server online");
}

exports.startServer = startServer;
