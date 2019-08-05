// Please, create and add correct interface for the person

interface PersonType {
    firstName: string,
    lastName?: string,
    hobbies?: string[],
    greet: (name: string) => void
}

function greet(person: PersonType) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: PersonType) {
    person.firstName = "Anna";
}

const person: PersonType = {
    firstName: "John",
    hobbies: ["Cooking", "Sports"],
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

changeName(person);
greet(person);
person.greet("Anything");
/*
class Person {
    firstName: string;
    lastName: string;

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson  = new Person();
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);*/
