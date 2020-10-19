//Array methods
//1- Array.from()
let str = "roshan"
const fromString = Array.from(str);
console.log(fromString)

//2- Array.isArray()
var result = Array.isArray(["roshan" , "raj"])
console.log(result)

//3- Array.of
let numbers = new Array(2);
console.log(numbers.length); 
console.log(result)

//3- Array.of
let numbers = new Array(2);
console.log(numbers.length); 
console.log(numbers[0]);

//4- Array.prototype.concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

//5-Array.prototype.copyWithin()

const array1 = ['a', 'b', 'c', 'd', 'e'];

console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));
