"use strict";
exports.__esModule = true;
exports["default"] = (function (err, req, res, next) {
    console.log("Error is " + err.err);
    res.send({
        'error': err.err,
        'message': err.code,
        'status': err.message || "Error",
        timeStamp: new Date()
    });
});
