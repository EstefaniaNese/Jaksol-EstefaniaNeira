import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MachineDetail = () => {
  const { id } = useParams();
  const machine = useSelector((state) =>
    state.machines.list.find((machine) => machine.id === parseInt(id))
  );

  if (!machine) {
    return <div>Máquina no encontrada</div>;
  }

  return (
    <div className="machine-detail">
      <h2>Detalles de {machine.name}</h2>
      <p>Estado: {machine.status}</p>
      <p>Índice de Salud: {machine.health}</p>
      <h3>Historial de Salud</h3>
      <ul>
        {machine.healthHistory.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.health}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MachineDetail;