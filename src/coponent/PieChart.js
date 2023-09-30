import React from "react";
import { Pie } from "react-chartjs-2";
function PieChart({ chartData }) {
  return (
    <div style={{ width: 300 }}>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
