import React from "react";

const Player = ({ name, runs }) => {
  return (
    <div>
      <h3>name:{name}</h3>
      <h4>runs:{runs}</h4>
    </div>
  );
};

export default Player;
