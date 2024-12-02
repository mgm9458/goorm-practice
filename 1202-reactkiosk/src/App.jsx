import { useState } from "react";
import "./App.css";
import MenuCard from "./components/MenuCard";
import toffeeHot from "./assets/toffee-hot.png";
import toffeeIce from "./assets/toffee-ice.png";
import vinchaudHot from "./assets/vinchaud-hot.png";
import vinchaudIce from "./assets/vinchaud-ice.png";
import milkteaHot from "./assets/milktea-hot.png";
import milkteaIce from "./assets/milktea-ice.png";
import creamHot from "./assets/double_cream-hot.png";
import creamIce from "./assets/double_cream-ice.png";
import strawLatte from "./assets/strawberry.png";
import bagleSand from "./assets/bagle sandwich.png";
import bucheDenoel from "./assets/buche de noel.png";
import cheeseBrioche from "./assets/cheese brioche sandwich.png";
import crapeCake from "./assets/choco crape cake.png";
import frenchFlan from "./assets/french flan.png";
import pestoSand from "./assets/pesto sandwich.png";
import redvelvetCake from "./assets/redvelvet cheese cake.png";
import snowBaumkuchen from "./assets/snowman baumkuchen.png";
import strawChoco from "./assets/strawberry choco cake.png";
import sweetPotato from "./assets/sweetpotato cake.png";
import treeBaumkuchen from "./assets/tree baumkuchen.png";
import treeCake from "./assets/tree cake.png";

// 가상 데이터
export const CAFE = [
  {
    id: 1,
    imgSrc: toffeeHot,
    name: "토피 넛 라떼",
    price: 5600,
    type: "coffee",
  },
  {
    id: 2,
    imgSrc: toffeeIce,
    name: "아이스 토피 넛 라떼",
    price: 6100,
    type: "coffee",
  },
  {
    id: 3,
    imgSrc: vinchaudHot,
    name: "논알코올 홀리데이 패션 티 뱅쇼",
    price: 6100,
    type: "coffee",
  },
  {
    id: 4,
    imgSrc: vinchaudIce,
    name: "아이스 논알코올 홀리데이 패션 티 뱅쇼",
    price: 6600,
    type: "coffee",
  },
  {
    id: 5,
    imgSrc: milkteaHot,
    name: "클래식 밀크 티",
    price: 5200,
    type: "coffee",
  },
  {
    id: 6,
    imgSrc: milkteaIce,
    name: "아이스 클래식 밀크 티",
    price: 5700,
    type: "coffee",
  },
  {
    id: 7,
    imgSrc: creamHot,
    name: "더블 에스프레소 크림 라떼",
    price: 6100,
    type: "coffee",
  },
  {
    id: 8,
    imgSrc: creamIce,
    name: "아이스 더블 에스프레소 크림 라떼",
    price: 6600,
    type: "coffee",
  },
  {
    id: 9,
    imgSrc: strawLatte,
    name: "딸기 라떼",
    price: 5700,
    type: "coffee",
  },
  {
    id: 10,
    imgSrc: bagleSand,
    name: "메리 베리 베이글 샌드",
    price: 5600,
    type: "dessert",
  },
  {
    id: 11,
    imgSrc: bucheDenoel,
    name: "스노우 크레이프 부쉬 드 노엘",
    price: 8900,
    type: "dessert",
  },
  {
    id: 12,
    imgSrc: cheeseBrioche,
    name: "필리 치즈 브리오슈 샌드위치",
    price: 6100,
    type: "dessert",
  },
  {
    id: 13,
    imgSrc: crapeCake,
    name: "부쉬 드 노엘 초코 크레이프 롤",
    price: 5800,
    type: "dessert",
  },
  {
    id: 14,
    imgSrc: frenchFlan,
    name: "밀레앙 딸기 프렌치 플랑",
    price: 5800,
    type: "dessert",
  },
  {
    id: 15,
    imgSrc: pestoSand,
    name: "햄 & 루꼴라 페스토 샌드위치",
    price: 6200,
    type: "dessert",
  },
  {
    id: 16,
    imgSrc: redvelvetCake,
    name: "트리 레드벨벳 치즈 케이크",
    price: 6100,
    type: "dessert",
  },
  {
    id: 17,
    imgSrc: snowBaumkuchen,
    name: "스노우맨 바움쿠헨",
    price: 6200,
    type: "dessert",
  },
  {
    id: 18,
    imgSrc: strawChoco,
    name: "딸기 촉촉 초코 생크림 케이크",
    price: 6400,
    type: "dessert",
  },
  {
    id: 19,
    imgSrc: sweetPotato,
    name: "고구마 카스텔라 생크림 케이크",
    price: 5600,
    type: "dessert",
  },
  {
    id: 20,
    imgSrc: treeBaumkuchen,
    name: "홀리데이 더블 크림 트리 바움쿠헨",
    price: 7900,
    type: "dessert",
  },
  {
    id: 21,
    imgSrc: treeCake,
    name: "조선델리 노엘 트리 케이크",
    price: 11900,
    type: "dessert",
  },
];
// const 상수 변수 -> 변하지 않는 값
// 변하지 않는 값들은 COFFEE와 같이 대문자로 작성하는 것이 암묵적인 룰
// let 변하는 값에 대한 변수

// 카드 형식의 이미지, 네임이 들어간 컴포넌트 만들어야 됨
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
