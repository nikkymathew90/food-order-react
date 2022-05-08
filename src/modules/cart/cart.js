import classes from "./cart.module.css";
import Modal from "common/UI/modal/modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];

  return (
    <Modal>
      <ul className={classes.items}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
