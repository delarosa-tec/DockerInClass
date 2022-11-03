const express = require('express')
var bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello')
})

//El metodo para validar que el sistema este corriendo
app.get('/health', function (req, res) {
  res.send('OK')
})

//El metodo de busqueda de usuarios
app.get('/users/:id', function (req, res) {
  var variable1 = req.params.id;
  res.send('Respuesta: ' + variable1)
})

//Insertar Usuario
app.post('/users', function (request, response) {
  var variable1 = request.body;
  response.send('Respuesta: ' + variable1.nombre + ' ' + variable1.apellido)
})

app.listen(3000)