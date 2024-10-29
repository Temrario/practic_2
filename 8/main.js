import {searchInList} from './search.js';
import {people} from './people.js';

console.log("Пошук за імемем Ксеня");
searchInList(people, `name`, `Ксеня`)
.then(results => console.log("Результати пошуку:" , results))
.catch(error => console.log("Помилка:", error));

console.log("Пошук за віком 28");
searchInList(people, `age`, 28)  
.then(results => console.log("Результати пошуку:", results))
.catch(error => console.log("Помилка:", error));

