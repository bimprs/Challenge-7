import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: [
      "MOBIL A",
      "MOBIL B",
      "MOBIL C",
      "MOBIL D",
      "MOBIL E",
      "MOBIL F",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 42, 73, 32, 26, 17],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div style={{ padding: "20px", margin: "50px auto", width: "30%" }}>
        <h2 className="text-center" >Data Mobil Paling Banyak Peminat</h2>
        <Pie data={data} />
      </div>
    </>
  );
};

export default Chart;
