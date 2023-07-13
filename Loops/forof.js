//usar para objetos iterables

//iterar en un String
let language = "JavaScript";

for (let x of language) {
    console.log(x);
}


const employees = {position:"Developer", name:"John", lname:"Doe", age:25};

//objeto no iterable
for(let x of employees){
    console.log(x);
}

//una solucion es usar Object.values()
for(let x of Object.values(employees)){
    console.log(x);
}



