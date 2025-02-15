import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "./../contexts/CartContexts";

const Navigation = () => {
  const cart = useContext(CartContext);
  console.log("here", cart);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
