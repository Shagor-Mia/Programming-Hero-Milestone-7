import React from "react";

const Singer = ({ singer }) => {
  return (
    <div>
      <h4>singerName:{singer.name}</h4>
      <p>age:{singer.age}</p>
    </div>
  );
};

export default Singer;
