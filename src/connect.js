const mongoose = require('mongoose'); // Constante Mongoose

mongoose.connect('mongodb://10.13.142.224/juridiccional'); //Direccion del Servidor

module.exports = mongoose;