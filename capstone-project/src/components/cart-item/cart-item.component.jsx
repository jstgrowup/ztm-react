import React from "react";
import "./cart-item.styles.scss";
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          {quantity}X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
