function equitriangle(n)
{
    // using for space
    let s="";
    //using for row
    let j = n;
    for (let i=1; i<=n; i++)
  {
        s=" ".repeat(j);
        console.log(s,' *'.repeat(i));
        s="";
        j--;
  }
}
n = process.argv[2];
equitriangle(n)