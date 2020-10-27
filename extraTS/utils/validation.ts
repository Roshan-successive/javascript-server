import validateEmail from './helpers';
// let email = users[0].reviewerEmail;

// console.log(validateEmail(email));
    
export default function validateUsers( users: IUsers[] ): void{
    let countValid=0;
    let countInvalid=0;
    users.forEach(function(item){
    if(validateEmail(item.traineeEmail)===true && validateEmail(item.reviewerEmail)===true){
        countValid++;
    }
    else{
        countInvalid++;
    }

    })
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
}
// validateUsers(users);
    
