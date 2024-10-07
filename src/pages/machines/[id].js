import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMachines } from '../../redux/machineSlice';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = dynamic(() => import('../../components/LineChart'), { ssr: false });

const MachineDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const machines = useSelector((state) => state.machines.list);
  const machine = machines.find((machine) => Number(machine.id) === Number(id));

  useEffect(() => {
    if (router.isReady) {
      console.log('Fetching machines...');
      dispatch(fetchMachines());
    }
  }, [dispatch, router.isReady]);

  useEffect(() => {
    console.log('Machines:', machines);
    console.log('Selected Machine:', machine);
  }, [machines, machine]);

  if (!machines.length) {
    return <div>Cargando información de la máquina...</div>;
  }

  if (!machine) {
    return <div>No se encontró la información de la máquina.</div>;
  }

  return (
    <div className="machine-detail">
      <h2>Detalles de {machine.name}</h2>
      <p>Estado: {machine.status}</p>
      <p>Índice de Salud: {machine.health}</p>
      <p>Último Mantenimiento: {machine.lastMaintenance}</p>
      <h3>Historial de Salud</h3>
      <LineChart healthHistory={machine.healthHistory} />
      {machine.health < 50 && (
        <div className="alert">¡Atención! La máquina necesita mantenimiento pronto.</div>
      )}
      <button onClick={() => router.push('/')}>Regresar a la Lista</button>
    </div>
  );
};

export default MachineDetail;