console.log(process.argv) //Asi es como realmente funciona node??
// Ejecutar un javascript en node es como ejecutar una funcion
console.log( __dirname) // Esta es la forma de saber donde estoy parado

// fs = filesystem

const fs = require('fs')
console.log(fs)

let content = fs.readFileSync('./basic/1-datatype.js', 'utf8') //Sin la segunda parte se ejecutan numeros como un buffer (Secuencia de datos, numeros en memoria) y si le pongo lo otro, es un string.
// Otras formas de convertirlo en string es: 

// console.log(String(content))
// console.log(content.toString())
// console.log('' + content)
// console.log(`${content}`)

console.log(content)

// en funciones SINCRONICAS se puede usar try - catch

try {
    let content = fs.readFileSync('./1-datatype.js', 'utf8')
    console.log(content)
} catch (err) //Lo llamas como quieras
{
    console.log(err.message)
    process.exit()
}

console.log('hola')