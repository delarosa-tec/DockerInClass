const validateUser = (user) => {
    var response = '';
  //TODO: Crear busqueda de usuario
  if(user == "superAdmin") {
    const internalResponse = {nombre: 'John', apellido: 'Doe', propiedades: { edad: '49'}} 
    // logger.info('Se devuelve la respuesta ' + JSON.stringify(response))
    // logger.warn('Muestra Warn')
    // logger.warn('Muestra Request: ' + user)
    response = internalResponse
    // res.send('Usuario '+ variable1 + ' encontrado en la base de datos.')
  }
  else {
    const responseError = 'Usuario inexistente, favor de validar.'
    // logger.error(responseError + ' Usuario: ' + variauserble1)
    response = responseError
  }
  return response
}

exports.validateUser = validateUser