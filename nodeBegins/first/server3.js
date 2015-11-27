var http = require("http");

function startServer() {
  function onRequest(request, response) {
    console.log("Request recieved");
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.write("number three is a go");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.startServer = startServer;
