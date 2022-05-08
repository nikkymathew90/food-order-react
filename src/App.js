import { Header } from "./modules/layout/header/header";
import { Fragment } from "react";
import Meals from "./modules/meals/meals";
import Cart from "./modules/cart/cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </Fragment>
  );
}

export default App;
