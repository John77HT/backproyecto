const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Configurar el servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(bodyParser.json()); // Procesar datos JSON

// Datos simulados para ciudades y usuarios
let ciudades = [
    { id_ciudad: 1, nombre: 'Ciudad de México' },
    { id_ciudad: 2, nombre: 'Guadalajara' }
];

let usuarios = [
    { id_usuario: 1, nombre: 'Juan', apellido: 'Pérez', id_ciudad: 1, direccion: 'Calle Falsa 123', id_tipo: 1, email: 'juan@example.com', telefono: '5551234567', genero: 'M', contra: '123456' }
];

// Rutas para ciudades
app.get('/api/ciudades', (req, res) => {
    res.json(ciudades);
});

app.post('/api/ciudades', (req, res) => {
    const nuevaCiudad = req.body;
    nuevaCiudad.id_ciudad = ciudades.length + 1; // Generar ID
    ciudades.push(nuevaCiudad);
    res.status(201).json(nuevaCiudad);
});

// Rutas para usuarios
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id_usuario = usuarios.length + 1; // Generar ID
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
