const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
    // Información de la tarjeta de credito
    numero: {
        type: Integer,
        required: true,
    },
    fechaVencimiento: {
        type: Date,
        required: true,
    },
    cvv: {
        type: Integer,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    cupo: {
        type: Float,
        required: true,
    },
    // Información del titular de la tarjeta
    nombre: {
        type: String,
        required: true,
    },
    contacto: {
        type: Integer,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Card", cardSchema);
