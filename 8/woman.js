import Human from "./human.js";

export default class Woman extends Human{
    constructor(name,age,weight){
        super(name, age,weight, "woman")
    }
    greeting(){
        return `Привіт! Мене звати ${this.name}.`;
    }
}