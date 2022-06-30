import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm/mealItemForm";
import { useContext } from "react";
import CartContext from "store/cartContext";

export const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCntx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
      </div>
    </li>
  );
};
