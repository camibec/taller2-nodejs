//LECTURA 
let fs = require('fs')
let users = require('./basic/users.json')
console.log(users)

// Node JS puede leer archivos.js y .json

//Para el JSON:

let content = fs.readFileSync('./basic/users.json')

let string = content.toString()

let json = JSON.parse(string) //convierto string a json

console.log(json [0].nombre)