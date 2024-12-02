import "./Card.css";

export default function Card({ name, imgSrc, price }) {
  return (
    <figure className="card">
      <img src={imgSrc} alt={name} />
      <figcaption>
        <p>{name}</p>
        <span>{price}원</span>
      </figcaption>
    </figure>
  );
}
