import Human from "./human.js";
export default class Man extends Human{
    constructor(name, age, weight){
        super(name, age, weight, "man");
    }
    greeting(){
        return `Привіт! Мене звати ${this.name}, мені ${this.age} років.`;
    }
}