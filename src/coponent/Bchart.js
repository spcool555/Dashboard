import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function Bchart({ chartData }) {
  return (
    <div style={{ width: 700 }}>
      {" "}
      <Bar data={chartData} />;
    </div>
  );
}

export default Bchart;
