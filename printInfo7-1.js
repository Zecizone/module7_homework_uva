//Задание 7.7.1

const person = {
    name: 'Ваня',
    age: 30
}

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);