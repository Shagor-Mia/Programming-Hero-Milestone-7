import React from "react";

const Dev = (props) => {
  return (
    <div style={{ border: "2px solid green", borderRadius: "20px" }}>
      <h1>Developer:{props.name}</h1>
      <p>Language:{props.tech}</p>
    </div>
  );
};

export default Dev;
