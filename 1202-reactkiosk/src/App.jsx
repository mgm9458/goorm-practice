import { useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";

// 카드 형식의 이미지, 네임이 들어간 컴포넌트 만들어야됌
// 카트 컴포넌트를 만들어서 해당 카드 컴포넌트를 누르면 카트 컴포넌트에 카드가 담기는거지
// 카트 컴포넌트에 총합 가격 필요, 플러스, 마이너스, 삭제 버튼 필요, 개별 가격도 담겨있게

function App() {
  const [count, setCount] = useState(0);

  function ClickHandleTotalPrice(price) {
    setCount(count + price);
  }

  return (
    <>
      <MenuCard onClick={ClickHandleTotalPrice} />
      <span>Total {count}원</span>
    </>
  );
}

export default App;