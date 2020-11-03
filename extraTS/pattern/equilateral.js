"use strict";
exports.__esModule = true;
function equitriangle(n) {
    // using for space
    var s = "";
    //using for row
    var j = n;
    for (var i = 1; i <= n; i++) {
        s = " ".repeat(j);
        console.log(s, ' *'.repeat(i));
        s = "";
        j--;
    }
}
exports["default"] = equitriangle;
// n = process.argv[2];
// equitriangle(n)
