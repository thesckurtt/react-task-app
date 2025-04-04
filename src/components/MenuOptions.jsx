import React from "react";

const MenuOptions = ({deleteTask}) => {
  return (
    <section className="info-section limit d-flex align-items-center justify-content-between">
      <span className="text-center h4 fw-bold">Gerencie suas tarefas</span>
      <div>
        <button className="btn btn-danger" onClick={()=> deleteTask({deleteAll: true})}>Apagar Todas</button>
      </div>
    </section>
  );
};

export default MenuOptions;
