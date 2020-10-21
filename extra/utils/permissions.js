let permission =
{
    'getUsers1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: [],
    }
}

function hasPermission(moduleName,role,permissionType)
{
    const {all,read,write,Delete={}} = moduleName;

    let a = all.includes(role);
    
    if(a==true)
    {
        return true;
    }
    else
    {
        if(permissionType == "read")
        {
            a=read.includes(role);
            return a;
        }
        else if(permissionType == "write"){
            a=write.includes(role);
            return a;
        }
        else if(permissionType == "Delete"){
            a=Delete.includes(role);
            return a;
        }
    }
}
let {getUsers1, getUsers2} = permission;

const result = hasPermission(getUsers1,"trainer","write");


console.log(result);
