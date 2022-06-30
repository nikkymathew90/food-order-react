import classes from "./mealItemForm.module.css";
import MealInput from "common/UI/input/input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    const inputAmountNum = +inputAmount;
    if (inputAmount.trim() === 0 || inputAmountNum < 1 || inputAmountNum > 5) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(inputAmountNum);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <MealInput
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
