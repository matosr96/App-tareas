import { useEffect, useState } from "react";
import { createTaskRequest, getTaskRequest } from "../api/tasks.api";
import "../styles/tasks.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [openMenu, setOpenMenu] = useState(false);
  const [item, setItem] = useState("");

  const submitCreateHandler = (e: any) => {
    e.preventDefault();
    createTaskRequest({
      title: title,
      description: description,
    });
  };

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest();
      const { data } = response;
      setTasks(data);
      console.log("RTA", data);
    }
    loadTask();
  }, []);

  console.log(tasks);

  return (
    <>
      <div className="screens">
        <div className="header-screens">
          <h3>Tareas</h3>
          <button
            className="button-addproduct"
            onClick={() => setOpenModal(!openModal)}
          >
            Registrar Tarea
          </button>
        </div>
        <div className="container-screens">
          <div className="table-header">
            <h3>Lista de tareas</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Titulo</th>
                <th className="desc">Descripcion</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((e: any) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td className="desc">{e.description}</td>
                  <td>
                    <div className="actions">
                      <button className="btn-actions edit">
                        <i className="bx bx-edit"></i>
                      </button>
                      <button className="btn-actions trash">
                      <i className='bx bx-trash' ></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={openModal ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal_header">
            <h2 className="titlemodal">Crear Tarea</h2>
            <button
              className="modal-close"
              onClick={() => setOpenModal(!openModal)}
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          <form action="" className="form_items">
            <div className="input">
              <label htmlFor="">Titulo de la tarea</label>
              <input
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="">Descripcion de la tarea</label>
              <textarea
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              ></textarea>
            </div>
          </form>
          <div className="modal_footer">
            <button className="btn" onClick={submitCreateHandler}>
              <h2>Guardar</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
