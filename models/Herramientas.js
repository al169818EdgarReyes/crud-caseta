const mongoose = require('mongoose');

const HerramientasSchema = mongoose.Schema({
    numeroInv:{
        type: Number,
        required: true,
        unique: true
    },
    
    nombre:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
    },

    cantidadDisp:{
        type: Number,
        required: true
    },

    caseta:{
        type: String,
        required: true
    },

    fechaArribo:{
        type: Date,
        //Borrar después
        default: Date.now
    },
    
});

module.exports = mongoose.model('herramientas', HerramientasSchema);