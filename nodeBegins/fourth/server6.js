var http = require("http");
var url = require("url");

function startServer(route, handle) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathName;
    console.log("Request for " + pathName + " received.");

    route(handle, pathName);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.startServer = startServer;
