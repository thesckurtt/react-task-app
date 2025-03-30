import { useState } from "react";
import CardsSection from "./components/CardsSection";
import InputSearch from "./components/InputSearch";
import TaskCard from "./components/TaskCard";
import MenuOptions from "./components/MenuOptions";

function App() {
  const [tasks, setTask] = useState([{title: "Tarefa exemplo", date: "2025-03-06", currentDate: "30/02"}]);

  console.log(tasks);

  const addTask = (task) => {
    setTask([...tasks, task])
  } 

  console.log(tasks);
  return (
    <>
      <InputSearch onAddTask={addTask}/>
      <MenuOptions />
      <CardsSection data={tasks} />
    </>
  );
}

export default App;
