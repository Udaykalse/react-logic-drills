import React from "react";

const Table = () => {
  const students = [
    { id: 1, name: "Parvej", subject: "Math", marks: 65 },
    { id: 1, name: "Siddharth", subject: "English", marks: 85 },
    { id: 1, name: "Sanmati", subject: "Marathi", marks: 75 },
  ];
  return (
    <div>
      <h2>Student Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
