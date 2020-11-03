"use strict";
exports.__esModule = true;
// import { isNullOrUndefined } from 'util';
exports["default"] = (function (config) { return function (req, res, next) {
    var errors = [];
    console.log('Inside ValidationHandler Middleware');
    console.log(req.body);
    console.log(req.query);
    console.log(Object.keys(req.query).length);
    var keys = Object.keys(config);
    keys.forEach(function (key) {
        var obj = config[key];
        console.log('key is', key);
        var values = obj["in"].map(function (val) {
            // console.log( 'val',val );
            // console.log( 'key', key );
            return req[val][key];
        });
        // Checking for In i.e Body or Query
        console.log('body is', req[obj["in"]]);
        console.log('body', Object.keys(req[obj["in"]]).length);
        if (Object.keys(req[obj["in"]]).length == 0) {
            errors.push({
                message: "Values should be passed through " + obj["in"],
                status: 400
            });
        }
        // Checking for required
        console.log('values is', values);
        // console.log( 'values exist' , isNull( values ) );
        if (obj.required) {
            if (isNull(values)) {
                errors.push({
                    message: key + " is required",
                    status: 404
                });
            }
        }
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                errors.push({
                    message: key + " Should be a String",
                    status: 404
                });
            }
        }
        if (obj.isObject) {
            if (!(typeof (values) == 'object')) {
                errors.push({
                    message: key + " Should be an object",
                    status: 404
                });
            }
        }
        if (obj.regex) {
            var regex = obj.regex;
            if (!regex.test(values[0])) {
                errors.push({
                    message: key + " is not valid expression",
                    status: 400
                });
            }
        }
        if (obj.number) {
            if (!isNaN(values[0]) || values[0] === '' || values[0] === undefined) {
                errors.push({
                    message: key + "  must be an number",
                    status: 400
                });
            }
        }
    });
    if (errors.length > 0) {
        res.status(400).send({ errors: errors });
    }
    else {
        next();
    }
}; });
function isNull(obj) {
    // console.log('obj[0',obj[0]);
    var a = (obj == undefined || obj === null);
    // console.log('result' , a);
    return a;
}
