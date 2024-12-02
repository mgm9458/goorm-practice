import { useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // 클릭할 때 실행하는 함수
  function AddToCart(nextItem) {
    setCartItems((prevItems) => {
      const isOption = prevItems.find(
        (previtem) => previtem.id === nextItem.id
      );

      if (isOption) {
        return prevItems.map((previtem) =>
          previtem.id === nextItem.id
            ? { ...previtem, count: previtem.count + 1 }
            : previtem
        );
      } else {
        return [...prevItems, { ...nextItem, count: 1 }];
      }
    });
  }

  return (
    <>
      <MenuCard onAddToCart={AddToCart} />
      <Cart sopo={cartItems} />
    </>
  );
}

export default App;
