-- CREACIÓN DEL USUARIO
CREATE USER detectarostro PASSWORD 'xD' LOGIN INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;

-- CREACIÓN DEL TABLESPACE (OPCIONAL)
CREATE TABLESPACE ts_detectarostro OWNER detectarostro LOCATION E'C:\\tablespaces\\detectarostro';

-- CREACIÓN DE LA BASE DE DATOS
CREATE DATABASE detectarostro OWNER = detectarostro TABLESPACE = ts_detectarostro;

-->> CONEXION CON EL USUARIO detectarostro para lo siguiente:

-- users:

create table users(
id serial primary key,
name varchar(100),
email text unique not null,
entries bigint default 0,
joined timestamp not null
);

-- login:

create table login(
id serial primary key,
hash varchar(100) not null,
email text unique not null
);
