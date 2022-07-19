import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};

export const getTask = (req, res) => {
  res.send("creando tarea");
};

export const createTasks = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTasks = (req, res) => {
  res.send("actualizando tareas");
};

export const deleteTasks = (req, res) => {
  res.send("eliminando tareas");
};
