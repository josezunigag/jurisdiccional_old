const dbase      = require('../connect'); // Requiere Coneccion.js 
const { Schema } = require('mongoose');

    var ingresos = dbase.model('ingresos', new Schema({ // Definicion Implicito de Schema
        competencia_id: Number,
        cod_corte: Number,
        cod_tribunal: Number,
        ano: Number,
        mes: Number,
        fec_ingreso: Date,
        rit: String,
        tipo_causa_id: Number,
        tip_causa: String,
        gls_tipo_causa: String,
        tipo_ing_causa_id: Number,
        gls_ing_causa: String,
        materia_id: Number,
        glosa_materia: String
    }));

    ingresos.findOne().then(( result) => {
        console.log(result)
    })
    
    module.exports = ingresos