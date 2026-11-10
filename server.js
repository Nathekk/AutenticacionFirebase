const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("views"));
app.use(express.json());

const indexRoutes = require('./routes/rutas.js');
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`Servidor correct http://localhost:${PORT}`);
});