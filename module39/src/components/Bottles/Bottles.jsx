import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addCart, getCart, removeCart } from "../../utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  const addHandleCarts = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    // add cart to local storage
    addCart(bottle.id);
  };

  const removeHandleCarts = (id) => {
    console.log(`removed bottle `, id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeCart(id);
  };

  useEffect(() => {
    const StoredCartIds = getCart();

    const StoredCart = [];

    for (let id of StoredCartIds) {
      console.log(id);
      const cartBottles = bottles.find((bottle) => bottle.id === id);
      if (cartBottles) {
        StoredCart.push(cartBottles);
      }
    }
    setCart(StoredCart);
  }, [bottles]);
  return (
    <div>
      <div className="cart">
        <h2>all Bottles:{bottles.length}</h2>
        <div>
          <h2>Cart: {cart.length}</h2>
          <Cart cart={cart} removeHandleBottles={removeHandleCarts} />
        </div>
      </div>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBottles={addHandleCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
