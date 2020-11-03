"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res, next) {
    console.log("first middleWare Working");
    next({
        err: 'Not Found',
        code: 404
    });
});
