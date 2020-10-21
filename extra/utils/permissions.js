let permission =
{
    'getUsers1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: [],
    },
    'getUsers2': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: [],
    }
}

function hasPermission(moduleName,role,permissionType)
{
    const {all,read,write,Delete={}} = moduleName;

    let f = all.includes(role);
    
    if(f==true)
    {
        return true;
    }
    else
    {
        if(permissionType == "read")
        {
            f=read.includes(role);
            console.log(f);
            return f;
        }
        else if(permissionType == "write"){
            f=write.includes(role);
            return f;
        }
        else if(permissionType == "Delete"){
            f=Delete.includes(role);
            return f;
        }
    }
}
let {getUsers1, getUsers2} = permission;

const result = hasPermission(getUsers1,"trainer","write");
const result1 = hasPermission(getUsers2,"trainer","write");

console.log(result);
console.log(result1);