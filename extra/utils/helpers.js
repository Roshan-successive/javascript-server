export default function validateEmail(email){
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