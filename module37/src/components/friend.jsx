import React from "react";

const Friend = ({ friend }) => {
  console.log(friend);
  const { name, email, phone } = friend;
  return (
    <div style={{ border: "2px solid green", marginTop: "12px" }}>
      <h3>Name:{name}</h3>
      <h4>Email:{email}</h4>
      <p>Phone:{phone}</p>
    </div>
  );
};

export default Friend;
