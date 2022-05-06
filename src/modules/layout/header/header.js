import { Fragment } from "react";
import classNames from "./header.module.css";
import foodImage from "../../../assets/food_header.png";
import HeaderCartButton from "./headerCartButton";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classNames.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classNames.mainImage}>
        <img src={foodImage} alt="food order"></img>
      </div>
    </Fragment>
  );
};
