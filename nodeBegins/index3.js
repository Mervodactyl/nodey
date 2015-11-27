var server = require("./server6");
var router = require("./router2");
var requestHandlers = require("./requestHandlers");

var handle = {};
  handle["/"] = requestHandlers.startServer;
  handle["/startServer"] = requestHandlers.startServer;
  handle["/upload"] = requestHandlers.upload;

server.startServer(router.route, handle);
