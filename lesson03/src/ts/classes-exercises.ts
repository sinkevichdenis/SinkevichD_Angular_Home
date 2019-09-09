// Exercise 1
class Car {
    private name: string;
    public acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk () : void {
        console.log("Toooooooooot!");
    };

    accelerate (speed: number) : void {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
class BaseObject {
    public width: number;
    public length: number;

    constructor (w: number = 0, l:number = 0) {
        this.width = w;
        this.length = l;
    }

    calcSize (): number {
        return this.width * this.length
    };
}

const rectangle = new BaseObject();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string;

    constructor() {
        this._firstName = '';
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = (value.length > 3) ? value : '';
    }
}

const person = new Person();
console.log(person.firstName);
person.firstName = 'John';
console.log(person.firstName);
person.firstName = 'Doe';
console.log(person.firstName);
