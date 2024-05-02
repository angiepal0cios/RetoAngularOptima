CREATE DATABASE IF NOT EXISTS optima;

USE optima;

-- Tabla para almacenar los clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(20)
);

-- Tabla para almacenar los proyectos
CREATE TABLE proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100),
    tipo VARCHAR(50)
);

-- Tabla para almacenar los créditos hipotecarios
CREATE TABLE creditos_hipotecarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    proyecto_id INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    monto_total DECIMAL(10, 2) NOT NULL,
    monto_parcial DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    CONSTRAINT fk_proyecto FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)
);

-- Tabla para almacenar los detalles de los pagos de los créditos hipotecarios
CREATE TABLE detalles_pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    credito_id INT NOT NULL,
    fecha_pago DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    archivo_voucher VARCHAR(255),
    CONSTRAINT fk_credito FOREIGN KEY (credito_id) REFERENCES creditos_hipotecarios(id)
);

-- Insertar datos en la tabla clientes
INSERT INTO clientes (nombre, apellido, email, telefono) VALUES
('Cliente 1', 'Apellido 1', 'cliente1@example.com', '123456789'),
('Cliente 2', 'Apellido 2', 'cliente2@example.com', '987654321'),
('Cliente 3', 'Apellido 3', 'cliente3@example.com', '111222333'),
('Cliente 4', 'Apellido 4', 'cliente4@example.com', '444555666'),
('Cliente 5', 'Apellido 5', 'cliente5@example.com', '777888999'),
('Cliente 6', 'Apellido 6', 'cliente6@example.com', '000111222');

-- Insertar datos en la tabla proyectos
INSERT INTO proyectos (nombre, ubicacion, tipo) VALUES
('Proyecto 1', 'Ubicación 1', 'Tipo 1'),
('Proyecto 2', 'Ubicación 2', 'Tipo 2'),
('Proyecto 3', 'Ubicación 3', 'Tipo 3'),
('Proyecto 4', 'Ubicación 4', 'Tipo 4'),
('Proyecto 5', 'Ubicación 5', 'Tipo 5'),
('Proyecto 6', 'Ubicación 6', 'Tipo 6');

-- Insertar datos en la tabla creditos_hipotecarios
INSERT INTO creditos_hipotecarios (cliente_id, proyecto_id, fecha_inicio, monto_total, monto_parcial) VALUES
(1, 1, '2024-04-30', 3000, 1000),
(2, 1, '2024-04-29', 3600, 1200),
(3, 1, '2024-04-28', 4500, 1500),
(4, 1, '2024-04-27', 4500, 1500),
(5, 1, '2024-04-26', 5400, 1800),
(6, 2, '2024-04-25', 6000, 2000);

-- Insertar datos en la tabla detalles_pagos (se puede adaptar según sea necesario)
INSERT INTO detalles_pagos (credito_id, fecha_pago, monto, archivo_voucher) VALUES
(1, '2024-05-30', 1000.00, 'ruta/voucher1.pdf'),
(1, '2024-06-30', 1000.00, 'ruta/voucher2.pdf'),
(1, '2024-07-30', 1000.00, 'ruta/voucher3.pdf'),
(2, '2024-05-29', 1200.00, 'ruta/voucher4.pdf'),
(2, '2024-06-29', 1200.00, 'ruta/voucher5.pdf'),
(2, '2024-07-29', 1200.00, 'ruta/voucher6.pdf'),
(3, '2024-05-28', 1500.00, 'ruta/voucher7.pdf'),
(3, '2024-06-28', 1500.00, 'ruta/voucher8.pdf'),
(3, '2024-07-28', 1500.00, 'ruta/voucher9.pdf'),
(4, '2024-05-28', 1500.00, 'ruta/voucher10.pdf'),
(4, '2024-06-28', 1500.00, 'ruta/voucher11.pdf'),
(4, '2024-07-28', 1500.00, 'ruta/voucher12.pdf'),
(5, '2024-05-27', 1800.00, 'ruta/voucher13.pdf'),
(5, '2024-06-27', 1800.00, 'ruta/voucher14.pdf'),
(5, '2024-07-27', 1800.00, 'ruta/voucher15.pdf'),
(6, '2024-05-26', 2000.00, 'ruta/voucher16.pdf'),
(6, '2024-06-26', 2000.00, 'ruta/voucher17.pdf'),
(6, '2024-07-26', 2000.00, 'ruta/voucher18.pdf');