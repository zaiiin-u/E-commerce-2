import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import Button from "../button.component";
import CartItem from "../../cart-item/cart-item.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
