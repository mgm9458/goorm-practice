// map이라는 함수는 배열에서 사용가능한 함수이다.
// map이 하는 일은 각 요소들을 새로운 형태의 배열로 반환하는 일

export default function Cart({ items }) {
  return (
    <section>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <img src={item.imgSrc} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <button>-</button>
                <span>{item.count}</span>
                <button>+</button>
              </div>
              <span>{item.price * item.count} 원</span>
              <button>삭제</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
