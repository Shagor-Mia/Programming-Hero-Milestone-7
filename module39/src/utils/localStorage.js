const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartItem = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addCartItem = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  saveCartItem(newCart);
};

const removeCart = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartItem(remainingCart);
};

export {
  getCartFromLocalStorage as getCart,
  addCartItem as addCart,
  removeCart,
};
