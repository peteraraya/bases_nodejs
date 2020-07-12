
// Requireds
const fs = require('fs'); // fs es nativo de node
var colors = require('colors');

// limite indica hasta donde quiero yo que llegue la tabla
let listarTabla = (base ,limite=10)=>{

    console.log('========================'.green);
    console.log(`TABLA DE ${base}`.green);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);

    }


}

let crearArchivo = ( base, limite=10 )=>{

    return new Promise((resolve,reject) => {
        let data = '';

        // Valido si el parametro es un numero
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite} .txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla del ${base} al ${limite}.txt`)
        });

    });
}



module.exports = {
    crearArchivo,
    listarTabla
}




