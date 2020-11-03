"use strict";
exports.__esModule = true;
function validateEmail(email) {
    var emailPattern = /^([a-zA-Z0-9\.-]+)@([a-z\.-]+).([a-z\.-]+)$/;
    if (emailPattern.test(email)) {
        return true;
    }
    else {
        return false;
    }
}
exports["default"] = validateEmail;
