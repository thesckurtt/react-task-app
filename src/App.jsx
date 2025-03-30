import { useState } from "react";
import CardsSection from "./components/CardsSection";
import InputSearch from "./components/InputSearch";
import TaskCard from "./components/TaskCard";

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
      <CardsSection data={tasks} />
    </>
  );
}

export default App;
