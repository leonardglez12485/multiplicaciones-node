const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        defual: 10
    }
}
const argv = require('yargs')
    .command('Listar', 'Imprime en Conmsola la tabla de multiplicar', opts)
    .command('Crear', 'Guarda un archivo con la tabla de multiplicar de un numero entrado por consola', opts)
    .help()
    .argv;

module.exports = {
    argv
}