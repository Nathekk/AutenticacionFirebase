const express = require('express');
const router = express.Router();
const path = require('path');
// const admin = require('firebase-admin'); // Comentado porque no se usa aún

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// Comenta esta ruta si aún no tienes configurado el archivo de credenciales de Admin
/*
router.get('/api/users', async (req, res) => {
    try {
        const listUsersResult = await admin.auth().listUsers(1000);
        const users = listUsersResult.users.map(userRecord => ({
            uid: userRecord.uid,
            email: userRecord.email,
            metadata: userRecord.metadata
        }));
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
*/

module.exports = router;