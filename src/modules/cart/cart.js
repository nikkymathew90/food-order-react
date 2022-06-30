import classes from "./cart.module.css";
import Modal from "common/UI/modal/modal";
import { useContext } from "react";
import CartContext from "store/cartContext";
import { getItemCartSummary } from "utilities/getItemSummary";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const totalPrice = `$${cartCntx.totalAmount.toFixed(2)}`;
  const itemSummary = getItemCartSummary(cartCntx.items);
  const hasItem = cartCntx.items.length > 0;

  const cartItemRemoveHandler = () => {};

  const cartItemAddHandler = () => {};

  return (
    <Modal hideCart={props.onHideCart}>
      <ul className={classes.items}>
        {Array.from(itemSummary.keys()).map((item) => (
          <CartItem
            item={itemSummary.get(item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
