const validate = require('./validate')

test('Testing User Validation', () => { 
    // const expectedResponse = {nombre: 'John', apellido: 'Doe', propiedades: { edad: '49'}} 
    const validation = validate.validateUser('superAdmin')
    expect(validation.nombre)
    .toBe('John') 
})

test('Testing Wrong User Validation', () => { 
    // const expectedResponse = {nombre: 'John', apellido: 'Doe', propiedades: { edad: '49'}} 
    const validation = validate.validateUser('admin')
    expect(validation)
    .toBe('Usuario inexistente, favor de validar.') 
})