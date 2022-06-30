import classes from "./headerCartButton.module.css";
import CartIcon from "./../../../common/UI/cartIcon/cartIcon";
import { useContext } from "react";
import CartContext from "store/cartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsCount = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
