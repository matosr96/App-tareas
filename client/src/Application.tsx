import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFoundPages from "./components/NotFoundPages";
import Task from "./screens/Task";

const Application = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </>
  );
};

export default Application;
