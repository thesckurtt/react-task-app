import { useState } from "react";
import CardsSection from "./components/CardsSection";
import InputSearch from "./components/InputSearch";
import MenuOptions from "./components/MenuOptions";
import Swal from "sweetalert2";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Tarefa exemplo",
      date: "2025-03-06",
      currentDate: "30/02",
      uuid: "32560819-050d-4e79-b5e9-b4b4ea211a96",
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

  const deleteTask = (id, deleteAll = false) => {
    const task = tasks.filter(e => e.uuid === id)[0];

    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      html: `Você está prestes a deletar a tarefa: <b>${(task.title).toString()}</b>`,
      showCancelButton: true,
      confirmButtonText: "Sim, deletar!",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tarefa Excluída com sucesso!",
          text: `A tarefa de id [${id}] foi excluída.`,
          icon: "success",
        });
        setTasks(tasks.filter((e) => e.uuid !== id));
      }
    });

    // Implementar deleteAll
    // if (deleteAll) {
    //   setTasks([]);
    // }

    // setTasks(tasks.filter((e) => e.uuid !== id));
  };

  // deleteTasks('32560819-050d-4e79-b5e9-b4b4ea211a96');
  return (
    <>
      <InputSearch onAddTask={addTask} />
      <MenuOptions />
      <CardsSection deleteTask={deleteTask} data={tasks} />
    </>
  );
}

export default App;
