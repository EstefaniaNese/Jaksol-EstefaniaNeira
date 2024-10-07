import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ healthHistory }) => {
  const data = {
    labels: healthHistory.map((entry) => entry.date),
    datasets: [
      {
        label: 'Índice de Salud',
        data: healthHistory.map((entry) => entry.health),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
