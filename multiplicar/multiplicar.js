const fs = require('fs');
const { promises } = require('stream');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`No es una entrada correcta`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        resolve(console.log(data));

    });

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || (!Number(limite))) {
            reject(`El valor de entrada "${base}" o "${limite}" no es un Numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`Tablas/Tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`Tabla ${base} hasta el numero ${limite}.txt`)
                // console.log('El Archivo ha sido creado con exito');
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}