import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMachines } from '../redux/machineSlice';
import { useNavigate } from 'react-router-dom';

const MachineList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const machines = useSelector((state) => state.machines.list);

  useEffect(() => {
    dispatch(fetchMachines());
  }, [dispatch]);

  return (
    <div className="machine-list">
      {machines.map((machine) => (
        <div key={machine.id} onClick={() => navigate(`/machines/${machine.id}`)}>
          <h3>{machine.name}</h3>
          <p>Estado: {machine.status}</p>
          <p>Índice de Salud: {machine.health}</p>
        </div>
      ))}
    </div>
  );
};

export default MachineList;
