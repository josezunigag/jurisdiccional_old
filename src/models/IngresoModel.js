const dbase      = require('../connect'); // Requiere Coneccion.js 
const { Schema } = require('mongoose');

const ingresos = dbase.model('ingresos', new Schema({ // Definicion Implicito de Schema
    cod_tribunal: Number
}));

module.exports = ingresos // Exportamos los atributos de ingresos.
