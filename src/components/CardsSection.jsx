import TaskCard from "./TaskCard";

const CardsSection = ({ data, deleteTask }) => {
  console.log(data)
  return (
    <section className="cards-section d-flex flex-column align-items-center">
      {data.reverse().map(({ title, date, currentDate, uuid }) => (
        <TaskCard deleteTask={deleteTask} key={uuid} title={title} date={date} currentDate={currentDate} uuid={uuid}/>
      ))}
    </section>
  );
};

export default CardsSection;
