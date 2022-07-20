import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NotFoundPages from "./components/NotFoundPages";
import Task from "./screens/Task";
import TaskForm from "./screens/TaskForm";

const Application = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </>
  );
};

export default Application;
