import { useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // 클릭할 때 실행하는 함수
  function AddToCart(nextItem) {
    // AddToCart 함수는 nextItem라는 변수를 갖고 있고 얘는
    setCartItems((prevItems) => {
      const isOption = prevItems.find(
        (previtem) => previtem.id === nextItem.id
        // prevItems에서 previtem의 id와 nextItem의 id가 같은 애들을 찾아서 isOption이라는 선언한 변수에 할당할거야
      );

      if (isOption) {
        // isOption이 true라면
        return prevItems.map(
          (previtem) =>
            previtem.id === nextItem.id
              ? // prevItems 안에 있는 previtem의 id와 nextItem의 id가 같다면
                { ...previtem, count: previtem.count + 1 }
              : // previtem 통짜객체를 포함한 뒤, key값이 count이고 value값이 previtem에 카운트 +1하라는 객체를 추가하여 반환할거야
                previtem // 그렇지 않으면 previtem을 그냥 반환할거야
        );
        // ex. prevItems = [{토피넛 라떼~}, {뱅쇼~}] nextItem = [{뱅쇼~}]
        // prevItems에는 토피넛 라떼와 뱅쇼가 있고 만약 추가로 뱅쇼가 들어온다면 배열을 반복해서 확인한 후 previtem 뱅쇼와 nextItem 뱅쇼의 id가 같으니까 뱅쇼는 count+1을 하고 토피넛라떼는 해당사항이 없으니까 그냥 previtem을 반환하는 것
      } else {
        return [...prevItems, { ...nextItem, count: 1 }];
      }
      // true가 아니라면 = prevItems안의 토피넛, 뱅쇼가 아닌 딸기라떼라면
      // prevItems 통짜객체 안에 nextItem 통짜객체 안에 count:1이라는 객체를 추가해서 반환해
    });
  }

  return (
    <>
      <MenuCard onAddToCart={AddToCart} />
      <Cart sopo={cartItems} />
    </>
  );
}
