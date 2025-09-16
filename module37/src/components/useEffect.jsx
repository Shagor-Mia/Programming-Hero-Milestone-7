import React, { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);
  return (
    <div>
      <h3>players:{players.length}</h3>
      {players.map((player) => (
        <li>{player.name}</li>
      ))}
    </div>
  );
};

export default Players;
