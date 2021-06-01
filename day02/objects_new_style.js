class Person {
    //CANNOT DEFINE VARIABLES DIRECTLY INSIDE THE CLASS

    constructor(theName) {
        this.name = theName;
    }

    work(hours) {
        console.log(`${this.name} works ${hours} hours `);
    }
    
    static info() {
        console.log("This is person class");
    }
}

class Superman extends Person {
    constructor(theName, theAge) {
        super(theName);
        this.age = theAge;
    }
    work(hours) {
        super.work(hours);
    }
}

Person.info();

let p1 = new Person("Sita");
console.log(p1.name);
p1.work(8);

let sm = new Superman("Brando", 100);
sm.work(25);