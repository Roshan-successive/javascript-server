"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
var configuration_1 = require("./config/configuration");
console.log('config is', configuration_1["default"]);
var server = new Server_1["default"]({ PORT: 9000 });
server.bootstrap().run();
