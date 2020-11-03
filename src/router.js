"use strict";
exports.__esModule = true;
var express_1 = require("express");
var trainee_1 = require("./controllers/trainee");
var mainRouter = express_1.Router;
mainRouter.arguments('/trainee', trainee_1.traineeRouter);
exports["default"] = mainRouter;
