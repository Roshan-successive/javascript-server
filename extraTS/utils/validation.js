"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
// let email = users[0].reviewerEmail;
// console.log(validateEmail(email));
function validateUsers(users) {
    var countValid = 0;
    var countInvalid = 0;
    users.forEach(function (item) {
        if (helpers_1["default"](item.traineeEmail) === true && helpers_1["default"](item.reviewerEmail) === true) {
            countValid++;
        }
        else {
            countInvalid++;
        }
    });
    console.log("Valid: " + countValid + " Invalid: " + countInvalid);
}
exports["default"] = validateUsers;
// validateUsers(users);
