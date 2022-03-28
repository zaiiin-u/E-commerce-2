import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/cart.context";
import {
  CartDropdownContainer,
  cartItem,
  EmptyMessage,
} from "./cart-dropdown.styles";
import Button from "../button.component";
import CartItem from "../../cart-item/cart-item.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };
  return (
    <CartDropdownContainer>
      <cartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage> Your cart is empty </EmptyMessage>
        )}
      </cartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
