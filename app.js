
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log( argv );

let comando = argv._[0];

switch (comando) {
    case 'listar':
          console.log('Listar');
          listarTabla(argv.base,argv.limite);
        break;

    case 'crear':
        console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado :`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
            console.log('Comando no reconocido');
        break;
}






// REFERENCIAS --------------------------------------------------------------------
// const fs = require('express'); : no es propia de node
// const fs = require('./fs'); : archivos que nosotros creamos en el proyecto

// console.log(module);

// console.log(process);
// console.log(process.argv);
// console.log('Base:', argv.base);
// console.log('Limite:',argv.limite);
// uso de yargs
// let base = 'asd';
// parametros de la consola
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// let argv2 = process.argv;
// console.log(argv2);