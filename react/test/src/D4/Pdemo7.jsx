import React, { useEffect, useState } from "react";

export default function Pdemo7() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed........");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  if (loading) return <p>Loading........</p>;
  if (err) return <p>Error :- {err}</p>;
  return (
    <div>
      <h1>Fetch API + Loading + Error</h1>
      <h3>Users</h3>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
