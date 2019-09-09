"use strict";
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject(w, l) {
        if (w === void 0) { w = 0; }
        if (l === void 0) { l = 0; }
        this.width = w;
        this.length = l;
    }
    BaseObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    ;
    return BaseObject;
}());
var rectangle = new BaseObject();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = '';
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = (value.length > 3) ? value : '';
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = 'John';
console.log(person.firstName);
person.firstName = 'Doe';
console.log(person.firstName);
