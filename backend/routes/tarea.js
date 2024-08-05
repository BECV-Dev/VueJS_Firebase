const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

// Las rutas ya tienen el prefijo '/tareas' por la configuración en index.js
router.get('/', tareaController.TestConnection);
router.post('/', tareaController.createTarea);
router.get('/:id', tareaController.getTarea);
router.put('/:id', tareaController.updateTarea);
router.delete('/:id', tareaController.deleteTarea);

module.exports = router;
