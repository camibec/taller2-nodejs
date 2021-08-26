// var es la forma antigua de declarar variables

var variable1 = 45;

var x = 1;
var x = 5;
if (x == 1) {
    var x = 2;
    console.log(x);
}

console.log(x);
/* Este ejemplo da 2 y 2, pero deberia dar 2 y 1. Nosotros cuando creamos
* la variable dentro del if es para que exista solo ahi, en este caso sigue afuera.
En el caso de ser cinco, no entra pero la toma igual aunque se la creo arriba */

/* Si cambiamos var por let, me dice que no puedo volver a crear la variable x (cuando le da)
* valor 5 y despues da 2 y 1*/

// En el caso de const, lo declaro una sola vez y no voy a cambiarlo.

const key = 123;

const persona = {
    nombre: 'Pablo',
    edad: 45
}

//Me permite cambiar los atributos, pero no cambia la referencia en la memoria
persona.nombre = 'Pedro';
console.log(persona);

Object.freeze(persona); //No se puede cambiar ninguna variable
persona.nombre = 'Juan';
console.log(persona);

Object.seal(persona); // La desfreezo
persona.nombre = 'Camila';
console.log(persona);