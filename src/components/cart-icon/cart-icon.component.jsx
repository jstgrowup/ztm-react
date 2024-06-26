import React, { useContext } from "react";

import "./cart-icon.styles.scss";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
  const { cartCount, setcartIsOpen } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={setcartIsOpen}>
      <span className="item-count">{cartCount}</span>
      <FaCartShopping className="shopping-icon" />
    </div>
  );
};

export default CartIcon;
