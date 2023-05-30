// import * as fs from 'node:fs/promises';
// import { writeFile } from 'node:fs/promises';
// import { Buffer } from 'node:buffer';
const argv = require('./Config/yargs.js').argv;
const { error } = require('console');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { command } = require('yargs');

let comando = argv._[0];
switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite)
            //.then(archivo => console.log(archivo))
            .catch(error => console.log(error));
        break;
    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo} creado con Exito`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no Reconocido');

}

// let argv2 = process.argv;
// console.log(argv);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];