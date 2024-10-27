const express = require('express');
const consultorioRouter = require('./routers/consultorioRouter');
const consultorioUsers = require('./routers/consultorioUsers');
const conectarDB = require('./db/db');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const path = require ("path");

//  swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require( 'swagger-jsdoc');
const swaggerSpec = {
    definition: { 
        openapi: "3.0.0",
        info: {
            title: "DentistApp API",
            version: "1.0.0"
        },
        servers: [ 
            { 
            url: "http://localhost:3000"
            },
        ],
    },
    apis: [ `${path.join(__dirname, "./routers/*.js")}` ],
};

app.use(cors());
app.use(express.json()); 

conectarDB();

app.use('/api/pacientes', consultorioRouter);
app.use('/api/usuarios', consultorioUsers);
//  swagger
app.use( "/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)) ) ;

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
});
