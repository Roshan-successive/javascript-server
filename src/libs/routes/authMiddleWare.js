"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var Permission_1 = require("./Permission");
exports["default"] = (function (module, permissionType) { return function (req, res, next) {
    console.log('config is', module, permissionType);
    var token = req.headers['authorization'];
    console.log(token);
    var User = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
    console.log(User);
    var result = Permission_1["default"](module, User.Role, permissionType);
    console.log('result is', result);
    if (result === true)
        next();
    else {
        next({
            message: 'Unauthorised',
            status: 403
        });
    }
}; });
