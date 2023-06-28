CREATE DATABASE campuslands;

use campuslands;

CREATE TABLE campers(
    idCamper INT PRIMARY KEY AUTO_INCREMENT,
    nombreCamper VARCHAR(50),
    apellidoCamper VARCHAR(50),
    fechaNac DATE,
    idReg INT,
    FOREIGN KEY(idReg) REFERENCES region (idReg)
);

CREATE TABLE region(
    idReg INT PRIMARY KEY AUTO_INCREMENT,
    nombreReg VARCHAR(50),
    idDep INT,
    FOREIGN KEY(idDep) REFERENCES departamento (idDep)
);

CREATE TABLE departamento(
    idDep INT PRIMARY KEY AUTO_INCREMENT,
    nombreDep VARCHAR(50),
    idPais INT,
    FOREIGN KEY(idPais) REFERENCES pais (idPais)
);

CREATE TABLE pais(
    idPais INT PRIMARY KEY AUTO_INCREMENT,
    nombrePais VARCHAR(50)
);

