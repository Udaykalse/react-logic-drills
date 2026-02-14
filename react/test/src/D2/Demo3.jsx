import React, { useEffect, useState } from "react";

export default function Demo3() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>Show Loader while API Fetching</h2>
      <h3>User</h3>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        user.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}
