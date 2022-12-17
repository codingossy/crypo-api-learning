import React from "react";
import { Chart as ChartJs , registerables} from 'chart.js'
import { Chart, Line } from 'react-chartjs-2'
ChartJs.register(...registerables)

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

//  Chart.register(CategoryScale)


  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#1ee682",
        borderColor: "#03fc56",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


  return (
    <div className="my-5">
      <h1 className="text-2xl my-4 capitalize text-blue-500">price chart</h1>
      <div className="flex justify-end gap-x-10 items-center font-semibold text-gray-500 my-10">
        <h4>Change: {coinHistory?.data?.change}%</h4>
        <h4>
          Current {coinName} Price: $ {currentPrice}
        </h4>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
