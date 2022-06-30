import classes from "./cart.module.css";
import Modal from "common/UI/modal/modal";
import { useContext } from "react";
import CartContext from "store/cartContext";
//import { getItemCartSummary } from "utilities/getItemSummary";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const totalPrice = `$${cartCntx.totalAmount.toFixed(2)}`;
  //const itemSummary = getItemCartSummary(cartCntx.items);
  const hasItem = cartCntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal hideCart={props.onHideCart}>
      <ul className={classes.items}>
        {cartCntx.items.map((item) => (
          <CartItem
            item={item}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
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
