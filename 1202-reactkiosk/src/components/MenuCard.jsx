// 이미지, 이름을 props로 전달 받아서 사용하면 되겠지?
import { COFFEE } from "../data";
import Card from "./Card";
import "./MenuCard.css";

export default function MenuCard({ onClick }) {
  return (
    <ul className="menucard">
      {COFFEE.map((item) => (
        <li key={item.id} onClick={() => onClick(item.price)}>
          <Card name={item.name} imgSrc={item.imgSrc} price={item.price} />
        </li>
      ))}
    </ul>
  );
}
