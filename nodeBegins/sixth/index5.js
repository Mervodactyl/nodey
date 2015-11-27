var server = require("./server8");
var router = require("./router4");
var requestHandler = require("./requestHandlers3");

var handle = {};
  handle["/"] = requestHandler.startServer;
  handle["/startServer"] = requestHandler.startServer;
  handle["/upload"] = requestHandler.upload;

server.startServer(router.route, handle);
