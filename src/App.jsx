import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MachineList from './components/MachineList';
import MachineDetail from './components/MachineDetail';

const App = () => {
  return (
    <div className="App">
      <h1>Estado de Máquinas de la Fábrica</h1>
      <Routes>
        <Route path="/" element={<MachineList />} />
        <Route path="/machines/:id" element={<MachineDetail />} />
      </Routes>
    </div>
  );
};

export default App;
