FROM postgres:15.0-alpine3.16
COPY init.sql /docker-entrypoint-initdb.d
