// src/services/tareaService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createTarea = async (tarea) => {
  return await axios.post(`${API_URL}/tareas`, tarea);
};

export const getTarea = async (id) => {
  return await axios.get(`${API_URL}/tareas/${id}`);
};

export const updateTarea = async (id, tarea) => {
  return await axios.put(`${API_URL}/tareas/${id}`, tarea);
};

export const deleteTarea = async (id) => {
  return await axios.delete(`${API_URL}/tareas/${id}`);
};
