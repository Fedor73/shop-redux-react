import React from "react";
import ErrorText from "./ErrorText";
import MainBasketItem from "./MainBasketItem";

const MainBasket = ({ items }) => {
  return (
    <ul className="basket">
      {items.length === 0 ? (
        <ErrorText />
      ) : (
        items.map(product => <MainBasketItem {...product} key={product.id} />)
      )}
    </ul>
  );
};

export default MainBasket;
