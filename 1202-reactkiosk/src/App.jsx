import { useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";
import toffeeHot from "./assets/toffee-hot.png";
import toffeeIce from "./assets/toffee-ice.png";
import vinchaudHot from "./assets/vinchaud-hot.png";
import vinchaudIce from "./assets/vinchaud-ice.png";
import milkteaHot from "./assets/milktea-hot.png";
import milkteaIce from "./assets/milktea-ice.png";

// 가상 데이터
export const COFFEE = [
  { id: 1, imgSrc: toffeeHot, name: "토피 넛 라떼", price: 5600 },
  { id: 2, imgSrc: toffeeIce, name: "아이스 토피 넛 라떼", price: 6100 },
  {
    id: 3,
    imgSrc: vinchaudHot,
    name: "논알코올 홀리데이 패션 티 뱅쇼",
    price: 6100,
  },
  {
    id: 4,
    imgSrc: vinchaudIce,
    name: "아이스 논알코올 홀리데이 패션 티 뱅쇼",
    price: 6600,
  },
  { id: 5, imgSrc: milkteaHot, name: "클래식 밀크 티", price: 5200 },
  { id: 6, imgSrc: milkteaIce, name: "아이스 클래식 밀크 티", price: 5700 },
];

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
