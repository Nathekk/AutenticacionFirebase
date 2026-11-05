const admin = require('firebase-admin');
require('dotenv').config();
import { getAuth } from "firebase/auth";
const serviceAccount = require(process.env.FIREBASE_CREDENTIALS);

const firebaseConfig = {
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = { auth };