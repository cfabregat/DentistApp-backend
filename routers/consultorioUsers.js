const express = require('express');
const router = express.Router();
const consultorioRouter = express.Router();
const usuarioController = require('../controllers/usuarioController');

consultorioRouter.use(express.json());

// swagger
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties: 
 *              name:
 *                  type: string
 *                  descripcion: el nombre del usuario
 *              age:
 *                  type: integer
 *                  descripcion: la edad del usuario
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

/**
 * @swagger
 *  /api/users:
 *  post:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.get('/',usuarioController.readUsers);

router.post('/',usuarioController.createUser);
router.post('/login', usuarioController.login);
router.put('/:id',usuarioController.updateUser);
router.delete('/:id',usuarioController.deleteUser);

module.exports = router;