const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreguntaSchema = new Schema(
    {
        categoria:{type: String, require: true},
        pregunta:{type: String, require: true},
        respuesta:{type: String, require: true},
        opcionUno:{type: String, require: false},
        opcionDos:{type: String, require: false},

    }, {timestamps:true}
);

const Pregunta = mongoose.model("preguntas", PreguntaSchema);

module.exports = Pregunta;