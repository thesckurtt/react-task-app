import { useState } from "react";
import CardsSection from "./components/CardsSection";
import MenuOptions from "./components/MenuOptions";
import Swal from "sweetalert2";
import InputsAddTasks from "./components/InputsAddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Tarefa exemplo 1",
      date: "2025-03-06",
      currentDate: "30/02/25",
      uuid: "32560819-050d-4e79-b5e9-b4b4ea211a96",
    },
    {
      title: "Tarefa exemplo 2",
      date: "2025-03-06",
      currentDate: "30/02/25",
      uuid: "32560819-050d-4e79-b5e9-b4b4ea394a96",
    },
    {
      title: "Tarefa exemplo 3",
      date: "2025-03-06",
      currentDate: "30/02/25",
      uuid: "32569465-050d-4e79-b5e9-b4b4ea394a96",
    },
  ]);

  const addTask = (task) => {
    Swal.fire({
      title: "Sucesso!",
      text: "Você adicionou uma nova tarefa",
      icon: "success",
      confirmButtonText: "OK",
    });
    setTasks([...tasks, task]);
  };

  const deleteTask = ({ id = "", deleteAll = false }) => {
    if (id) {
      const task = tasks.filter((e) => e.uuid === id)[0];

      Swal.fire({
        title: "Você tem certeza?",
        icon: "warning",
        html: `Você está prestes a deletar a tarefa: <b>${task.title.toString()}</b>`,
        showCancelButton: true,
        confirmButtonText: "Sim, deletar!",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Tarefa Excluída com sucesso!",
            html: `A tarefa <b>${task.title}</b> foi excluída.`,
            icon: "success",
          });
          setTasks(tasks.filter((e) => e.uuid !== id));
        }
      });
    }

    // Implementar deleteAll
    if (deleteAll) {
      Swal.fire({
        title: "Tem certeza que deseja apagar todas as tarefas?",
        icon: "warning",
        html: `Você está prestes a apagar <b>${tasks.length}</b> tarefas, tem certeza disso?`,
        showCancelButton: true,
        confirmButtonText: "Sim, deletar!",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setTasks([]);
        }
      });
    }

    // setTasks(tasks.filter((e) => e.uuid !== id));
  };

  return (
    <>
      <InputsAddTasks onAddTask={addTask} />
      <MenuOptions deleteTask={deleteTask} tasks={tasks}/>
      <CardsSection deleteTask={deleteTask} data={tasks} />
    </>
  );
}

export default App;
