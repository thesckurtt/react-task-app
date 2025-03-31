import { useState } from "react";
import CardsSection from "./components/CardsSection";
import InputSearch from "./components/InputSearch";
import MenuOptions from "./components/MenuOptions";

function App() {
  const [tasks, setTask] = useState([{title: "Tarefa exemplo", date: "2025-03-06", currentDate: "30/02", uuid: "32560819-050d-4e79-b5e9-b4b4ea211a96"}]);

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
