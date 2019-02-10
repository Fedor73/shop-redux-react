import React from "react";

const ProductCard = product => {
  const { title, author, image, price, addToCart, addedCount } = product;
  return (
    <section>
      <h2>{title}</h2>
      <h3>{author}</h3>
      {!image ? (
        <img
          alt="NO IMAGES"
          src="https://www.mytoys.ru/static/ru/img/product/prod_notavailable_m.gif"
        />
      ) : (
        <img src={image} alt="" />
      )}
      <div className="price">{price} $</div>
      <button onClick={addToCart.bind(this, product)} className="add-button">
        купить {addedCount}
      </button>
    </section>
  );
};

export default ProductCard;
