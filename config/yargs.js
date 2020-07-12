
const opciones = {
         // recibe configruación de parametros
         base: {
             demand: true,
             alias: 'b'
         },
         limite: {
             alias: 'l',
             default: 10 // valor por defecto
         }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabala de multiplicar', opciones)
    .help()
    .argv;


    module.exports ={
        argv
    }