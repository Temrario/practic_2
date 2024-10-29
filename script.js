const currentYear = new Date().getFullYear();

const rochki = (name, birthYear) => {
    const age = birthYear ? currentYear - birthYear : `N/A`;
    return birthYear ? `Я ${name}, мені ${age} років` : `Я ${name}`;
};

console.log(rochki("Олександр", 2006)); 
console.log(rochki("Максим")); 

class Human {
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

const person = new Human ("Олена", 22, 52, "woman");

console.log(person.getInfo(null));
console.log(person.getInfo("age"));
console.log(person.greeting());

class Man extends Human {
    constructor(name, age, weight){
        super(name, age, weight, "man");
    }
    greeting(){
        return `Привіт! Мене звати ${this.name}, мені ${this.age} років.`;
    }
}

class Woman extends Human {
    constructor(name,age,weight){
        super(name, age,weight, "woman")
    }
    greeting(){
        return `Привіт! Мене звати ${this.name}.`;
    }
}

const man = new Man("Олександр", 18, 72);
console.log(man.greeting());

const woman = new Woman("Ксеня", 19, 51);
console.log(woman.greeting());

const people = [
    new Man('Олександр', 18, 71),
    new Man('Максим', 18, 52),
    new Woman('Ксеня', 19, 51),
    new Woman('Наталя', 25, 55),
    new Man('Тарас', 33, 76),
    new Woman('Катерина', 29, 55),
    new Man('Григорій', 42, 85),
    new Woman('Зоряна', 27, 57),
    new Man('Богдан', 39, 79),
    new Woman('Наталія', 30, 54),
    new Man('Максим', 28, 77),
    new Woman('Юлія', 26, 53),
    new Man('Арсен', 32, 80),
    new Woman('Оксана', 34, 59),
    new Man('Юрій', 31, 81)
];

people.forEach(person => console.log(person.greeting()));


function searchInList(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
        const SEARCH_DELAY = 1000;
        setTimeout(() => {
            const results = list.filter(item => item[searchField] === searchValue);

            if (results.length > 0) {
                resolve(results);
            } else {
                reject(`За пошуком по ${searchField}: ${searchValue} не знайдено.`);
            }
        }, SEARCH_DELAY);
    });
}

searchInList(people, `name`, `Ксеня`)
.then(results => console.log("Результати пошуку:" , results))
.catch(error => console.log("Помилка:", error));
