const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.static('dist/optima-app'));

// Configura CORS para permitir solicitudes solo desde localhost:3000
app.use(cors({
    origin: 'http://localhost:4200'
}));

const port = 3000;

// Configurar conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'optima'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Configurar middlewares
app.use(bodyParser.json());


// Ruta para manejar la consulta y filtrado de datos
app.get('/api/creditos-hipotecarios', (req, res) => {
    const searchQuery = req.query.searchQuery;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    let sqlQuery = 'SELECT ch.id AS id, c.nombre AS cliente, p.nombre AS proyecto, ch.monto_total, ch.monto_parcial FROM optima.creditos_hipotecarios ch INNER JOIN optima.clientes c ON ch.cliente_id = c.id INNER JOIN optima.proyectos p ON ch.proyecto_id = p.id';
    
    if (searchQuery || (startDate && endDate)) {
      sqlQuery += ' WHERE ';
      if (searchQuery) {
        sqlQuery += `(c.nombre LIKE '%${searchQuery}%' OR p.nombre LIKE '%${searchQuery}%'
                    OR ch.monto_total LIKE '%${searchQuery}%' OR ch.monto_parcial LIKE '%${searchQuery}%')`;
        if (startDate && endDate) {
          sqlQuery += ' AND ';
        }
      }
      if (startDate && endDate) {
        sqlQuery += `fecha_inicio BETWEEN '${startDate}' AND '${endDate}'`;
      }
    }

    connection.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        res.json(results);
    });
});
  
//Ruta para obtener las fechas mínima y máxima de la tabla 
app.get('/api/fechas-min-max', (req, res) => {
    connection.query('SELECT MIN(fecha_inicio) AS minDate, MAX(fecha_inicio) AS maxDate FROM creditos_hipotecarios', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error al obtener las fechas mínima y máxima desde la base de datos');
        } else {
            res.json(results[0]);
        }
    });
});

app.get('/api/detalles-pagos/:creditoId', (req, res) => {
    const creditoId = req.params.creditoId; // Obtener el ID del crédito de los parámetros de la URL
    
    // Realizar la consulta a la base de datos para obtener los detalles de pagos del crédito
    const sqlQuery = `SELECT * FROM detalles_pagos WHERE credito_id = ?`; // Query SQL para obtener los detalles de pagos filtrados por credito_id
    
    // Ejecutar la consulta SQL con el ID del crédito como parámetro
    connection.query(sqlQuery, [creditoId], (err, results) => {
        if (err) {
            console.error('Error al obtener los detalles de pagos:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        
        // Enviar los detalles de pagos como respuesta
        res.json(results);
    });
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
