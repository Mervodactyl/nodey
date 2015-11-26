var server = require("./server5");
var router = require("./router");

server.startServer(router.route);
