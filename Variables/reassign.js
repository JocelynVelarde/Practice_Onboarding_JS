//no puede ser reasignada

const pi = 3.1416;
pi = 3.15;

//TypeError porque no se puede reasignar una constante
console.log(pi);

//siempre declarar un valor con const cuando este no debe ser cambiado (arrays, ojetos, funciones, regex)
//const no es inmutable, solo no puede ser reasignada

const colores = ["Rojo", "Verde", "Azul"];
//se puede modificar el contenido del array
colores.push("Negro");

for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

//no se puede reasignar
colores = ["Verde", "Azul", "Amarillo"];
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  }