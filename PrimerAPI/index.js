const http =  require('http');

const hostname = "127.0.0.1";
const puerto = 3010;

const server = http.createServer((request, response) => {
    response.end('Hola');
});

server.listen(puerto, hostname, () => {
    console.log(`El servidor esta corriendo en: http://${hostname}:${puerto}`);
});