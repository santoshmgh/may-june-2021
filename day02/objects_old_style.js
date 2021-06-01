let arr = new Array(1, 2, 3, 4);
let arr2 = [1, 2, 3, 4];

let str = new String("word");
let str2 = "word";

let obj = new Object();
let obj2 = {};

function Person(theName) {
    this.name = theName;
}

let p1 = new Person("Sam");
console.log(p1.name);

let p2 = new Person("Ram");
console.log(p2.name);