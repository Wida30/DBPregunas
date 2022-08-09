const Pregunta = require("../models/pregunta.model");
const HTTP = require("../../utils/HTTP");

const getAllPreguntas = async (req, res, next) => {
  try {
    const allPreguntas = await Pregunta.find();
    return res.json({
      status: 200,
      message: HTTP[200],
      preguntas: allPreguntas,
    });
  } catch (error) {
    return next(error);
  }
};

const getPreguntaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const preguntaByID = await Pregunta.findById(id);
    return res.json({
      status: 200,
      message: HTTP[200],
      preguntas: preguntaByID,
    });
  } catch (error) {
    return next(error);
  }
};

const getPreguntaByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const preguntaByCategoria = await Pregunta.find({
      categoria: categoria,
    });
    return res.json({
      status: 200,
      message: HTTP[200],
      preguntas: preguntaByCategoria,
    });
  } catch (error) {
    return next(error);
  }
};



const createPregunta = async (req, res, next) => {
  try {
    const newPregunta = new Pregunta(req.body);
    const createdPregunta = await newPregunta.save();
    return res.json({
      status: 200,
      message: HTTP[200],
      preguntas: createdPregunta,
    });
  } catch (error) {
    return next(error);
  }
};

const patchPregunta = async (req, res, next) => {
    try {
        const {id} = req.params;
        const patchPregunta = new Pregunta(req.body);
        patchPregunta._id = id;
        const PreguntaDB = await Pregunta.findByIdAndUpdate(id, patchPregunta);
        return res.status(200).json({nuevo: patchPregunta, vieja: PreguntaDB})
        
    } catch (error) {
        return next(error)
        
    }
};

const deletePregunta = async (req, res, next) => {
    try {

        const {id} = req.params;

        const pregntaBorrada = await Pregunta.findByIdAndDelete(id)

        return res.status(200).json(pregntaBorrada);
        
    } catch (error) {
        return next(error)
        
    }
};

module.exports = {getAllPreguntas,getPreguntaByID, getPreguntaByCategory, createPregunta, patchPregunta, deletePregunta};