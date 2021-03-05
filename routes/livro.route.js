const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const livro_controller = require('../controllers/livro.controller');

router.post('/create', livro_controller.create);

router.get('/:isbn', livro_controller.read);

router.post("/update", livro_controller.update);

router.delete('/delete/:isbn', livro_controller.delete);

module.exports = router;
