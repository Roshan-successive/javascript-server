function createfactorial(n)
{
    let fact = 1;
    if(n == 0 || n ==1)
    {
        return fact;
    }
    else
    {
        for(let i = n; i>=1; i--)
        {
            fact = fact * i;
        }
    }
    console.log(fact);
}

n = process.argv[2];
createfactorial(n);