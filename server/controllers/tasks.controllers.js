import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createAt ASC"
  );
  res.json(result);
};

export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  {
    result.length == 0
      ? res.status(404).json({ message: "NO HAY TAREA" })
      : res.json(result[0]);
  }
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

export const deleteTasks = async (req, res) => {
  const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  {
    result.affectedRows === 0
      ? res.status(404).json({ message: "Tarea no encontrada" })
      : res.sendStatus(204);
  }
};
