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
 *  get:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.get('/',usuarioController.readUsers);

/**
 * @swagger
 *  /api/users:
 *  post:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.post('/',usuarioController.createUser);

/**
 * @swagger
 *  /api/login:
 *  post:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.post('/login', usuarioController.login);

/**
 * @swagger
 *  /api/id:
 *  put:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.put('/:id',usuarioController.updateUser);

/**
 * @swagger
 *  /api/id:
 *  delete:
 *      summary: create a new user
 *      tags: [user]
 *      requestBody:
 *          required: true
 */
router.delete('/:id',usuarioController.deleteUser);

module.exports = router;