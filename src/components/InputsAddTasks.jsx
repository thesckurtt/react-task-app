import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const InputsAddTasks = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [uuid, setUuid] = useState(uuidv4());
  const theDate = new Date();
  const [currentDate] = useState(`${String(theDate.getDate()).padStart(2, "0")}/${String(theDate.getMonth() + 1).padStart(2, "0")}/${ String(theDate.getFullYear()) } `)

  function handleAddTask() {
    if (!title || !date) {
      title || alert("Insira um título para a tarefa!");
      date || alert("Insira um uma data de conclusão para a tarefa!");
      return;
    }

    onAddTask({title, date, currentDate, uuid});
    setTitle("");
    setDate("");
    setUuid(uuidv4());
  }

  return (
    <header className="header-search p-4">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-describedby="inputGroup-sizing-lg"
            />
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-describedby="inputGroup-sizing-lg"
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddTask}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InputsAddTasks;
