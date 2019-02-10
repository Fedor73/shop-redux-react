export const addToCart = obj => ({
  type: "ADD_PRODUCT_BASKET",
  payload: obj
});

export const removeFromCart = id => ({
  type: "REMOVE_PRODUCT_BASKET",
  payload: id
});
