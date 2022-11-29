const express = require('express')
var bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const newrelic = require('newrelic')
const newrelicFormatter = require('@newrelic/winston-enricher')
const winston = require('winston')
const newrelicWinstonFormatter = newrelicFormatter(winston)
const validate = require('./validate')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.label({label: 'test'}),
    newrelicWinstonFormatter()
  ),
  defaultMeta: { service: 'segunda-api' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }

const app = express()

// const serverName = obtenerNombre()

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
  const response =  validate.validateUser(variable1) 
  res.json(response)
})

//Insertar Usuario
app.post('/users', function (request, resp) {
  var variable1 = request.body;
  const response = 'Respuesta: ' + variable1.nombre + ' ' + variable1.apellido
  // console.log('Respuesta: ' + variable1.nombre + ' ' + variable1.apellido)
    logger.info(response)
    resp.send(response)
})

/* ... */
newrelic.addCustomAttribute('some-attribute', 'some-value')

app.listen(3000)
