// 단일 컴포넌트 구성
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 비어있는 애는 프라그먼트라고 부른다 자식 요소들을 묶어주지 않으면 오류가 나므로 하나의 태그로 묶어줘야하는데 아무런 기능 없이 사용할 수 있는 태그임 */}
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + 1 </button>
      <button onClick={() => setCount(count + 100)}> + 100 </button>
      <button onClick={() => setCount(count - 1)}> - 1 </button>
      <button onClick={() => setCount(count - 100)}> - 100 </button>
    </>
  );
}

export default App;
