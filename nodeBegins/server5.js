var http = require("http");
var url = require("url");


function startServer(route) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathName;
    console.log("Request for " + pathName + " received");


    route(pathName);

    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.write("This is for all the little people");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server up and running");
}

exports.startServer = startServer;