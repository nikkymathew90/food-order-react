import { useState } from "react";
import { Header } from "./modules/layout/header/header";
import Meals from "./modules/meals/meals";
import Cart from "./modules/cart/cart";
import CartProvider from "store/cartProvider";

function App() {
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
