const express = require('express');
const Database = require('./database');
const cors = require('cors')
const port = 3001;
//Iniciamos en app el servidore web
const app = express()
//Agregamos CORS (politicas de seguridad)
// PAra que otros dominios (react localhost:3000) puedan acceder a nuestros datos
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor OK !!!');
})

app.get('/estudiante', (req, res) => {
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM estudiante', [],
        function (err, results, fields) {
            res.json(results)
        }
    );

})

// Obtener solo un profesor
app.get('/estudiante/:id', (req, res) => {
    const { id } = req.params;
    const db = new Database()
    const cn = db.getConnection()
    cn.execute(
        'SELECT * FROM estudiante WHERE id = ?', [id],
        function (err, results, fields) {
            res.json(results[0])
        }
    );

})

//REquest peticion     response  response
app.post('/estudiante', (req, res) => {
    const body = req.body;
    console.log (body);
    const db = new Database()
    const cn = db.getConnection()

    const query = `INSERT INTO ESTUDIANTE     
                (nombre, apellido, edad) VALUES
                 (?,?,?)`;

    cn.execute(
        query, [body.nombre, body.apellido, body.edad],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );
})

//update
app.put('/estudiante', (req, res) => {
    const body = req.body;
    console.log (body);
    const db = new Database()
    const cn = db.getConnection()

    const query = `UPDATE ESTUDIANTE     
                SET nombre=?, apellido=?, edad=? 
                WHERE id = ?`;
    cn.execute(
        query, [body.nombre, body.apellido, body.edad, body.id],
        function (err, results, fields) {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            }
            else {
                res.json(body)
            }
        }
    );
})
//Habilitamos el servidor en el puerto indicado
//En esta caso sera 3001 porque el 3000 ya es usado por React
app.listen(port, () => {
    console.log('Sevidor Express en: http://localhost:' + port);
})