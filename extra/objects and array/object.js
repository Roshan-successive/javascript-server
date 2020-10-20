// Object Methods
// 1- Object.assign()
let square = {
    height: 10,
    width: 20,
    color: 'blue'
    };
    
    let circle = {
    color: 'Red',
    borderStyle: 'solid'
    };
    
    let styleBox = Object.assign({}, square, circle);
    
    console.log(styleBox); 
    
    // 2- Object.create()
    prototypeObject = {
    fullName: function(){
    console.log(`My name is ${this.firstname}. last name is ${this.lastname}`); 
    }
    };
    
    var person = Object.create(prototypeObject) 
    person.firstname = "virat";
    person.lastname = "kholi";
    person.fullName(); 
    
    // 3- Object.defineProperty
    var object1 = {};
    Object.defineProperties(object1 , {
    property1: {
    value: 5000,
    writable: true,
    enumerable: false
    },
    property2: {}
    });
    console.log(object1.property1);
    
    
    
    
    