const express = require('express');
const consultorioRouter = express.Router();
const consultorioController = require('../controllers/consultorioController');

//Middleware
consultorioRouter.use(express.json());

// swagger
/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties: 
 *     name:
 *      type: string
 *      descripcion: el nombre del usuario
 *     age:
 *      type: integer
 *      descripcion: la edad del usuario
 *     email:
 *      type: string
 *      descripcion: el email del usuario
 *    required: 
 *     - name
 *     - age
 *     - email
 *   example:
 *     name: Alan Kay
 *     age: 70
 *     email: akay@gmail.com
 */
consultorioRouter.get('/', consultorioController.getPacientes);

consultorioRouter.get('/:dni', consultorioController.getPaciente);
consultorioRouter.post('/', consultorioController.createPaciente);
consultorioRouter.put('/:dni', consultorioController.updatePaciente);
consultorioRouter.delete('/:dni', consultorioController.deletePaciente);

module.exports = consultorioRouter
