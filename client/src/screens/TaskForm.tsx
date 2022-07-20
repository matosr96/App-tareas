import { Form, Formik } from "formik";
import { useState } from "react";
import { createTaskRequest } from "../api/tasks.api";

const TaskForm = () => {
  
 

  const submitCreateHandler = (e: any) => {
    e.preventDefault();
    createTaskRequest({
      title: title,
      description: description,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit" onClick={submitCreateHandler}>
          GUARDAR
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
