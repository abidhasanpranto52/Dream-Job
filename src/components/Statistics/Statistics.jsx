import React from "react";
import {
  Bar,
  CartesianGrid,
  Pie,
  PieChart,
  RadarChart,
  Tooltip,
  XAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assignment-1", value: 60 },
    { name: "Assignment-2", value: 59 },
    { name: "Assignment-3", value: 60 },
    { name: "Assignment-4", value: 60 },
    { name: "Assignment-5", value: 55 },
    { name: "Assignment-6", value: 55 },
    { name: "Assignment-7", value: 59 },
    { name: "Assignment-8", value: 60 },
  ];

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <PieChart width={900} height={900}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="red"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
