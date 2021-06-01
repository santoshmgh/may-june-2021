let model = "BMW";
let year = 2017;

let carOldStyle = {
    model: model,
    year: year
};

let car = { model, year };
console.log(car);

let person = {
    name: 'John',
    age: 12
};
// let name = person.name;
// let age = person.age;

//Object destructuring
let { name, age } = person;
console.log(name, age);