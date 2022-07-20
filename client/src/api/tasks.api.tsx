import axios from "axios";

export const getTaskRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const createTaskRequest = async (props: any) =>
  await axios.post("http://localhost:4000/tasks", props);

export const updateTaskRequest = async (id: number, props: any) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, props);

export const deleteTaskRequest = async (id: number) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);
