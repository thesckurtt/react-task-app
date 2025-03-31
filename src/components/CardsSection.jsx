import TaskCard from "./TaskCard";

const CardsSection = ({ data }) => {
  return (
    <section class="cards-section d-flex flex-column align-items-center">
      {data.reverse().map(({ title, date, currentDate, uuid }) => (
        <TaskCard key={uuid} title={title} date={date} currentDate={currentDate} uuid={uuid}/>
      ))}
    </section>
  );
};

export default CardsSection;
