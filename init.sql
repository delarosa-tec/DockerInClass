CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP
);

INSERT INTO accounts  (username, password, email, created_on, last_login)
VALUES ('admin', 'adfasd12a3==', 'admin@tec.mx', NOW(), NOW());

CREATE TABLE news (
	header VARCHAR ( 50 ) UNIQUE NOT NULL,
	description VARCHAR ( 150 ) NOT NULL
);

INSERT INTO news  (header, description)
VALUES ('hola mundo', 'hola mundo hola mundo hola mundo hola mundo hola mundo');