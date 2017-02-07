var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.shop;
handle["/shop"] = requestHandlers.shop;
handle["/recommendation"] = requestHandlers.recommendation;
handle["/login"] = requestHandlers.login;

server.start(router.route, handle);