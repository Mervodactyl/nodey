var http = require("http");
var url = require("url");

function startServer(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved loud and clear");

    response.writeHead(200, { "Content-Type" : "text/plain" });
    var content = route(handle, pathname)
    response.write("Here we go folks");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server is up and running");
}

exports.startServer = startServer
