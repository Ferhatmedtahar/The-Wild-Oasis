"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>we have now a {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
