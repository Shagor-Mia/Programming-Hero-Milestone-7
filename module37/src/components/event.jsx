import React from "react";

const Event = () => {
  function handleClick1() {
    alert(`clicked 1`);
  }
  const handleClick2 = () => {
    alert(`clicked 2`);
  };
  const handleClick3 = (num) => {
    const sum = num + 5;
    alert(`sum is ${sum}`);
  };
  return (
    <div>
      <button onClick={handleClick1}>click1</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => handleClick3(2)}>click3</button>
    </div>
  );
};

export default Event;
