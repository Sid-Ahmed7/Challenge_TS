class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    tellMyName(): void { 
        console.log(`I am ${this.name}`)
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }

}

const firstPerson = new Person("John", 40);
firstPerson.tellMyName();
firstPerson.tellMyAge();

const secondPerson = new Person("Mary", 35);
secondPerson.tellMyName();
secondPerson.tellMyAge();