// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'
 
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
const mongoose = require('mongoose');
 
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
 
// Usamos el método connect para conectarnos a nuestra base de datos
const dbase = mongoose.connect('mongodb://10.13.142.224/juridiccional', {useMongoClient: true})
        .then(() => {
 
                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
        })
        .catch(err => console.log(err));
        // Si no se conecta correctamente escupimos el error

module.exports = dbase