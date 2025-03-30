import TaskCard from "./TaskCard";

const CardsSection = ({ data }) => {
  return (
    <section class="cards-section d-flex flex-column align-items-center">
      {data.reverse().map(({ title, date, currentDate }, index) => (
        <TaskCard key={index} title={title} date={date} currentDate={currentDate} />
      ))}
    </section>
  );
};

export default CardsSection;
