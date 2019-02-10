import React from "react";
import arrow from "../img/arrow.svg";

const ErrorText = () => {
  return (
    <div className="ErrorText">
      Ваша корзина пуста - добавьте товар
      <img src={arrow} alt="" />
    </div>
  );
};

export default ErrorText;
