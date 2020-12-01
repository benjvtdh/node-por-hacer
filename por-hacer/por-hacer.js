const fs = require('fs');
let listadoPorHacer;

const cargarBD = () => {


    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }



}
const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo crear el registro', err);

    });


}

const getListado = (completado) => {
    cargarBD();
    if (completado === undefined) {
        return listadoPorHacer;

    } else {
        nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === completado);
        return nuevoListado;
    }


}

const crear = (descripcion) => {
    cargarBD();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;
}
const actualizar = (descripcion, completado = true) => {

    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        return false;
    } else {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;

    }
}

const borrar = (descripcion) => {
    cargarBD();
    let nuevoListado = listadoPorHacer.findIndex(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;

    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}