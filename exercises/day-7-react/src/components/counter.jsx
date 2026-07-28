import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>{title}</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;