var http = require("http");

function startServer() {
  function onRequest(require, respond) {
    console.log("Request recieved");
    respond.writeHead(200, { "Content-Type" : "text/plain" });
    respond.write("number three is a go");
    respond.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.startServer = startServer;
