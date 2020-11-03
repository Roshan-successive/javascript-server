"use strict";
exports.__esModule = true;
var express = require("express");
var controller_1 = require("./controller");
var validationHandler_1 = require("../../libs/routes/validationHandler");
var validation_1 = require("./validation");
var authMiddleWare_1 = require("../../libs/routes/authMiddleWare");
var Constants_1 = require("../../libs/routes/Constants");
var traineeRoutes = express.Router();
traineeRoutes.route('/')
    .get(authMiddleWare_1["default"](Constants_1.permissions.getUsers, 'read'), validationHandler_1["default"](validation_1["default"].get), controller_1["default"].get)
    .post(authMiddleWare_1["default"](Constants_1.permissions.getUser, 'write'), validationHandler_1["default"](validation_1["default"].create), controller_1["default"].post)
    .put(authMiddleWare_1["default"](Constants_1.permissions.getUser, 'all'), validationHandler_1["default"](validation_1["default"].update), controller_1["default"].put)["delete"](authMiddleWare_1["default"](Constants_1.permissions.getUser, 'Delete'), validationHandler_1["default"](validation_1["default"].Delete), controller_1["default"].Delete);
exports["default"] = traineeRoutes;
                                                                                                                              