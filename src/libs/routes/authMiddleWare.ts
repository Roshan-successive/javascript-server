import * as jwt from 'jsonwebtoken';
import hasPermission1 from './Permission';
export default (module: any , permissionType:string ) =>(req,res,next)=>{

    console.log('config is',module,permissionType)
    //const token = req.headers['authorization']; 
   // console.log(token);
    let User
    try {
        const token = req.headers['authorization'];
        User = jwt.verify(token,'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(User);
        } catch(err) {
        console.log(":::::::::::::::error", err)
        }
    const result = hasPermission1(module , User.role , permissionType);
    console.log('result is',result);
    if(result===true)
        next();
    else {
        next({
            message: 'Unauthorised',
            status: 403
        });
    }
}