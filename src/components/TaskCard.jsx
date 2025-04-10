const TaskCard = ({title, date, currentDate, uuid, deleteTask}) => {
  console.log(date, currentDate)
  return (
    <div className="card mb-4" style={{width: "70%"}} data-uuid={uuid}>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span style={{marginLeft: "6px"}} className="card-subtitle mb-2 text-body-secondary badge text-bg-warning">
            Task
          </span>
        </h5>
        <p className="text-body-secondary" style={{marginTop: "-10px"}}>
          <i className="fa-solid fa-calendar"></i> {currentDate} - {`${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`}
        </p>
        <div className="d-flex flex-row justify-content-end gap-2">
          <button type="button" className="btn btn-sm btn-outline-dark">
            Concluir
          </button>
          <button type="button" className="btn btn-sm btn-outline-dark">
            Editar
          </button>
          <button type="button" className="btn btn-sm btn-outline-dark" onClick={()=>{deleteTask({id: uuid})}}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
