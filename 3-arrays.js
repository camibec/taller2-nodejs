// Array: 0,1,2,3,4,5

let dias = [
    "Domingo",
    "Lunes",
    "Martes"
]
console.log(dias[0]);
dias[0] = "Sunday"
console.log(dias[0])

//En vez de cargar cada dato al array cuando no lo hago al princio
// uso el metodo push que lo pone en la ultima posicion

dias.push("Miercoles") // Puedo agregarlos de a varios "Miercoles", "Jueves", "Viernes"
console.log(dias)
dias.pop(); // Saco el ultimo
console.log(dias) //Si hacemos un typeof de un array, dice que es un object
//Tambien puedo ver si es un array, poniendo instanceof Array
console.log(dias instanceof Array)

//Un callback, una funcion que se le pasa otra funcion para ser ejecutada dentro de ese contexto
dias.forEach(function (x, i) {
    console.log(i, x)
})

for (let i=0; i< dias.length; i++){
    console.log(dias[i])
}

for (let prop of dias) {
    console.log(prop)
}

// Un igual (=) es asignacion de valor, no compara
// Doble igual (==) es comparacion de valor
// Triple igual (===) compara el tipo de dato y valor

let a = 123
let b = "123"

console.log( a == b)
console.log ( a === b)