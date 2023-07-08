import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [12, 19, 8],
        backgroundColor: ['#F6DC7D', '#98D89E', '#EE8484'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return percentage;
        },
        anchor: 'end',
        align: 'start',
        color: '#023020',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
  };
  

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
