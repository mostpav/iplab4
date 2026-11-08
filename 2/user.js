export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Привіт! Мене звати ${this.name}, мені ${this.age} років.`;
    }
}