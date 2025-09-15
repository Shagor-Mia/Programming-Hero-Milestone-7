import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const styleDiv = {
    border: "2px solid red",
  };
  return (
    <div style={styleDiv}>
      <h3>Count:{count}</h3>
      <button onClick={handleCount}>Add</button>
    </div>
  );
};

export default Counter;
