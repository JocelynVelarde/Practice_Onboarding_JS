//iterar en un objeto (permite keys y values)
const person = {name:"John", lname:"Doe", age:52};

for (let x in person) {
    let name = person[x];
    console.log(x + ": " + name);
}

for (let x in person) {
    let name = person[x];
    console.log(name);
}

//iterar en un array (no usar cuando el orden es importante)
const fruits = ["Apple", "Orange", "Apple", "Mango"];

for (let x in fruits) {
    let name = fruits[x];
    console.log(name);
}

//forEach()
const nums = [2, 5, 6, 7, 89];

nums.forEach(myFunction);

function myFunction(value) {
    console.log(value);
    }