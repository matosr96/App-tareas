import axios from "axios";
import Axios from "axios";

export const getTaskRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const createTaskRequest = async (props: any) => {
  await axios.post("http://localhost:4000/tasks", props);
};
