// Tipo de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object

// NUMBER
let var1 = 0;
console.log(typeof var1);

// UNDEFINED
let nodefinida;
console.log(nodefinida);

// NULL
let nulo = 45;
nulo = null;
console.log(nulo)

// STRING
let saludo = 'Hola mundo'; // Indistintas las comillas simples o dobles
console.log(typeof saludo);

let caracter = 'c';
let pizza = 'logo pizza';
console.log(saludo + "quiero una " + pizza);
//BACKTIK
console.log(`${saludo} quiero una ${pizza}`);

// CREAR OBJETO
// JSON = Javascript Object Notation
let actor = {
    nombre: 'Julia Roberts',
    edad: 47
}

console.log(`Nombre: ${actor.nombre}`);
console.log(`Nombre: ${actor['nombre']}`);


