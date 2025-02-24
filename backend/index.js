const express = require('express');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Rutas
const tareaRoutes = require('./routes/tarea'); // Asegúrate de que la ruta sea correcta
app.use('/tareas', tareaRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});