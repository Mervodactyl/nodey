var server = require("./server7");
var router = require("./router3");
var requestHandler = require("./requestHandlers2");

var handle = {};
  handle["/"] = requestHandler.startServer;
  handle["/startServer"] = requestHandler.startServer;
  handle["/upload"] = requestHandler.upload;

server.startServer(router.route, handle);
