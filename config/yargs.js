descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion'
}
completado = {
    demand: false,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion,
    })
    .command('actualizar', 'Actualizar tareas', {
        descripcion,
        completado,
    })
    .command('listar', 'Mostrar todas las tareas', {
        completado
    })
    .command('borrar', 'Borra la tarea ingresada', {
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
}