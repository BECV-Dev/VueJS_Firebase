// backend/src/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./tareas-76824-firebase-adminsdk-7ivv2-69392d9e96.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Opcional si usas Firestore sin Realtime Database
});

module.exports = admin;
