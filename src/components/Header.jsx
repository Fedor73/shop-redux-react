import React from "react";
import logo from "../img/logo.svg";

const Header = ({ totalPrice, count }) => {
  return (
    <header>
      <img src={logo} alt="" />

      <div className="mony">
        <strong>
          Итого : <span>{totalPrice}</span>
        </strong>

        <strong>
          Корзина : <span>{count}</span>
        </strong>
      </div>
    </header>
  );
};

export default Header;
