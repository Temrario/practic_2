export default class Human {
    constructor(name, age, weight, gender){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    
    getInfo(prop){
        if (prop === null){
            return{
                name: this.name,
                age: this.age,
                weight: this.weight,
                gender: this.gender
            };
        }else{
            return this[prop];
        }
    }
    greeting(){
        return "Hi!";
    }
}
