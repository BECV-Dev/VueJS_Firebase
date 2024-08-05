const admin = require('../src/config/firebase');
const db = admin.firestore();

exports.TestConnection = async (req, res) => {
  try {
    const collections = await db.listCollections();
    res.status(200).send(collections.map(col => col.id));
  } catch (error) {
    console.error("Error accediendo a Firestore:", error);
    res.status(500).send({ error: 'Error accediendo a Firestore', details: error.message });
  }
};

// Crear Tarea
exports.createTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const docRef = await db.collection('tareas').add({
      titulo: titulo,
      descripcion: descripcion,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send({ error: 'Error creando tarea' });
  }
};

// Obtener Tarea
exports.getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await db.collection('tareas').doc(id).get();
    if (!doc.exists) {
      res.status(404).send({ error: 'Tarea no encontrada' });
      return;
    }
    res.send(doc.data());
  } catch (error) {
    res.status(500).send({ error: 'Error obteniendo tarea' });
  }
};

// Actualizar Tarea
exports.updateTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const docRef = db.collection('tareas').doc(id);
    await docRef.update({
      titulo: titulo,
      descripcion: descripcion,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: 'Error actualizando tarea' });
  }
};

// Eliminar Tarea
exports.deleteTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('tareas').doc(id).delete();
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: 'Error eliminando tarea' });
  }
};
