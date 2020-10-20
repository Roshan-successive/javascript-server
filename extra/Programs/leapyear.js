function createLeapyear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log("year");
    } else {
        console.log("not year");
    }
}
    let year = process.argv[2];
    createLeapyear(year);