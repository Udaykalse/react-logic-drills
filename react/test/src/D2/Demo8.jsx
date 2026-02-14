import React from "react";

export default function Demo8() {
  const students = [
    { id: 1, name: "Uday", age: 22 },
    { id: 2, name: "Rahul", age: 21 },
    { id: 3, name: "Amit", age: 23 },
  ];
  return (
    <div>
      <h2>Users Table</h2>
      <table border="1" cellPadding={10}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
