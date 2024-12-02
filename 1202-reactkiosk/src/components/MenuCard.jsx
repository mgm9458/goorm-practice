import { CAFE } from "../data";
import Card from "./Card";
import "./MenuCard.css";

export default function MenuCard({ onAddToCart }) {
  return (
    <ul className="menucard">
      {CAFE.map((item) => (
        <li key={item.id} onClick={() => onAddToCart(item)}>
          <Card name={item.name} imgSrc={item.imgSrc} price={item.price} />
        </li>
      ))}
    </ul>
  );
}
