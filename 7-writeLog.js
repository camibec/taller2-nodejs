// LECTURA DE LOS QUE NO SON JSON O JS
let fs = require('fs')

let args = proces.argv.slice(2)

//console.log(args-join('!'))
//MODULO FS PARA LECTURA Y TODO LO QUE TENGA QUE VER CON OBJETOS, ESTA TAMBIEN PARA CARPETAS PERO NO LO USA TANTO
//fs.appendFileSync('./basic/error.log', 'Se ejecuto el archivo writeLog.js\n')

let date = new Date
let ymd = `${date.getUTCFullYear()} ${date.getMonth()} ${date.getDate()}

/*fs.appendFileSync('./basic.7-wrtiteLong.js', Fecha: ${date} - Parametros:  ${date.getDay()} */
