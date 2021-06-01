//ES6
// In JS you can define a function anywhere and invoke it from anywhere; the order doesn't matter
// Function hoisting; All the function defintions are hoisted first; then the line-by-line execution starts

console.log(add(12, 12));
console.log(add(10));

function add(a, b) {
    return a + b;
}

//You can define a function to accept any number of arguments; 
//and you can invoke it by passing any number of arguments
function doSomething() {
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log("doing something", arguments);
}

function doSomething() {
    console.log("doing something else");
}

doSomething();
doSomething("Eat", 24, 7);
doSomething(false);
doSomething("waste time");