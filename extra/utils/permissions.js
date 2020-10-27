
function hasPermission(moduleName,role,permissionType){
    if(!moduleName.hasOwnProperty(permissionType)){
        console.log("false");
    }
    else if(moduleName[permissionType].includes(role)|| (role=='head-trainer')){
        console.log("true");
    }
    else{
            console.log("false");
        }
}
        
// const { getUser, getUsers } = permissions;
// hasPermission('getUsers','head-trainer', 'read');
// hasPermission('getUser','trainer','write');