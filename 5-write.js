// ESCRITURA DE OBJETOS

/* JSON
Un solo archivo o varios dentro de un array 
En el ultimo no va coma
No van comentarios
Ni se pueden hacer variables, ni logica
Solo intercambios de datos en ese formato
*/

let fs = require('fs') // Es como el import 

// ESTA ES UNA MANERA DE GUARDAR INFORMACION:
let users = [
    { nombre : 'camila' },
    { nombre : 'iara'   }
    
]

let json = JSON.stringify(users)

fs.writeFileSync('./basic/users.json', json) // LO PRIMERO ES DONDE VA A ESCRIBIR Y LO SEGUNDO ES QUE VA A ESCRIBIR





