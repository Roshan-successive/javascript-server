let users =
[
{
traineeEmail: 'trainee1@successive.tech',
reviewerEmail: 'reviewer1@successive.tech',
}
]

let email = users[0].traineeEmail;
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
console.log(validateEmail(email));