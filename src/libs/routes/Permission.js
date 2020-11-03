"use strict";
exports.__esModule = true;
function hasPermission1(moduleName, role, permissionType) {
    var type;
    console.log('Module Name is', moduleName);
    console.log('permission type is', permissionType);
    console.log('role is', role);
    var all = moduleName.all, read = moduleName.read, write = moduleName.write, Delete = moduleName.Delete;
    if (permissionType === 'all')
        type = all;
    if (permissionType === 'read')
        type = read;
    if (permissionType === 'write')
        type = write;
    if (permissionType === 'Delete')
        type = Delete;
    if (role === 'head-trainer') {
        return true;
    }
    else {
        if (type.includes(role))
            return true;
        else
            return false;
    }
}
exports["default"] = hasPermission1;
