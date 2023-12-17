"use client";

import { Pie } from "react-chartjs-2";
import "chart.js/auto";

type ClassStrength = {
  capacity: number;
  strength: number;
  grade: string;
};

const schoolStrengthData: ClassStrength[] = [
  {
    capacity: 100,
    strength: 45,
    grade: "8th",
  },
  {
    capacity: 100,
    strength: 85,
    grade: "9th",
  },
  {
    capacity: 100,
    strength: 74,
    grade: "10th",
  },
];

const colors = ["#FF6B6B", "#66CCCC", "#FFD700"];

const data = {
  labels: schoolStrengthData.map((item) => item.grade),
  datasets: [
    {
      data: schoolStrengthData.map((item) => item.capacity - item.strength),
      label: "Vacancy",
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    },
  ],
};
const options = {
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 1,
};

const ClassStrengthPie = () => {
  return <Pie data={data} options={options}></Pie>;
};

export default ClassStrengthPie;
