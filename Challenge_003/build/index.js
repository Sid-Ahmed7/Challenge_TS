"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const firstPerson = new Person("John", 40);
firstPerson.tellMyName();
firstPerson.tellMyAge();
const secondPerson = new Person("Mary", 35);
secondPerson.tellMyName();
secondPerson.tellMyAge();
//# sourceMappingURL=index.js.map