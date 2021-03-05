const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const livro_controller = require('../controllers/livro.controller');

router.get('/:isbn', livro_controller.read);

module.exports = router;