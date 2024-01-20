// src/components/PieChart.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ill-plum-frog-robe.cyclic.app/api/yash'); // Replace with your server URL
        setPieChartData({
          labels: response.data.labels,
          values: response.data.values,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pie Chart</h2>
      <Plot
        data={[
          {
            labels: pieChartData.labels,
            values: pieChartData.values,
            type: 'pie',
          },
        ]}
        layout={{ width: 400, height: 400, title: 'Pie Chart' }}
      />
      <Plot
      data={[
        {
          labels: pieChartData.labels,
          values: pieChartData.values,
          hole: .4,
          type: 'pie',
        },
      ]}
      layout={{ width: 400, height: 400, title: 'Pie Chart' }}
        />
        <Plot
        data={[
          {
            labels: pieChartData.values,
            values: pieChartData.labels,
            type: "bar",
            orientation: "h"
          },
        ]}
        layout={{ width: 400, height: 400, title: 'Pie Chart' }}
          
          />
    </div>
  );
};

export default PieChart;
