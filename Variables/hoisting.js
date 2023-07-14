//comportamiento de mover todas las declaraciones de variables y funciones al inicio de cada scope (funcion o script)
nombre = "Juan";
let nombre;
//ReferenceError porque no se puede acceder a una variable antes de declararla
console.log(nombre);

apellido = "Perez";
//no permite correr el codigo por SyntaxError
//const apellido;
console.log(apellido);

edad = 28;
var edad;
console.log(edad);

//siempre declarar variables al inicio de cada scope
