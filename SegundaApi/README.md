# Node.JS API + express + swagger
Node.JS API con express & swagger creada en clase
## Comandos de docker
### Crear imagen en Docker
docker build -t el_nombre_de_tu_imagen .
### Crear contenedor en Docker
docker run -p 5433:5432 -d -e POSTGRES_PASSWORD=password el_nombre_de_tu_imagen
### Conectarte al contenedor
docker exec -it CONTAINER_ID sh
docker exec -it CONTAINER_ID bash