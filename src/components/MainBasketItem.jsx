import React from "react";

const MainBasketItem = ({ title, price, id, removeFromCart }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={removeFromCart.bind(this, id)}>Удалить книги</button>
    </li>
  );
};

export default MainBasketItem;
