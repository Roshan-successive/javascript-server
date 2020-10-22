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


    // console.log(permission);
    if(moduleName === 'getUsers1'){
        
        const {getUsers1} = permission;
        const {all,read,write,Delete={}} = getUsers1;
    
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
            else
                return false
        }
    }
    else
       return "enter valid moduleName";
    }
let {getUsers1} = permission;


const result = hasPermission('getUsers',"trainer",'all');
console.log(result);

