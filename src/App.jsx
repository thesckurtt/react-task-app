import { useState } from "react";
import CardsSection from "./components/CardsSection";
import InputSearch from "./components/InputSearch";
import MenuOptions from "./components/MenuOptions";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Tarefa exemplo",
      date: "2025-03-06",
      currentDate: "30/02",
      uuid: "32560819-050d-4e79-b5e9-b4b4ea211a96",
    },
  ]);

  // console.log(tasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id, deleteAll = false) => {
    if (deleteAll) {
      setTasks([]);
    }
    setTasks(tasks.filter((e) => e.uuid !== id));
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
