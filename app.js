const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
const argv = require('./config/yargs').argv;
let comando = argv._[0];

console.log(process.argv);
console.log(argv);

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado;
        if (argv.completado === undefined) {
            listado = porHacer.getListado();

        } else {
            listado = porHacer.getListado(argv.completado);
        }
        console.log('=================');
        for (let tarea of listado) {
            console.log('Tarea:', colors.green(tarea.descripcion));
            console.log('Completada: ', tarea.completado);
            console.log('=================');
        }
        break;
    case 'actualizar':
        let respuesta = porHacer.actualizar(argv.descripcion, argv.completado);
        if (respuesta === false) {
            console.log('Esa tarea no existe');

        } else {
            console.log('Tarea actualizada de: ', colors.green(argv.descripcion));
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado === false) {
            console.log(`No se pudo eliminar ${argv.descripcion} porque no existe`);

        } else {
            console.log('Tarea borrada: ', colors.red(argv.descripcion));
        }

        break;
    default:
        console.log('Comando inválido');

}