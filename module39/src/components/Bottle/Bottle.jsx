import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handleBottles }) => {
  const { name, img, price, stock } = bottle;
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <h4>Stock:{stock}</h4>
      <button onClick={() => handleBottles(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
