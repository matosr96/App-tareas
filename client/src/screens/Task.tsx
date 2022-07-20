import { useEffect, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api";
import "../styles/tasks.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [UpdateId, setUpdateId] = useState(0);


  const submitCreateHandler = (e: any) => {
    e.preventDefault();
    createTaskRequest({
      title: title,
      description: description,
    });
    setOpenModal(false);
    window.location.reload();
  };

  //UPDATE PROCCES
  const updateHandler = async (
    id: number,
    title: string,
    description: string
  ): Promise<void> => {
    setUpdateId(id);
    setTitleUpdate(title);
    setDescriptionUpdate(description);
    console.log("DATOS", id, title, description);

    await setOpenModalUpdate(!openModalUpdate);
  };

  const submitUpdateHandler = (e: any): void => {
    e.preventDefault();
    setOpenModalUpdate(!openModalUpdate);
    updateTaskRequest(UpdateId, {
      title: titleUpdate,
      description: descriptionUpdate,
    });
    window.location.reload();
  };

  const submitUpdateStateHandler = (id: number, done: boolean): void => {
    updateTaskRequest(id, { done: !done });
    window.location.reload();
  };

  const deleteHandler = (id: number) => {
    deleteTaskRequest(id);
    window.location.reload();
  };

  useEffect(() => {
    async function loadTask() {
      const response = await getTaskRequest();
      const { data } = response;
      setTasks(data);
    }
    loadTask();
  }, []);

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
                <th>Estado</th>
                <th>Id</th>
                <th>Titulo</th>
                <th className="desc">Descripcion</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((e: any) => (
                <tr key={e.id}>
                  {!e.done ? (
                    <td>
                      <button
                        className="state-task"
                        onClick={() => submitUpdateStateHandler(e.id, e.done)}
                      >
                        <i className="bx bxs-hourglass-top"></i> Pendiente
                      </button>
                    </td>
                  ) : (
                    <td>
                      <div className="realizada">
                        <i className="bx bxs-check-square"></i>
                      </div>
                    </td>
                  )}
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td className="desc">{e.description}</td>

                  <td>
                    <div className="actions">
                      <button
                        className="btn-actions edit"
                        onClick={() => {
                          updateHandler(e.id, e.title, e.description);
                          setOpenModalUpdate(!openModalUpdate);
                        }}
                      >
                        <i className="bx bx-edit"></i>
                      </button>
                      <button
                        className="btn-actions trash"
                        onClick={() => deleteHandler(e.id)}
                      >
                        <i className="bx bx-trash"></i>
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

      <div className={openModalUpdate ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal_header">
            <h2 className="titlemodal">Editar Tarea</h2>
            <button
              className="modal-close"
              onClick={() => setOpenModalUpdate(!openModalUpdate)}
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
                value={titleUpdate}
                onChange={(e) => setTitleUpdate(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="">Descripcion de la tarea</label>
              <textarea
                placeholder=""
                value={descriptionUpdate}
                onChange={(e) => setDescriptionUpdate(e.target.value)}
                rows={5}
              ></textarea>
            </div>
          </form>
          <div className="modal_footer">
            <button className="btn" onClick={submitUpdateHandler}>
              <h2>Guardar</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
