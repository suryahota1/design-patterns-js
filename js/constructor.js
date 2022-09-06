"use strict";
const obj = {};
const obj1 = new Object();
const obj2 = Object.create(Object.prototype);

obj1.prop1 = "Hi";
obj1["prop2"] = "Hi";
Object.defineProperty(obj1, "prop3", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Hi"
});

Object.defineProperties(obj1, {
    "prop4": {
        writable: true,
        configurable: false,
        enumerable: true,
        value: "Hello"
    },
    "prop5": {
        writable: true,
        configurable: false,
        enumerable: false,
        value: "Hello1"
    }
});
obj1.prop4 = "hello4";
// console.log(obj1.prop4);
// for ( let key in obj1 ) {
//     console.log("key", key);
// }

const person = {
    name: "Surya",
    get fullName () {
        return this.name;
    }
}

const driver = Object.create(person);
Object.defineProperties(driver, {
    "firstName": {
        value: "Hi"
    }
});

// console.log(person.fullName);

class Car {
    constructor ( name, model, year ) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.testMove = () => {
            console.log(this.model);
        }
    }

    move = () => {
        console.log("Moving", this.name);
    }
}

Car.prototype.protoMove = function () {
    console.log("inside proto", this.name);
}

const car1 = new Car("honda1", "Honda", 2022);
const car2 = new Car("honda2", "Honda", 2021);

// console.log(car1.move());
const a = {a: 2};
const b = {b: 3};

const wm1 = new WeakMap();
wm1.set(a, 5);
for ( let key in wm1 ) {
    console.log(key);
}
console.log(wm1.get(b));
