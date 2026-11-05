const express = require('express');
require('dotenv').config();
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT;

admin.initializeApp();

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});