//var is function scoped
//let is block scoped
//const is block scoped and readonly
//GLOBAL variables are not recommended;
var x = 10;
let i = 10;
const PI = 3.14;

function checkEven(num) {
    globalVar = "WTH";
    if(num % 2 === 0) {
        var message = "Even";
    }
    console.log(message);
}
checkEven(12);

function checkOdd(num) {

    if(num % 2 !== 0) {
        let message = "Odd";
    }
    //console.log(message); //ERROR
    console.log(globalVar);
}
checkOdd(12);