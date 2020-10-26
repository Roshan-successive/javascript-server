let users =
[
{
traineeEmail: 'trainee1successive.tech',
reviewerEmail: 'reviewer1@successive.tech',
},
{
traineeEmail: 'roshan.chaudhary@gmail.com',
reviewerEmail: 'risabh.singh@gmail.com',
}
]

// let email = users[0].reviewerEmail;
function validateEmail(email){
let emailPattern = /^([a-zA-Z0-9\.-]+)@([a-z\.-]+).([a-z\.-]+)$/;
if(emailPattern.test(email))
{

    return true;
}
else
{

    return false;
}
}
// console.log(validateEmail(email));
    
function validateUsers(users){
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
    ;
}
validateUsers(users);
    
