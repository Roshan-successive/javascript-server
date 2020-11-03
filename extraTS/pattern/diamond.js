"use strict";
exports.__esModule = true;
function diamond(n) {
    // using for space
    var s = "";
    //using for row
    var j = n;
    for (var i = 1; i <= n; i++) {
        s = " ".repeat(j);
        console.log(s, '* '.repeat(i));
        s = "";
        j--;
    }
    for (var i = n; i >= 1; i--) {
        s = " ".repeat(j);
        console.log(s, ' *'.repeat(i));
        s = "";
        j++;
    }
}
exports["default"] = diamond;
// n = process.argv[2];
// diamond(n);
