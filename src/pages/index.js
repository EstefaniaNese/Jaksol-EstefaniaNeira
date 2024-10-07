import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMachines } from '../redux/machineSlice';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const machines = useSelector((state) => state.machines.list);

  useEffect(() => {
    dispatch(fetchMachines());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Estado de Máquinas</h1>
      <div className="machine-list">
        {machines.map((machine) => (
          <Link key={machine.id} href={`/machines/${machine.id}`} passHref className={styles.link}>
            <div className={styles.machineItem}>
              <h3>{machine.name}</h3>
              <p>Estado: {machine.status}</p>
              <p>Índice de Salud: {machine.health}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
