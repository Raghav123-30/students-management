"use client";

import "chart.js/auto";

import { Bar } from "react-chartjs-2";

type ClassStrength = {
  capacity: number;
  strength: number;
  grade: string;
};

const colors = ["#FF6B6B", "#66CCCC", "#FFD700"];

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
const options = {
  maintainAspectRatio: false,
  responsive: true,
  aspectRatio: 1,
};

const data = {
  labels: schoolStrengthData.map((item) => item.grade), // Use an array for labels
  datasets: [
    {
      label: "strength",
      data: schoolStrengthData.map((item) => item.strength),
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    },
  ],
};

const ClassStrengthBar = () => {
  return <Bar data={data} options={options}></Bar>;
};

export default ClassStrengthBar;
