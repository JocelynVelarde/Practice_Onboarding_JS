//las variables declaradas adentro de un bloque no pueden ser accedidas desde afuera
const apellido = "Perez";
var edad = 28;

{
  let nombre = "Juan";
  console.log(nombre, apellido, edad);
}

function myFunction() {
  let color = "Amarillo";
  console.log(color);
}

myFunction();

//el nombre y color no se puede acceder porque no es global
console.log(nombre, color);











