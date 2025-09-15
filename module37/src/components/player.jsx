import React, { useState } from "react";

const Player = () => {
  const [runs, setRun] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRun = runs + 1;
    setRun(updatedRun);
  };
  const handleFours = () => {
    const updatedRun = runs + 4;
    setRun(updatedRun);
    const updatedFours = fours + 1;
    setFours(updatedFours);
  };
  const handleSixes = () => {
    const updatedRun = runs + 6;
    setRun(updatedRun);
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };

  return (
    <div>
      {runs > 50 && <p>congratulation your 50 done</p>}
      <h1>total runs:{runs}</h1>
      <h2>fours:{fours}</h2>
      <h2>sixes:{sixes}</h2>
      <h3>double:</h3>
      <button onClick={handleSingle}>single</button>
      <button onClick={handleFours}>fours</button>
      <button onClick={handleSixes}>sixes</button>
    </div>
  );
};

export default Player;
