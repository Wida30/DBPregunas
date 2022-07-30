const express = require("express");
const router = express.Router();

const {getAllPreguntas,getPreguntaByID, getPreguntaByCategory, createPregunta, patchPregunta, deletePregunta} = require("../controllers/pregunta.controller");

router.get("/", getAllPreguntas);
router.get("/:id", getPreguntaByID);
router.get("/categoria/:categoria", getPreguntaByCategory)

router.post("/",  createPregunta);

router.patch("/:id", patchPregunta);

router.delete("/:id", deletePregunta);

module.exports = router;