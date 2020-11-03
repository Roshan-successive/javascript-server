"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var routes_1 = require("./libs/routes");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
        this.app = express();
    }
    //public initBodyParser(){
    //  this.app.use(bodyparser.json());
    //}
    Server.prototype.bootstrap = function () {
        this.initBodyParser();
        this.SetupRoutes();
        return this;
    };
    Server.prototype.SetupRoutes = function () {
        //const {app} = this;
        this.app.get('/health-check', function (req, res, next) {
            res.send('i am ok');
        });
        this.app.use('/api', 'routes');
        this.app.use(routes_1.notFoundRoute);
        this.app.use(routes_1.errorHandler);
    };
    Server.prototype.initBodyParser = function () {
        this.app.use(bodyparser.json());
    };
    Server.prototype.run = function () {
        var _a = this, app = _a.app, PORT = _a.config.PORT;
        app.listen(PORT, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("App is running on port " + PORT);
            // tslint:disable-next-line: semicolon
        });
        return this;
    };
    return Server;
}());
exports["default"] = Server;
