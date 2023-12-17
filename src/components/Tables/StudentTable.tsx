"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const generateRandomIndianNames = (count: number) => {
  const indianNames = [
    "Aarav Patel",
    "Aditi Shah",
    "Arjun Desai",
    "Ananya Singh",
    "Aryan Verma",
    "Isha Kapoor",
    "Rahul Malhotra",
    "Mira Reddy",
    "Vivan Sharma",
    "Zara Yadav",
    "Vihaan Kumar",
    "Myra Choudhury",
    "Kabir Mishra",
    "Aisha Nair",
    "Advait Singh",
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    fullName: indianNames[index % indianNames.length],
    grade: [8, 9, 10][Math.floor(Math.random() * 3)], // Randomly selects 8, 9, or 10
    srn: `SRN${index + 1000}`,
    phone: "123-456-7890",
    address: "Hubli-Dharwad, Karnataka",
  }));
};

const StudentTable = () => {
  const students = generateRandomIndianNames(15);
  const [allStudents, setAllStudents] = useState(students);
  const [selectedGrade, setSelectedGrade] = useState(8);
  useEffect(() => {
    setAllStudents(students.filter((item) => item.grade == 8));
  }, []);
  return (
    <div className="overflow-x-auto flex flex-col gap-4">
      <label>Choose grade</label>
      <select
        className="select w-full max-w-xs"
        onChange={(e) => {
          setAllStudents(
            students.filter((item) => item.grade == parseInt(e.target.value))
          );
        }}
      >
        <option disabled>Pick grade</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Fullname</th>
            <th>Grade</th>
            <th>SRN</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student) => (
            <tr key={student.id}>
              <th>{student.id}</th>
              <td>{student.fullName}</td>
              <td>{student.grade}</td>
              <td>{student.srn}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
