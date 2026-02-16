import React, { useEffect, useState } from "react";

export default function Pdemo1() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
      );
      const data = await res.json();
      setPosts(data);
    };
  });
  return (
    <div>
      <h1>Pagination (API)</h1>
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Prev
      </button>
      <span style={{ margin: "0 10px" }}>Page: {page}</span>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
      <hr />
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
